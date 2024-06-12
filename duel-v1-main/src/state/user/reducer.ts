import { createReducer } from '@reduxjs/toolkit';
import { Howler } from 'howler';
import {
  loadUser,
  logoutUser,
  loadCoupon,
  loadUserNfts,
  loadStatistics,
  saveProfile,
  deleteCoupon,
  updateBalance,
  toggleSound,
  setCountryCode,
  toggleJackpotAnimation,
  toggleGrandJackpotAnimation,
  isLedger,
  requestLogin,
  setBalanceType,
  setSelfExcludeTime,
  toggleCrashAnimation,
  setConfig
} from './actions';
import { Statistics } from 'api/types/statistics';
import { UserRole } from 'config';
import { Balance, PaidBalanceType } from 'api/types/chip';
import { initialBalances } from 'config/chip';
import { fetchUserInfo } from 'utils/fetchData';

export interface User {
  id: number;
  name: string;
  walletAddress: string;
  role: UserRole;
  avatar: string;
  balance: number;
  betBalanceType: 'chip' | 'coupon';
  balances: {
    [key in PaidBalanceType]: Balance;
  };
  nfts: {
    deposited: any[];
    undeposited: any[];
  };
  config: {
    crashClientSeed: string;
    balanceDecimals: number;
    rakebackRate: number;
    couponWagerTimes: number;
    couponLifeTime: number;
    couponMaxClaim: number;
  };
  statistics: Statistics;
  isAuthenticated: boolean;
  sound: boolean;
  code?: string;
  jackpotAnimation: '2D' | '3D';
  grandJackpotAnimation: '2D' | '3D';
  crashAnimation: boolean;
  isHoliday?: boolean;
  usingLedger: boolean;
  request: boolean;
  selfExcludeTime: number;
}

export const initialState: User = {
  id: 0,
  name: '',
  walletAddress: '',
  role: 'user',
  avatar:
    'https://duelana-bucket.s3.us-east-2.amazonaws.com/avatar/default.png',
  balance: 0,
  balances: initialBalances,
  betBalanceType: 'chip',
  nfts: {
    deposited: [],
    undeposited: []
  },
  statistics: {
    total_rounds: 0,
    winned_rounds: 0,
    lost_rounds: 0,
    best_streaks: 0,
    worst_streaks: 0,
    total_wagered: 0,
    max_profit: 0,
    total_profit: 0,
    private_profile: false
  },
  config: {
    crashClientSeed: '',
    balanceDecimals: 5,
    rakebackRate: 5,
    couponWagerTimes: 30,
    couponLifeTime: 8,
    couponMaxClaim: 50 * 10 ** 5
  },
  isAuthenticated: false,
  sound: true,
  jackpotAnimation: '3D',
  grandJackpotAnimation: '3D',
  crashAnimation: true,
  isHoliday: process.env.REACT_APP_HAPPY_HOLIDAY === 'true',
  usingLedger: false,
  request: false,
  selfExcludeTime: 0
};

export default createReducer<User>(initialState, builder =>
  builder
    .addCase(loadUser, (state, { payload }) => ({
      ...state,
      isAuthenticated: true,
      ...payload
    }))
    .addCase(loadCoupon, (state, { payload }) => {
      const coupon = {
        ...payload,
        expiredTime:
          Date.now() + (payload.remainingTime ? payload.remainingTime : 0)
      };
      state.balances.coupon = coupon;

      const multi = 10 ** (state.config.balanceDecimals - 2);

      if (state.betBalanceType === 'coupon')
        state.balance =
          Math.floor(state.balances.coupon.balance / multi) * multi;
    })
    .addCase(logoutUser, state => ({
      ...initialState,
      usingLedger: state.usingLedger
    }))
    .addCase(loadUserNfts, (state, { payload }) => ({
      ...state,
      nfts: { ...state.nfts, ...payload }
    }))
    .addCase(loadStatistics, (state, { payload }) => ({
      ...state,
      statistics: payload as Statistics
    }))
    .addCase(saveProfile, (state, { payload }) => ({
      ...state,
      ...payload
    }))
    .addCase(deleteCoupon, state => {
      state.balances.coupon.balance = 0;
    })
    .addCase(setConfig, (state, { payload }) => ({
      ...state,
      config: payload
    }))
    .addCase(updateBalance, (state, { payload }) => {
      if (state.name === '') return;
      const usdAmount = payload.usdAmount ?? 0;
      const balanceType = payload.balanceType ? payload.balanceType : 'chip';
      const nfts = payload.nfts ?? [];

      if (balanceType === 'coupon') {
        let expiredTime = state.balances.coupon.expiredTime;
        expiredTime = expiredTime ? expiredTime : Date.now() - 1000;
        if (Date.now() > expiredTime) {
          fetchUserInfo();
        }
      }

      if (payload.type === 1) {
        state.balance += usdAmount;
        nfts.forEach(nft => {
          let index = state.nfts.deposited.findIndex(
            item => item.mintAddress === nft.mintAddress
          );
          if (index === -1) state.nfts.deposited.push(nft);

          index = state.nfts.undeposited.findIndex(
            item => item.mintAddress === nft.mintAddress
          );

          if (index !== -1) state.nfts.undeposited.splice(index, 1);
        });

        if (balanceType !== 'chip' && !state.balances[balanceType].code) return;

        state.balances[balanceType].balance += usdAmount;
        const wagered = state.balances[balanceType].wagered
          ? state.balances[balanceType].wagered!
          : 0;
        if (payload.wagered && balanceType !== 'chip')
          state.balances[balanceType].wagered = wagered - payload.wagered;
      } else {
        state.balance -= usdAmount;
        nfts.forEach(nft => {
          let index = state.nfts.deposited.findIndex(
            item => item.mintAddress === nft.mintAddress
          );
          if (index !== -1) state.nfts.deposited.splice(index, 1);

          index = state.nfts.undeposited.findIndex(
            item => item.mintAddress === nft.mintAddress
          );

          if (index === -1) state.nfts.undeposited.push(nft);
        });

        if (balanceType !== 'chip' && !state.balances[balanceType].code) return;

        state.balances[balanceType].balance -= usdAmount;
        const wagered = state.balances[balanceType].wagered
          ? state.balances[balanceType].wagered!
          : 0;
        if (payload.wagered && balanceType !== 'chip')
          state.balances[balanceType].wagered = wagered + payload.wagered;
      }

      const multi = 10 ** (state.config.balanceDecimals - 2);

      state.balance =
        Math.floor(state.balances[state.betBalanceType].balance / multi) *
        multi;
    })
    .addCase(toggleSound, state => {
      Howler.mute(state.sound);
      state.sound = !state.sound;
    })
    .addCase(setCountryCode, (state, { payload }) => {
      state.code = payload;
    })
    .addCase(toggleJackpotAnimation, state => ({
      ...state,
      jackpotAnimation: state.jackpotAnimation === '2D' ? '3D' : '2D'
    }))
    .addCase(toggleGrandJackpotAnimation, state => ({
      ...state,
      grandJackpotAnimation: state.grandJackpotAnimation === '2D' ? '3D' : '2D'
    }))
    .addCase(toggleCrashAnimation, state => ({
      ...state,
      crashAnimation: !state.crashAnimation
    }))
    .addCase(isLedger, (state, { payload }) => ({
      ...state,
      usingLedger: payload
    }))
    .addCase(requestLogin, (state, { payload }) => ({
      ...state,
      request: payload
    }))
    .addCase(setBalanceType, (state, { payload }) => {
      const multi = 10 ** (state.config.balanceDecimals - 2);
      state.betBalanceType = payload;
      state.balance =
        Math.floor(state.balances[payload].balance / multi) * multi;
    })
    .addCase(setSelfExcludeTime, (state, { payload }) => ({
      ...state,
      selfExcludeTime: payload
    }))
    .addDefaultCase(state => state)
);
