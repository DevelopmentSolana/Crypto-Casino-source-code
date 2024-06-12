import { createAction } from "@reduxjs/toolkit";

export interface Log {
  type: "Deposit" | "Withdraw";
  data?: number | string[];
  time: number;
  signature: string;
  status: "Success" | "Pending" | "Failed";
}

export const addLog = createAction<Log>("log/add");

export const setLog = createAction<Log>("log/set");

export const readLog = createAction<void>("log/read");
