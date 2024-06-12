import state from 'state';
import * as jackpotActions from '../jackpot/actions';
import { NFT } from 'api/types/nft';
import {
  User,
  Candidate,
  BetPlayer,
  JackpotHistoryData,
  TGameStatus,
  JackpotRoom
} from 'api/types/jackpot';

import { updateBalance } from 'state/user/actions';
import { sendMessage } from 'state/socket';

export const jackpotVisitListener = ({
  room,
  status,
  roundId,
  ticketId,
  signedString,
  players: bets = [],
  candidates = [],
  winner: win,
  prize,
  rollingDuration: rolltime = 15 * 1000,
  time: timestamp,
  offset,
  usdProfit,
  nftProfit,
  usdFee,
  nftFee,
  countingTime
}: {
  room: JackpotRoom;
  status: TGameStatus;
  roundId: number;
  ticketId?: string;
  signedString?: string;
  players: BetPlayer[];
  candidates?: Candidate[];
  winner?: User;
  prize?: number;
  rollingDuration?: number;
  time: number;
  offset: number;
  usdProfit?: number;
  nftProfit?: NFT[];
  usdFee?: number;
  nftFee?: NFT[];
  countingTime?: number;
}) => {
  let usdAmount = 0;
  let nftAmount = 0;
  let nfts: NFT[] = [];

  const differ = state.getState().socket.differ;

  const players = bets
    .map(bet => {
      const player = convertJackpotBetServerToClient({ ...bet });
      usdAmount += player.usdAmount;
      nftAmount += player.nftAmount!;
      nfts = [...nfts, ...player.nfts!];
      return player;
    })
    .sort(
      (p1, p2) => p2.usdAmount + p2.nftAmount! - (p1.usdAmount + p1.nftAmount!)
    );

  const totalBetAmount = usdAmount + nftAmount;

  players.forEach(player => {
    player.percent =
      ((player.nftAmount! + player.usdAmount) / totalBetAmount) * 100;
  });

  let animateTime = rolltime / 1000;
  const startedTime = timestamp - offset + differ;

  if (status === 'rolling') {
    let time = Date.now() - startedTime;
    animateTime = (rolltime - time) / 1000;
    if (animateTime < 0.05) animateTime = 0.05;

    candidates.forEach(candidate => {
      const player = players.find(player => player.id === candidate.id);
      candidate.percent = player ? player.percent : 0;
    });

    setTimeout(() => {
      const time = startedTime + rolltime;

      state.dispatch(
        jackpotActions.setRound({
          room,
          data: {
            status: 'rollend',
            time
          }
        })
      );

      const winner = players.find(player => player.id === win!.id);

      const historyData: JackpotHistoryData = {
        roundId,
        ticketId: ticketId!,
        signedString: signedString!,
        players: players.map(p => ({
          id: p.id,
          name: p.name,
          avatar: p.avatar
        })),
        winner: { id: winner!.id, name: winner!.name, avatar: winner!.avatar },
        chance: winner!.percent!,
        prize: prize!,
        time: startedTime + rolltime
      };

      state.dispatch(jackpotActions.endRound(historyData));
    }, animateTime * 1000);
  }

  state.dispatch(
    jackpotActions.setRound({
      room,
      data: {
        roundId,
        status,
        ticketId,
        signedString,
        players,
        nfts,
        winner: win,
        usdBetAmount: usdAmount,
        nftBetAmount: nftAmount,
        totalBetAmount,
        time: startedTime,
        rolltime: rolltime / 1000,
        animateTime,
        candidates,
        request: false,
        usdProfit,
        nftProfit,
        usdFee,
        nftFee,
        countingTime
      }
    })
  );

  state.dispatch(jackpotActions.setFetch({ room, fetch: true }));
};

export const jackpotAvailableListener = ({
  room,
  time
}: {
  room: JackpotRoom;
  roundId: number;
  ticketId?: string;
  time: number;
}) => {
  const differ = state.getState().socket.differ;
  state.dispatch(jackpotActions.resetRound(room));
  state.dispatch(
    jackpotActions.setRound({
      room,
      data: {
        status: 'available',
        time: time + differ
      }
    })
  );
};

export const jackpotCreatedListener = ({
  room,
  roundId,
  ticketId,
  time
}: {
  room: JackpotRoom;
  roundId: number;
  ticketId?: string;
  time: number;
}) => {
  const differ = state.getState().socket.differ;
  state.dispatch(
    jackpotActions.setRound({
      room,
      data: {
        status: 'created',
        roundId,
        ticketId,
        time: time + differ
      }
    })
  );

  const { game, autoBet } = state.getState().jackpot[room];
  const { balance, id: userId } = state.getState().user;
  if (autoBet) {
    if (balance < (autoBet.chip ?? 0)) {
      state.dispatch(jackpotActions.setAutoBet({ room }));
      return;
    }
    if (game.players.findIndex(player => player.id === userId) !== -1) {
      return;
    }
    state.dispatch(
      updateBalance({
        type: -1,
        usdAmount: autoBet.chip ?? 0,
        nfts: autoBet.nfts ?? []
      })
    );
    const content = JSON.stringify({
      amount: autoBet.chip ?? 0,
      nfts: autoBet.nfts ?? []
    });
    state.dispatch(
      sendMessage({
        type: 'event',
        room: 'jackpot',
        level: room,
        content
      })
    );
    state.dispatch(jackpotActions.setRequest({ room, request: true }));
  }
};

export const jackpotStartedListener = ({
  room,
  time
}: {
  room: JackpotRoom;
  roundId?: number;
  time: number;
}) => {
  const differ = state.getState().socket.differ;
  state.dispatch(
    jackpotActions.setRound({
      room,
      data: { status: 'started', time: time + differ }
    })
  );
};

export const jackpotRollingListener = ({
  room,
  roundId,
  ticketId,
  signedString,
  candidates,
  winner,
  chance,
  prize,
  rollingDuration: rolltime,
  time: timestamp,
  usdProfit,
  nftProfit,
  usdFee,
  nftFee
}: {
  room: JackpotRoom;
  roundId: number;
  ticketId: string;
  signedString: string;
  candidates: Candidate[];
  winner: User;
  chance: number;
  prize: number;
  rollingDuration: number;
  time: number;
  usdProfit?: number;
  nftProfit?: NFT[];
  usdFee?: number;
  nftFee?: NFT[];
}) => {
  const differ = state.getState().socket.differ;
  let { rollingTime, winnerTime } = state.getState().meta.jackpot[room];
  rollingTime -= winnerTime;

  const players = state.getState().jackpot[room].game.players;
  candidates.forEach(candidate => {
    const player = players.find(player => player.id === candidate.id);
    candidate.percent = player ? player.percent : 0;
  });

  let offset = Date.now() - (timestamp + differ);
  let animateTime = (rolltime - offset) / 1000;
  if (animateTime < 0.05) animateTime = 0.05;

  state.dispatch(
    jackpotActions.setRound({
      room,
      data: {
        status: 'rolling',
        time: timestamp + differ - (rollingTime * 1000 - rolltime),
        winner: winner,
        rolltime: rolltime / 1000,
        animationTime: animateTime,
        candidates,
        usdProfit,
        nftProfit,
        usdFee,
        nftFee
      }
    })
  );

  const historyData: JackpotHistoryData = {
    roundId,
    ticketId,
    signedString,
    players: candidates,
    winner,
    chance,
    prize,
    time: timestamp + differ
  };

  setTimeout(() => {
    state.dispatch(
      jackpotActions.setRound({
        room,
        data: {
          status: 'rollend',
          time: timestamp + differ + rolltime
        }
      })
    );
    state.dispatch(jackpotActions.endRound(historyData));
  }, animateTime * 1000);
};

export const jackpotBettedListener = (room: JackpotRoom, bet: any) => {
  const player = convertJackpotBetServerToClient(bet);
  state.dispatch(jackpotActions.addPlayer({ room, player }));
  const id = state.getState().user.id;
  if (id === 0 || id === player.id) {
    state.dispatch(jackpotActions.setRequest({ room, request: false }));
  }
};

export const jackpotResetTimeListener = ({
  room,
  countingTime
}: {
  room: JackpotRoom;
  countingTime?: number;
}) => {
  state.dispatch(jackpotActions.setRound({ room, data: { countingTime } }));
};

const convertJackpotBetServerToClient = (bet: any) => {
  let { name, avatar, usdAmount, nfts, id, betCount } = bet;
  if (!nfts) nfts = [];
  if (!betCount) betCount = 1;
  let nftAmount = nfts.reduce(
    (sum: number, nft: NFT) => sum + (nft.price ?? 0),
    0
  );
  // usdAmount = Math.floor((usdAmount as number) * 100) / 100;
  // nftAmount = Math.floor((nftAmount as number) * 100) / 100;
  const player: BetPlayer = {
    name,
    avatar,
    usdAmount,
    nftAmount,
    nfts,
    id,
    count: betCount
  };
  return player;
};
