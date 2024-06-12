import { createReducer } from '@reduxjs/toolkit';
import {
  setRound,
  setHistory,
  setHistoryWinner,
  addPlayer,
  reset,
  resetRound,
  setRequest,
  setFetch,
  endRound
} from './actions';

import {
  JackpotHistory,
  JackpotRoundData,
  GrandJackpotGame
} from 'api/types/jackpot';

export const initialGameData: JackpotRoundData = {
  status: 'created',
  roundId: 0,
  ticketId: '',
  signedString: '',
  players: [],
  nfts: [],
  winner: { id: 0, name: '', avatar: '' },
  usdBetAmount: 0,
  nftBetAmount: 0,
  totalBetAmount: 0,
  time: 0,
  rolltime: 60,
  animationTime: 60,
  candidates: [],
  request: false
};

export const initialHistory: JackpotHistory = {
  winner: 'All Games',
  games: []
};

export const initialState: GrandJackpotGame = {
  game: initialGameData,
  history: initialHistory,
  fetch: false
};

export default createReducer<GrandJackpotGame>(initialState, builder =>
  builder
    .addCase(setRound, (state, { payload }) => {
      state.game = { ...state.game, ...payload };
    })
    .addCase(setHistory, (state, { payload }) => {
      state.history.games = payload;
    })
    .addCase(setHistoryWinner, (state, { payload }) => {
      state.history.winner = payload;
    })
    .addCase(addPlayer, (state, { payload }) => {
      if (!payload.count) payload.count = 1;

      state.game.nfts = [...state.game.nfts, ...payload.nfts!];
      state.game.usdBetAmount += payload.usdAmount;
      state.game.nftBetAmount += payload.nftAmount!;

      let totalAmount =
        state.game.totalBetAmount + payload.usdAmount + payload.nftAmount!;
      state.game.totalBetAmount = totalAmount;

      const index = state.game.players.findIndex(
        player => player.id === payload.id
      );

      if (index !== -1) {
        const { usdAmount, nftAmount, nfts, count } = state.game.players[index];

        state.game.players[index] = {
          ...state.game.players[index],
          usdAmount: usdAmount + payload.usdAmount,
          nftAmount: nftAmount! + payload.nftAmount!,
          nfts: [...nfts!, ...payload.nfts!],
          count: count! + 1
        };
      } else {
        state.game.players.push(payload);
      }

      totalAmount = state.game.players.reduce((sum: number, player) => {
        sum +=
          player.role === 'admin'
            ? 0
            : player.usdAmount + (player.nftAmount ?? 0);
        return sum;
      }, 0);

      state.game.players.forEach(player => {
        if (player.role === 'admin') player.percent = 0;
        else
          player.percent =
            ((player.usdAmount + player.nftAmount!) / totalAmount) * 100;
      });

      state.game.players = state.game.players.sort(
        (p1, p2) =>
          p2.usdAmount + p2.nftAmount! - (p1.usdAmount + p1.nftAmount!)
      );
    })
    .addCase(endRound, (state, { payload }) => {
      const index = state.history.games.findIndex(
        game => game.roundId === payload.roundId
      );
      if (
        index === -1 &&
        (state.history.winner === 'All Games' ||
          state.history.winner === payload.winner.name)
      )
        state.history.games.unshift(payload);

      const length = state.history.games.length;
      if (length > Math.floor(length / 10) * 10)
        state.history.games = state.history.games.slice(
          0,
          Math.floor(length / 10) * 10
        );
    })
    .addCase(reset, () => initialState)
    .addCase(resetRound, state => {
      state.game = {
        ...initialGameData,
        time: state.game.time
      };
    })
    .addCase(setRequest, (state, { payload }) => {
      state.game.request = payload;
    })
    .addCase(setFetch, (state, { payload }) => {
      state.fetch = payload;
    })
);
