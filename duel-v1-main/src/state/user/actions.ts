import { createAction } from '@reduxjs/toolkit';
import { PaidBalanceType } from 'api/types/chip';
import { NFT } from 'api/types/nft';
import { UserRole } from 'config';

export interface User {
  id: number;
  name: string;
  walletAddress: string;
  role: UserRole;
  avatar: string;
}

// @@@ User Actions @@@

export const isLedger = createAction<boolean>('user/wallet-type');

export const loadUser = createAction<User>('user/load');

export const loadCoupon = createAction<any>('user/coupon');

export const logoutUser = createAction<void>('user/logout');

export const loadUserNfts = createAction<any>('user/loadNfts');

export const loadStatistics = createAction<any>('user/loadStatistics');

export const saveProfile = createAction<any>('user/saveProfile');

export const deleteCoupon = createAction<void>('user/deleteCoupon');

export const setBalanceType = createAction<PaidBalanceType>(
  'user/setBalanceType'
);

export const setConfig = createAction<any>('user/set_config');

export const updateBalance = createAction<{
  type: number;
  usdAmount?: number;
  wagered?: number;
  balanceType?: PaidBalanceType;
  nfts?: NFT[];
}>('user/update_balance');

export const toggleSound = createAction('user/setSound');

export const setCountryCode = createAction<string | undefined>(
  'user/setCountryCode'
);

export const toggleJackpotAnimation = createAction(
  'user/toggleJackpotAnimation'
);

export const toggleGrandJackpotAnimation = createAction(
  'user/toggleGrandJackpotAnimation'
);

export const toggleCrashAnimation = createAction('user/toggleCrashAnimation');

export const requestLogin = createAction<boolean>('user/request-login');

export const setSelfExcludeTime = createAction<number>(
  'user/self-exclude-time'
);
