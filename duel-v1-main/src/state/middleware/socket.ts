import { Middleware } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from 'state';
import { toast } from 'utils/toast';
import { toast as reactToast } from 'react-toastify';

import { initialRound } from 'api/types/coinflip';
import {
  wsConnect,
  wsConnected,
  wsDisconnected,
  setDiffer
} from 'state/socket';
import * as coinflipActions from 'state/coinflip/actions';
import * as jackpotActions from 'state/jackpot/actions';
import * as grandJackpotActions from 'state/grandJackpot/actions';
import * as crashActions from 'state/crash/actions';
import {
  addMsgs,
  addUser,
  removeUser,
  setActiveUsers,
  setChatError,
  setChatConfig,
  clearMsgs,
  deleteMessageById,
  setSponsorToMessage
} from 'state/chat/actions';
import { setLog } from 'state/actions';
import { updateBalance } from 'state/user/actions';
import { SERVER_URL } from '../constant';

import {
  jackpotVisitListener,
  jackpotAvailableListener,
  jackpotCreatedListener,
  jackpotStartedListener,
  jackpotRollingListener,
  jackpotBettedListener,
  jackpotResetTimeListener
} from './jackpotListener';

import {
  grandJackpotVisitListener,
  grandJackpotStartedListener,
  grandJackpotRollingListener,
  grandJackpotFinishedListener,
  grandJackpotCountingListener,
  grandJackpotBettedListener
} from './grandJackpotListener';

import { crashVisitListener, crashEventListener } from './crashListener';
import { JackpotRoom } from 'api/types/jackpot';

export const socketMiddleware: Middleware<{}, AppState> = store => {
  let socket: WebSocket | null = null;
  const dispatch = store.dispatch as AppDispatch;

  const onOpen = () => {
    dispatch(wsConnected());
  };

  const onClose = () => {
    dispatch(wsDisconnected());

    dispatch(coinflipActions.reset());
    dispatch(jackpotActions.reset());
    dispatch(crashActions.reset());

    if (store.getState().socket.autoConnect) dispatch(wsConnect());
  };

  const onMessage = async (event: any) => {
    const { event: data, time: serverTime } = JSON.parse(event.data);
    const differ = store.getState().socket.differ;
    const time = new Date(serverTime).getTime() + differ;
    const offset = Date.now() - time;
    switch (data.room) {
      case 'coinflip':
        coinflip(data, time, offset);
        break;
      case 'jackpotLow':
        jackpot(data, new Date(serverTime).getTime(), 'low');
        break;
      case 'jackpotMedium':
        jackpot(data, new Date(serverTime).getTime(), 'medium');
        break;
      case 'jackpotWild':
        jackpot(data, new Date(serverTime).getTime(), 'wild');
        break;
      case 'grandJackpot':
        grandJackpot(data, new Date(serverTime).getTime());
        break;
      case 'crash':
        crash(data, time);
        break;
      case 'chat':
        chat(data);
        break;
      default:
        switch (data.eventType) {
          case 'connect':
            dispatch(setDiffer(Date.now() - new Date(serverTime).getTime()));
            break;
          case 'balance_update':
            const { type, balance, balanceType, wagered, nfts, delay } =
              data.payload;
            setTimeout(() => {
              dispatch(
                updateBalance({
                  type,
                  usdAmount: balance,
                  balanceType,
                  wagered,
                  nfts
                })
              );
            }, delay * 1000);
            break;
          default:
            payment(data);
        }
        break;
    }
  };

  const coinflip = async (data: any, time: any, offset: number) => {
    const user = store.getState().user;
    const { eventType, payload } = data;
    switch (eventType) {
      case 'game_data':
        const games = payload;
        //@ts-ignore
        games.forEach(game => {
          if (game.headsUser.name && game.tailsUser.name)
            game.status = 'joined';
          else game.status = 'created';
          game.request = false;
          game = { ...initialRound, ...game };
        });
        dispatch(coinflipActions.setGameData(games));
        dispatch(coinflipActions.setFetch(true));
        break;
      case 'created':
        dispatch(
          coinflipActions.setRound({
            status: 'created',
            ...payload,
            time
          })
        );
        if (payload.creatorId === user.id) {
          dispatch(
            coinflipActions.setCreateRequest(
              store.getState().coinflip.createRequest > 1
                ? store.getState().coinflip.createRequest - 1
                : 0
            )
          );
        }
        break;
      case 'joined':
        dispatch(
          coinflipActions.setRound({
            status: 'joined',
            ...payload,
            time,
            request: false
          })
        );
        setTimeout(() => {
          dispatch(coinflipActions.endRound(payload.roundId));
        }, 11000 - offset);
        break;
      case 'ended':
        dispatch(coinflipActions.endRound(payload.roundId));
        break;
      case 'cancelled':
        dispatch(coinflipActions.cancelRound(payload.roundId));
        break;
      case 'message':
        if (payload.message) toast.error(payload.message);
        if (payload.roundId === 0)
          dispatch(coinflipActions.setCreateRequest(0));
        else
          dispatch(
            coinflipActions.setRequest({
              roundId: payload.roundId,
              status: false
            })
          );
        break;
    }
  };

  const jackpot = async (data: any, time: any, room: JackpotRoom) => {
    const { eventType, payload } = data;
    switch (eventType) {
      case 'game_data':
        jackpotVisitListener({ room, ...payload, time });
        break;
      case 'available':
        jackpotAvailableListener({ room, ...payload, time });
        break;
      case 'created':
        jackpotCreatedListener({ room, ...payload, time });
        break;
      case 'started':
        jackpotStartedListener({ room, ...payload, time });
        break;
      case 'bet':
        jackpotBettedListener(room, payload);
        break;
      case 'rolling':
        jackpotRollingListener({ room, ...payload, time });
        break;
      case 'resetTime':
        jackpotResetTimeListener({ room, ...payload });
        break;
      case 'message':
        toast.error(payload.message);
        dispatch(jackpotActions.setRequest({ room, request: false }));
        break;
    }
  };

  const grandJackpot = async (data: any, time: any) => {
    const { eventType, payload } = data;
    switch (eventType) {
      case 'game_data':
        grandJackpotVisitListener({ ...payload, time });
        break;
      case 'started':
        grandJackpotStartedListener({ ...payload, time });
        break;
      case 'bet':
        grandJackpotBettedListener(payload);
        break;
      case 'finished':
        grandJackpotFinishedListener({ ...payload, time });
        break;
      case 'counting':
        grandJackpotCountingListener({ ...payload, time });
        break;
      case 'rolling':
        grandJackpotRollingListener({ ...payload, time });
        break;
      case 'message':
        toast.error(payload.message);
        dispatch(grandJackpotActions.setRequest(false));
        break;
    }
  };

  const crash = (data: any, time: number) => {
    const { eventType, payload } = data;
    switch (eventType) {
      case 'game_data':
        crashVisitListener({ ...payload, time });
        break;
      case 'game_status':
        crashEventListener({ event: payload, time });
        break;
    }
  };

  const payment = (data: any) => {
    // console.info(data);
    switch (data.eventType) {
      case 'deposit_sol':
        dispatch(
          setLog({
            type: 'Deposit',
            signature: data.txId,
            time: Date.now(),
            status: 'Success'
          })
        );
        reactToast.success('deposit successful!');
        break;
      case 'withdraw_sol':
        dispatch(
          setLog({
            type: 'Withdraw',
            signature: data.txId,
            time: Date.now(),
            status: 'Success'
          })
        );
        reactToast.success('withdraw successful!');
        break;
      case 'deposit_nft':
        dispatch(
          setLog({
            type: 'Deposit',
            signature: data.txId,
            time: Date.now(),
            status: 'Success'
          })
        );
        reactToast.success('NFT deposit successful!');
        break;
      case 'withdraw_nft':
        dispatch(
          setLog({
            type: 'Withdraw',
            signature: data.txId,
            time: Date.now(),
            status: 'Success'
          })
        );
        reactToast.success('NFT withdraw successful!');
        break;
    }
  };

  const chat = (data: any) => {
    const { eventType, payload } = data;
    const name = store.getState().user.name;
    const show = store.getState().chat.show;

    switch (eventType) {
      case 'command':
        dispatch(setChatConfig(JSON.parse(payload.message)));
        break;
      case 'messages': //fetch all messages when connect
        const {
          commands,
          contents,
          maxLength,
          tipMaxAmount,
          tipMinAmount,
          wagerLimit,
          chatCooldown
        } = payload;
        dispatch(clearMsgs());
        dispatch(addMsgs(contents));
        dispatch(
          setChatConfig({
            commands,
            maxLength,
            tipMaxAmount,
            tipMinAmount,
            wagerLimit,
            chatCooldown
          })
        );
        break;
      case 'message': //real-time message
        dispatch(addMsgs([payload]));

        if (document.hidden || !show) {
          // check msg is calling me
          const notifyRegex = /(@\{\w+\})/g;
          if (
            payload &&
            notifyRegex.test(payload.message) &&
            payload.message.includes(name)
          ) {
            const body = payload.message
              .split(notifyRegex)
              .map((str: string) => {
                if (str.startsWith('@{')) {
                  const notifyUserName = str.substring(
                    str.indexOf('{') + 1,
                    str.indexOf('}')
                  );
                  return notifyUserName;
                }
                return str;
              })
              .join('');
            const options: NotificationOptions = {
              body,
              icon: payload.author.avatar,
              dir: 'ltr'
            };
            new Notification(`Message from ${payload.author.name}`, options);
          }
        }
        break;
      case 'active_users':
        if (payload) dispatch(setActiveUsers(payload));
        break;
      case 'active_user':
        dispatch(addUser(payload));
        break;
      case 'deactive_user':
        dispatch(removeUser(payload));
        break;
      case 'error':
        if (payload.errorCode) {
          dispatch(setChatError(payload.errorCode));
          setTimeout(() => {
            dispatch(setChatError(undefined));
          }, 5000);
        }
        if (payload.message) toast.error(payload.message);
        break;
      case 'delete_message':
        dispatch(deleteMessageById(payload));
        break;
      case 'sponsor_message':
        dispatch(setSponsorToMessage(payload));
        break;
    }
  };

  return (next: AppDispatch) => action => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket !== null) break;
        socket = new WebSocket(SERVER_URL);
        socket.onmessage = onMessage;
        socket.onclose = onClose;
        socket.onopen = onOpen;
        break;
      case 'WS_DISCONNECT':
        if (socket !== null) socket.close();
        break;
      case 'WS_DISCONNECTED':
        socket = null;
        break;
      case 'SEND_MESSAGE':
        if (socket === null) {
          toast.error('Not linked successfully!');
          break;
        }
        try {
          if (socket.readyState !== 1)
            throw new Error('Socket connection error.');
          socket.send(JSON.stringify(action.payload));
          // toast.info("Request is pending...");
        } catch {
          socket.close();
          // toast.error('Connection to Server Failed.');
        }
        break;
    }
    next(action);
  };
};
