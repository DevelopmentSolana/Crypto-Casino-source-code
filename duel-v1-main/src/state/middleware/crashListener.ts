/* eslint-disable no-fallthrough */
import _ from 'lodash';

import {
  CrashCashEvent,
  CrashGameStatusServer,
  CrashServerEvent,
  CrashBet
} from 'api/types/crash';
import state from 'state';
import { setFetch, setGameData, endRound } from 'state/crash/actions';
import { CRASH_BACK_TIME } from 'pages/Crash/config';
import { updateBalance } from 'state/user/actions';

interface CrashServerHistory {
  id: number;
  outcome: number;
}

export const crashVisitListener = ({
  round,
  history,
  time
}: {
  round: CrashServerEvent;
  history: CrashServerHistory[];
  time: number;
}) => {
  const differ = state.getState().socket.differ;
  const { preparingDuration } = state.getState().meta.crash;

  const { roundId, roundStatus, elapsed, multiplier, runStartedAt, bets } =
    round;

  let newBets = (bets ? bets : []).map(bet => {
    return {
      ...bet,
      roundId
    };
  });

  if (roundStatus === 'crash-status-preparing') {
    setTimeout(() => {
      state.dispatch(
        setGameData({
          time: time - elapsed + (preparingDuration - CRASH_BACK_TIME) * 1000,
          status: 'back'
        })
      );
    }, (preparingDuration - CRASH_BACK_TIME) * 1000 - (Date.now() - time + elapsed));
  }

  state.dispatch(
    setGameData({
      roundId,
      status: convertServerStatusToClientStatus(roundStatus),
      serverTimeElapsed: elapsed,
      from: multiplier,
      to: multiplier,
      startedTime: runStartedAt
        ? new Date(runStartedAt).getTime() + differ
        : Date.now(),
      time: time - elapsed,
      bets: newBets,
      history: convertServerHistoryToClientHistory(history),
      repeatBet: false
    })
  );

  state.dispatch(setFetch(true));
};

export const crashEventListener = ({
  event,
  time
}: {
  event: CrashServerEvent;
  time: number;
}) => {
  let {
    bets,
    status,
    startedTime,
    time: globalTime,
    to
  } = _.clone(state.getState().crash);
  const userId = state.getState().user.id;
  const { preparingDuration } = state.getState().meta.crash;

  let { roundId, roundStatus, elapsed, multiplier, cashIns, cashOuts } =
    _.clone(event);

  const serverStatus = convertServerStatusToClientStatus(roundStatus);

  if (!bets) bets = [];
  if (!cashIns) cashIns = [];
  if (!cashOuts) cashOuts = [];

  globalTime = time - elapsed;

  switch (serverStatus) {
    case 'bet':
      if (status !== 'bet') {
        bets = [];
        cashOuts = [];
      }
      startedTime = globalTime;
      break;
    case 'ready':
      startedTime = globalTime;
      break;
    case 'play':
      startedTime = globalTime;
      break;
    case 'explosion':
      state.dispatch(endRound({ multiplier, roundId }));

      setTimeout(() => {
        state.dispatch(
          setGameData({
            status: 'back',
            time: time - elapsed + (preparingDuration - CRASH_BACK_TIME) * 1000,
            bets: [],
            cashOuts: []
          })
        );
      }, (preparingDuration - CRASH_BACK_TIME) * 1000 - (Date.now() - time + elapsed));

      if (status === 'back') {
        bets = [];
        cashOuts = [];
      }
      break;
    default:
      break;
  }

  cashOuts.forEach(cashout => {
    if (cashout.user.id === userId) {
      state.dispatch(
        updateBalance({
          type: 1,
          usdAmount: cashout.amount,
          balanceType: cashout.balanceType
        })
      );
    }
  });

  bets = [
    ...bets,
    ...cashIns
      .filter(cashIn => {
        const index = bets.findIndex(bet => cashIn.betId === bet.betId);
        return index === -1;
      })
      .map(cashIn => convertCashInToBet(cashIn, roundId))
  ].map(bet => {
    const result = cashOuts!.find(cashOut => cashOut.betId === bet.betId);
    if (result) return convertCashOutToBet(bet, result);
    return bet;
  });

  state.dispatch(
    setGameData({
      roundId,
      status: serverStatus,
      startedTime,
      time: globalTime,
      from: to,
      to: multiplier,
      serverTimeElapsed: elapsed,
      bets,
      cashIns,
      cashOuts
    })
  );
};

export const crashEventListener1 = ({
  event,
  time
}: {
  event: CrashServerEvent;
  time: number;
}) => {
  const game = state.getState().crash;
  const id = state.getState().user.id;
  const { preparingDuration } = state.getState().meta.crash;

  const { roundId, roundStatus, elapsed, multiplier, cashIns, cashOuts } =
    event;

  let bets = game.bets ? [...game.bets] : [];
  let cashouts = game.cashOuts ? game.cashOuts : [];
  let serverTimeElapsed = elapsed;
  let startedTime = game.startedTime;

  // const status = convertServerStatusToClientStatus(roundStatus);

  if (roundStatus === 'crash-status-betting' && game.status !== 'bet') {
    bets = [];
    cashouts = [];
  }
  if (roundStatus === 'crash-status-preparing' && game.status === 'back') {
    bets = [];
    cashouts = [];
  }

  if (roundStatus === 'crash-status-running' /* && game.status !== 'play'*/)
    startedTime = time - elapsed;
  // if (roundStatus === 'crash-status-running')
  //   serverTimeElapsed += time - elapsed - startedTime;

  if (roundStatus === 'crash-status-preparing') {
    state.dispatch(endRound({ multiplier, roundId }));

    setTimeout(() => {
      state.dispatch(
        setGameData({
          status: 'back',
          time: time - elapsed + (preparingDuration - CRASH_BACK_TIME) * 1000
        })
      );
    }, (preparingDuration - CRASH_BACK_TIME) * 1000 - (Date.now() - time + elapsed));
  }

  cashouts = cashOuts ? cashOuts : [];

  cashouts.forEach(cashout => {
    if (cashout.user.id === id) {
      state.dispatch(updateBalance({ type: 1, usdAmount: cashout.amount }));
    }
  });

  bets = [
    ...bets,
    ...(cashIns ? cashIns : [])
      .filter(cashIn => {
        const index = game.bets.findIndex(bet => cashIn.betId === bet.betId);
        return index === -1 && cashIn.roundId === roundId;
      })
      .map(cashIn => convertCashInToBet(cashIn, roundId))
  ];

  bets = bets
    .map(bet => {
      const result = cashOuts?.find(cashOut => cashOut.betId === bet.betId);
      if (result) return convertCashOutToBet(bet, result);
      return bet;
    })
    .slice()
    .sort((b1, b2) => {
      if (b1.user.id === id) {
        if (b2.user.id === id) {
          return b1.betAmount *
            (b1.payoutMultiplier ? b1.payoutMultiplier : 1) <
            b2.betAmount * (b2.payoutMultiplier ? b2.payoutMultiplier : 1)
            ? 1
            : 0;
        }
        return 0;
      }
      if (b2.user.id === id) return 1;
      return b2.betAmount - b1.betAmount;
    });

  state.dispatch(
    setGameData({
      roundId,
      status: convertServerStatusToClientStatus(roundStatus),
      startedTime,
      time:
        roundStatus === 'crash-status-running' ? startedTime : time - elapsed,
      from: game.to,
      to: multiplier,
      serverTimeElapsed,
      bets,
      cashOuts: cashouts
    })
  );
};

const convertCashInToBet = (cashIn: CrashCashEvent, roundId: number) => {
  const { betId, amount, balanceType, cashOutAt, user } = cashIn;
  return {
    roundId,
    betId,
    user,
    betAmount: amount,
    paidBalanceType: balanceType,
    cashOutAt,
    pending: false
  } as CrashBet;
};

const convertCashOutToBet = (bet: CrashBet, cashOut: CrashCashEvent) => {
  const { betId, user, amount, balanceType, multiplier } = cashOut;
  return {
    ...bet,
    betId,
    user,
    paidBalanceType: balanceType,
    profit: amount,
    payoutMultiplier: multiplier,
    pending: false
  } as CrashBet;
};

const convertServerStatusToClientStatus = (status: CrashGameStatusServer) => {
  if (status === 'crash-status-betting') return 'bet';
  if (status === 'crash-status-pending') return 'ready';
  if (status === 'crash-status-running') return 'play';
  if (status === 'crash-status-preparing') return 'explosion';
  return 'bet';
};

const convertServerHistoryToClientHistory = (history: CrashServerHistory[]) => {
  return history.map(item => {
    return {
      roundId: item.id,
      multiplier: item.outcome
    };
  });
};
