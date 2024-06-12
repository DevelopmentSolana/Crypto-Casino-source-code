import { createReducer } from '@reduxjs/toolkit';
import { isMobile } from 'react-device-detect';
import uniqBy from 'lodash/uniqBy';

import {
  toggleChat,
  addMsgs,
  addUser,
  removeUser,
  setActiveUsers,
  setChatMsg,
  setChatError,
  ChatError,
  setChatConfig,
  clearMsgs,
  deleteMessageById,
  setReply,
  setSponsorToMessage
} from './actions';
import { Message, ChatUser } from 'api/types/chat';
import { DuelCommand } from 'config/commands';

export interface Chat {
  show: boolean;
  msgs: Message[];
  users: ChatUser[];
  msg: string;
  replyTo?: number;
  error?: ChatError;
  maxLength: number;
  wagerLimit: number;
  chatCooldown: number;
  tipMaxAmount: number;
  tipMinAmount: number;
  commands: DuelCommand[];
}

export const initialState: Chat = {
  show: !isMobile,
  msgs: [],
  users: [],
  msg: '',
  maxLength: 200,
  wagerLimit: 50000,
  chatCooldown: 3,
  tipMaxAmount: 0,
  tipMinAmount: 0,
  commands: []
};

export default createReducer<Chat>(initialState, builder =>
  builder
    .addCase(toggleChat, state => ({
      ...state,
      show: !state.show
    }))
    .addCase(addMsgs, (state, { payload }) => ({
      ...state,
      msgs: [...state.msgs, ...payload].slice(-200)
    }))
    .addCase(setActiveUsers, (state, { payload }) => {
      state.users = uniqBy(state.users.concat(payload), 'id');
    })
    .addCase(addUser, (state, { payload }) => {
      if (state.users.findIndex(user => user.id === payload.id) === -1)
        state.users.push(payload);
    })
    .addCase(removeUser, (state, { payload }) => {
      state.users = state.users.filter(user => user.id !== payload.id);
    })
    .addCase(setChatMsg, (state, { payload }) => {
      state.msg = payload;
    })
    .addCase(setChatError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(setChatConfig, (state, { payload }) => ({
      ...state,
      ...payload
    }))
    .addCase(clearMsgs, state => {
      state.msgs = [];
    })
    .addCase(deleteMessageById, (state, { payload }) => {
      const index = state.msgs.findIndex(msg => msg.id === payload);
      if (index === -1) return;
      state.msgs[index].deleted = true;
    })
    .addCase(setReply, (state, { payload }) => {
      state.replyTo = payload;
    })
    .addCase(setSponsorToMessage, (state, { payload }) => {
      state.msgs.forEach(msg => {
        if (msg.id === payload.id) {
          msg.sponsors = payload.sponsors;
        }
      });
    })
    .addDefaultCase(state => state)
);
