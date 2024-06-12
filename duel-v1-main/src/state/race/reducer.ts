import { createReducer } from "@reduxjs/toolkit";
import { loadDailyInfo, loadWeeklyInfo } from "./actions";

export interface User {}

export const initialState: User = {};

export default createReducer<User>(initialState, (builder) =>
  builder.addCase(loadDailyInfo, (state) => {}).addDefaultCase((state) => state)
);
