import { createReducer } from '@reduxjs/toolkit';
import { logoutUser } from 'state/user/actions';
import {
  changeTab,
  selectBot,
  cancelSelectedBots,
  loadBots,
  Staking
} from './actions';

export const initialState: Staking = {
  activeTab: 'STAKING',
  bots: [],
  selectedBots: []
};

export default createReducer<Staking>(initialState, builder =>
  builder
    .addCase(changeTab, (state, { payload }) => ({
      ...state,
      selectedBots: [],
      activeTab: payload
    }))
    .addCase(loadBots, (state, { payload }) => ({
      ...state,
      bots: payload
    }))
    .addCase(selectBot, (state, { payload }) => {
      const exist = state.selectedBots.find(
        item => item.mintAddress === payload.mintAddress
      );

      if (exist) {
        state.selectedBots = state.selectedBots.filter(
          item => item.mintAddress !== payload.mintAddress
        );
      } else state.selectedBots = [...state.selectedBots, payload];
    })
    .addCase(cancelSelectedBots, state => ({
      ...state,
      selectedBots: []
    }))
    .addCase(logoutUser, state => initialState)
    .addDefaultCase(state => state)
);
