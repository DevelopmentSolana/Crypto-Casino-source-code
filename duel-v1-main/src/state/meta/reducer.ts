import { createReducer } from '@reduxjs/toolkit';
import {
  setCoinflipMeta,
  setDreamtowerMeta,
  setJackpotMeta,
  setGrandJackpotMeta,
  setCrashMeta,
  setPlinkoMeta,
  setMetaData
} from './actions';
import { CoinflipGameMeta } from 'api/types/coinflip';
import { JackpotGameMeta, GrandJackpotGameMeta } from 'api/types/jackpot';
import { DreamtowerGameMeta } from 'api/types/dreamtower';
import { CrashMeta } from 'api/types/crash';
import { PlinkoMeta } from 'api/types/plinko';

const initialCrashMeta: CrashMeta = {
  bettingDuration: 5,
  pendingDuration: 3,
  preparingDuration: 3,
  betCountLimit: 5,
  minBetAmount: 100,
  maxBetAmount: 10000,
  houseEdge: 5,
  maxPlayerLimit: 1000,
  minCashOutAt: 1.01,
  maxCashOut: 100000,
  eventInterval: 200
};

const initialPlinkoMeta: PlinkoMeta = {
  difficulties: ['Easy', 'Medium', 'Hard', 'OverDrive'],
  betCountLimit: 100,
  minBetAmount: 100000,
  maxBetAmount: 10000000
};

const initialCoinflipMeta: CoinflipGameMeta = {
  flipTime: 8,
  fee: 2,
  createRoundLimit: 5,
  minBetAmount: 10,
  maxBetAmount: 50000
};

const initialJackpotMeta: JackpotGameMeta = {
  minBetAmount: 10,
  maxBetAmount: 5000,
  betCountLimit: 5,
  playerLimit: 50,
  countingTime: 40,
  rollingTime: 30,
  winnerTime: 15,
  fee: 3.5
};

const initialGrandJackpotMeta: GrandJackpotGameMeta = {
  minBetAmount: 10,
  bettingTime: 60 * 60 * 23,
  countingTime: 60 * 60,
  rollingTime: 60,
  winnerTime: 60 * 60 - 60,
  fee: 5
};

const initialDreamtowerMeta: DreamtowerGameMeta = {
  difficulties: [
    {
      level: 'Easy',
      blocksInRow: 4,
      starsInRow: 3
    },
    {
      level: 'Medium',
      blocksInRow: 3,
      starsInRow: 2
    },
    {
      level: 'Hard',
      blocksInRow: 2,
      starsInRow: 1
    },
    {
      level: 'Expert',
      blocksInRow: 3,
      starsInRow: 1
    }
    // {
    //   level: 'Master',
    //   blocksInRow: 4,
    //   starsInRow: 1
    // }
  ],
  fee: 2,
  towerHeight: 9,
  minAmount: 100,
  maxAmount: 25000
};

interface Meta {
  coinflip: CoinflipGameMeta;
  jackpot: {
    wild: JackpotGameMeta;
    medium: JackpotGameMeta;
    low: JackpotGameMeta;
  };
  grandJackpot: GrandJackpotGameMeta;
  dreamtower: DreamtowerGameMeta;
  crash: CrashMeta;
  plinko: PlinkoMeta;
}

const initialState: Meta = {
  coinflip: initialCoinflipMeta,
  jackpot: {
    wild: initialJackpotMeta,
    medium: initialJackpotMeta,
    low: initialJackpotMeta
  },
  grandJackpot: initialGrandJackpotMeta,
  dreamtower: initialDreamtowerMeta,
  crash: initialCrashMeta,
  plinko: initialPlinkoMeta
};

export default createReducer<Meta>(initialState, builder =>
  builder
    .addCase(setMetaData, (state, { payload }) => ({ ...state, ...payload }))
    .addCase(setCoinflipMeta, (state, { payload }) => {
      state.coinflip = { ...state.coinflip, ...payload };
    })
    .addCase(setJackpotMeta, (state, { payload }) => {
      state.jackpot[payload.room] = {
        ...state.jackpot[payload.room],
        ...payload.meta
      };
    })
    .addCase(setGrandJackpotMeta, (state, { payload }) => {
      state.grandJackpot = { ...state.grandJackpot, ...payload };
    })
    .addCase(setDreamtowerMeta, (state, { payload }) => {
      state.dreamtower = { ...state.dreamtower, ...payload };
    })
    .addCase(setCrashMeta, (state, { payload }) => {
      state.crash = { ...state.crash, ...payload };
    })
    .addCase(setPlinkoMeta, (state, { payload }) => {
      state.plinko = { ...state.plinko, ...payload };
    })
);
