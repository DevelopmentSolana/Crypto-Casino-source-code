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
  endRound,
  setRoom,
  setAutoBet
} from './actions';

import {
  JackpotGame,
  JackpotRoomGame,
  JackpotHistory,
  JackpotRoundData
} from 'api/types/jackpot';

export const initialGameData: JackpotRoundData = {
  status: 'available',
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
  rolltime: 15,
  animationTime: 15,
  candidates: [],
  request: false,
  countingTime: 40
};

export const initialHistory: JackpotHistory = {
  winner: 'All Games',
  games: []
};

export const initialGameRoom: JackpotRoomGame = {
  game: initialGameData,
  // history: initialHistory,
  fetch: false
};

export const initialState: JackpotGame = {
  low: initialGameRoom,
  medium: initialGameRoom,
  wild: initialGameRoom,
  room: 'wild',
  history: initialHistory
};

export default createReducer<JackpotGame>(initialState, builder =>
  builder
    .addCase(setRound, (state, { payload }) => {
      state[payload.room].game = {
        ...state[payload.room].game,
        ...payload.data
      };
    })
    .addCase(setHistory, (state, { payload }) => {
      state.history.games = payload.slice().sort((h1, h2) => h2.time - h1.time);
    })
    .addCase(setHistoryWinner, (state, { payload }) => {
      state.history.winner = payload;
    })
    .addCase(addPlayer, (state, { payload }) => {
      const { room } = payload;
      if (!payload.player.count) payload.player.count = 1;

      state[room].game.nfts = [
        ...state[room].game.nfts,
        ...payload.player.nfts!
      ];
      state[room].game.usdBetAmount += payload.player.usdAmount;
      state[room].game.nftBetAmount += payload.player.nftAmount!;

      const totalAmount =
        state[room].game.totalBetAmount +
        payload.player.usdAmount +
        payload.player.nftAmount!;
      state[room].game.totalBetAmount = totalAmount;

      const index = state[room].game.players.findIndex(
        player => player.id === payload.player.id
      );

      if (index !== -1) {
        const { usdAmount, nftAmount, nfts, count } =
          state[room].game.players[index];

        state[room].game.players[index] = {
          ...state[room].game.players[index],
          usdAmount: usdAmount + payload.player.usdAmount,
          nftAmount: nftAmount! + payload.player.nftAmount!,
          nfts: [...nfts!, ...payload.player.nfts!],
          count: count! + 1
        };
      } else {
        state[room].game.players.push(payload.player);
      }

      state[room].game.players.forEach(player => {
        player.percent =
          ((player.usdAmount + player.nftAmount!) / totalAmount) * 100;
      });

      state[room].game.players = state[room].game.players.sort(
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
    .addCase(resetRound, (state, { payload }) => {
      state[payload].game = initialGameData;
    })
    .addCase(setRequest, (state, { payload }) => {
      state[payload.room].game.request = payload.request;
    })
    .addCase(setFetch, (state, { payload }) => {
      state[payload.room].fetch = payload.fetch;
    })
    .addCase(setRoom, (state, { payload }) => {
      state.room = payload;
    })
    .addCase(setAutoBet, (state, { payload }) => {
      state[payload.room].autoBet = payload.autoBet;
    })
);
