import state from 'state';
import * as grandJackpotActions from '../grandJackpot/actions';
import { NFT } from 'api/types/nft';
import {
  User,
  Candidate,
  BetPlayer,
  JackpotHistoryData,
  TGameStatus
} from 'api/types/jackpot';

export const grandJackpotVisitListener = ({
  status,
  roundId,
  ticketId,
  signedString,
  players: bets = [],
  candidates = [],
  winner: win,
  prize,
  rollingDuration: rolltime = 60 * 1000,
  time: timestamp,
  offset,
  usdProfit,
  nftProfit,
  usdFee,
  nftFee
}: {
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
}) => {
  let usdAmount = 0;
  let nftAmount = 0;
  let nfts: NFT[] = [];

  const differ = Date.now() - timestamp;
  let totalAmount = 0;

  const players = bets
    .map(bet => {
      const player = convertJackpotBetServerToClient({ ...bet });
      usdAmount += player.usdAmount;
      nftAmount += player.nftAmount!;
      nfts = [...nfts, ...player.nfts!];
      if (player.role !== 'admin')
        totalAmount += player.usdAmount + player.nftAmount!;
      return player;
    })
    .sort(
      (p1, p2) => p2.usdAmount + p2.nftAmount! - (p1.usdAmount + p1.nftAmount!)
    );

  const totalBetAmount = usdAmount + nftAmount;

  players.forEach(player => {
    if (player.role === 'admin') player.percent = 0;
    else
      player.percent =
        ((player.nftAmount! + player.usdAmount) / totalAmount) * 100;
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
        grandJackpotActions.setRound({
          status: 'rollend',
          time
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

      state.dispatch(grandJackpotActions.endRound(historyData));
    }, animateTime * 1000);
  }

  state.dispatch(
    grandJackpotActions.setRound({
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
      nftFee
    })
  );

  state.dispatch(grandJackpotActions.setFetch(true));
};

export const grandJackpotStartedListener = ({
  roundId,
  ticketId,
  time
}: {
  roundId: number;
  ticketId?: string;
  time: number;
}) => {
  state.dispatch(grandJackpotActions.resetRound());
  const differ = state.getState().socket.differ;
  state.dispatch(
    grandJackpotActions.setRound({
      status: 'started',
      roundId,
      ticketId,
      time: time + differ
    })
  );
};

export const grandJackpotFinishedListener = ({
  // roundId,
  time
}: {
  roundId?: number;
  time: number;
}) => {
  const differ = state.getState().socket.differ;
  state.dispatch(
    grandJackpotActions.setRound({
      status: 'finished',
      time: time + differ
    })
  );
};

export const grandJackpotCountingListener = ({
  time
}: {
  roundId?: number;
  time: number;
}) => {
  const differ = state.getState().socket.differ;
  state.dispatch(
    grandJackpotActions.setRound({
      status: 'counting',
      time: time + differ
    })
  );
};

export const grandJackpotRollingListener = ({
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
  const meta = state.getState().meta.grandJackpot;
  let { rollingTime, winnerTime } = meta;
  rollingTime -= winnerTime;

  const players = state.getState().grandJackpot.game.players;
  candidates.forEach(candidate => {
    const player = players.find(player => player.id === candidate.id);
    candidate.percent = player ? player.percent : 0;
  });

  let offset = Date.now() - (timestamp + differ);
  let animateTime = (rolltime - offset) / 1000;
  if (animateTime < 0.05) animateTime = 0.05;

  state.dispatch(
    grandJackpotActions.setRound({
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
      grandJackpotActions.setRound({
        status: 'rollend',
        time: timestamp + differ + rolltime
      })
    );
    state.dispatch(grandJackpotActions.endRound(historyData));
  }, animateTime * 1000);
};

export const grandJackpotBettedListener = (bet: any) => {
  const player = convertJackpotBetServerToClient(bet);
  state.dispatch(grandJackpotActions.addPlayer(player));
  const name = state.getState().user.name;
  if (name === '' || name === player.name) {
    state.dispatch(grandJackpotActions.setRequest(false));
  }
};

export const convertJackpotBetServerToClient = (bet: any) => {
  let { name, avatar, usdAmount, nfts, id, role, betCount } = bet;
  if (!nfts) nfts = [];
  if (!betCount) betCount = 1;
  let nftAmount = nfts.reduce(
    (sum: number, nft: NFT) => sum + (nft.price ?? 0),
    0
  );
  usdAmount = Math.floor((usdAmount as number) * 100) / 100;
  nftAmount = Math.floor((nftAmount as number) * 100) / 100;
  const player: BetPlayer = {
    name,
    avatar,
    usdAmount,
    nftAmount,
    nfts,
    id,
    role,
    count: betCount
  };
  return player;
};
