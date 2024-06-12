import { createAction } from '@reduxjs/toolkit';

import {
  BetPlayer,
  JackpotHistoryData,
  JackpotRoom,
  JackpotAutoBet
} from 'api/types/jackpot';

export const setRound = createAction<{ room: JackpotRoom; data: any }>(
  'jackpot/round'
);

export const setHistory = createAction<JackpotHistoryData[]>('jackpot/history');

export const setHistoryWinner = createAction<string>('jackpot/history_winner');

export const addPlayer = createAction<{ room: JackpotRoom; player: BetPlayer }>(
  'jackpot/player_bet'
);

export const endRound = createAction<JackpotHistoryData>('jackpot/end_round');

export const reset = createAction('jackpot/reset');

export const resetRound = createAction<JackpotRoom>('jackpot/resetgame');

export const setRequest = createAction<{ room: JackpotRoom; request: boolean }>(
  'jackpot/set_request'
);

export const setFetch = createAction<{ room: JackpotRoom; fetch: boolean }>(
  'jackpot/fetchdata'
);

export const setRoom = createAction<JackpotRoom>('jackpot/setroom');

export const setAutoBet = createAction<{
  room: JackpotRoom;
  autoBet?: JackpotAutoBet;
}>('jackpot/set_auto_bet');
