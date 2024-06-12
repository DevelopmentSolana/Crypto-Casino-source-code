import { createAction } from '@reduxjs/toolkit';

export interface Staking {
  activeTab: 'STAKING' | 'UNSTAKING';
  bots: any[];
  selectedBots: any[];
}

// @@@ User Actions @@@
export const changeTab = createAction<'STAKING' | 'UNSTAKING'>(
  'staking/change-tab'
);

export const selectBot = createAction<any>('staking/select');

export const cancelSelectedBots = createAction<void>('staking/cancel');

export const loadBots = createAction<any[]>('staking/load');
