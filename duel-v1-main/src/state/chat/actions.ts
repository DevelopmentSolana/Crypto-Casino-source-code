import { createAction } from '@reduxjs/toolkit';
import { Message, ChatUser } from 'api/types/chat';

export const toggleChat = createAction<void>('chat/toggle');

export const addMsgs = createAction<Message[]>('chat/addmsgs');

export const addUser = createAction<ChatUser>('chat/addUser');

export const removeUser = createAction<ChatUser>('chat/removeUser');

export const setActiveUsers = createAction<ChatUser[]>('chat/setActiveUsers');

export const setChatMsg = createAction<string>('chat/setMsg');

export type ChatError =
  | 'locked'
  | 'banned'
  | 'muted'
  | 'notEnoughPeople'
  | 'notEnoughChip';

export const setChatError = createAction<ChatError | undefined>(
  'chat/setBanned'
);

export const setChatConfig = createAction<any>('chat/config');

export const clearMsgs = createAction('chat/clearMsgs');

export const deleteMessageById = createAction<number>('chat/deleteMsg');

export const setReply = createAction<number | undefined>('chat/setReply');

export const setSponsorToMessage = createAction<{
  id: number;
  sponsors: number[];
}>('chat/addSponsor');
