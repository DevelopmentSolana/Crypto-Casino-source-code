import { createReducer } from "@reduxjs/toolkit";
import { addLog, setLog, readLog, Log } from "./actions";

export interface LogStatus {
  showDot: boolean;
  logs: Log[];
}

// const logs: Log[] = [
//   {
//     signature:
//       "f7fa7a4d4e8dda19a3afbec13a5fb4a540289b869b6a5a46162b7c3e3d9161ab",
//     status: "Pending",
//     time: Date.now(),
//     type: "Deposit",
//     data: 1000,
//   },
//   {
//     signature:
//       "f7fa7a4d4e8dda19a3afbec13a5fb4a540289b869b6a5a46162b7c3e3d9161ab",
//     status: "Success",
//     time: Date.now(),
//     type: "Withdraw",
//     data: 1000,
//   },
//   {
//     signature:
//       "f7fa7a4d4e8dda19a3afbec13a5fb4a540289b869b6a5a46162b7c3e3d9161ab",
//     status: "Failed",
//     time: Date.now(),
//     type: "Withdraw",
//     data: 1000,
//   },
// ];
export const initialState: LogStatus = {
  showDot: false,
  logs: [],
};

export default createReducer<LogStatus>(initialState, (builder) =>
  builder
    .addCase(addLog, (state, { payload }) => ({
      showDot: true,
      logs: [...state.logs, payload],
    }))
    .addCase(setLog, (state, { payload }) => {
      if (state.logs.find((item) => item.signature === payload.signature))
        return {
          showDot: true,
          logs: state.logs.map((item) => {
            if (item.signature !== payload.signature) return item;
            else {
              return {
                ...item,
                status: "Success",
              };
            }
          }),
        };
      else
        return {
          showDot: true,
          logs: [...state.logs, payload],
        };
    })
    .addCase(readLog, (state) => ({
      ...state,
      showDot: false,
    }))
    .addDefaultCase((state) => state)
);
