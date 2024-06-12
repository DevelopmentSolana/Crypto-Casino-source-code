import { createReducer } from '@reduxjs/toolkit';
import { loadStatistics, Statistics } from './actions';

export const initialState: Statistics = {
  totalBets: 0,
  totalWagered: 0,
  totalProfit: 0
};

export default createReducer<Statistics>(initialState, builder =>
  builder
    .addCase(loadStatistics, (state, { payload }) => ({
      totalBets: payload.totalBets,
      totalWagered: payload.totalWagered,
      totalProfit: payload.totalProfit
    }))
    .addDefaultCase(state => state)
);
