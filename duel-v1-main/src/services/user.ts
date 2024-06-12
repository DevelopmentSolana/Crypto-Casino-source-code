import { toast } from 'react-toastify';
import api from './api';
import { FetchUserInfoResponse } from './types';

export const fetchUserInfo = async ({
  userId,
  userName
}: {
  userId?: number;
  userName?: string;
}) => {
  if (userId === undefined && userName === undefined)
    throw Error('userId or userName must provided');
  const { data } = await api.get<FetchUserInfoResponse>('/user/info', {
    params: { userId, userName }
  });
  return data;
};

export const sendTip = async ({
  userId,
  userName,
  amount,
  showInChat = true
}: {
  userId?: number;
  userName?: string;
  amount: number;
  showInChat?: boolean;
}) => {
  if (userId === undefined && userName === undefined)
    throw Error('userId or userName must provided');
  try {
    const { data } = await api.post('/user/tip', {
      recipient: userId || userName,
      userId,
      userName,
      amount,
      showInChat
    });
    return data;
  } catch (err: any) {
    if (err.response.status === 429) {
      toast.error(err.response.data.message);
    }
  }
};
