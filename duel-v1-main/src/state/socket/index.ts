import { createAction, createReducer } from '@reduxjs/toolkit';
import { SocketStatus } from 'api/types/socket';

export const wsConnect = createAction('WS_CONNECT');
export const wsConnected = createAction('WS_CONNECTED');
export const wsDisconnect = createAction('WS_DISCONNECT');
export const wsDisconnected = createAction('WS_DISCONNECTED');
export const sendMessage = createAction<{
  type: string;
  room: string;
  level?: string;
  content?: any;
}>('SEND_MESSAGE');
export const setAutoConnect = createAction<boolean>('AUTO_CONNECT');
export const setDiffer = createAction<number>('WS_DIFFER');

const initialState: SocketStatus = {
  connected: false,
  autoConnect: true,
  differ: 0
};

export default createReducer<SocketStatus>(initialState, builder =>
  builder
    .addCase(wsConnected, state => ({ ...state, connected: true }))
    .addCase(wsDisconnected, state => ({ ...state, connected: false }))
    .addCase(setAutoConnect, (state, { payload }) => ({
      ...state,
      autoConnect: payload
    }))
    .addCase(setDiffer, (state, { payload }) => {
      state.differ = payload;
    })
);
