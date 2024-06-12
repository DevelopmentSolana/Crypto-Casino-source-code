import { createAction } from '@reduxjs/toolkit';

import { BetPlayer } from 'api/types/jackpot';

import { JackpotHistoryData } from 'api/types/jackpot';

export const setRound = createAction<any>('grandJackpot/round');

export const setHistory = createAction<JackpotHistoryData[]>(
  'grandJackpot/history'
);

export const setHistoryWinner = createAction<string>(
  'grandJackpot/history_winner'
);

export const addPlayer = createAction<BetPlayer>('grandJackpot/player_bet');

export const endRound = createAction<JackpotHistoryData>(
  'grandJackpot/end_round'
);

export const reset = createAction('grandJackpot/reset');

export const resetRound = createAction('grandJackpot/resetgame');

export const setRequest = createAction<boolean>('grandJackpot/set_request');

export const setFetch = createAction<boolean>('grandJackpot/fetchdata');
