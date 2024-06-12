import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { socketMiddleware } from './middleware';

import userReducer from './user/reducer';
import chatReducer from './chat/reducer';
import jackpotReducer from './jackpot/reducer';
import grandJackpotReducer from './grandJackpot/reducer';
import coinflipReducer from './coinflip/reducer';
import socketReducer from './socket';
import logReducer from './log/reducer';
import metaReducer from './meta/reducer';
import raceReducer from './race/reducer';
import dreamTowerReducer from './dreamtower/reducer';
import mainReducer from './main/reducer';
import stakingReducer from './staking/reducer';
import tokenReducer from './token/reducer';
import plinkoReducer from './plinko/reducer';
import crashReducer from './crash/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  jackpot: jackpotReducer,
  grandJackpot: grandJackpotReducer,
  coinflip: coinflipReducer,
  plinko: plinkoReducer,
  crash: crashReducer,
  socket: socketReducer,
  meta: metaReducer,
  log: logReducer,
  race: raceReducer,
  dreamtower: dreamTowerReducer,
  main: mainReducer,
  staking: stakingReducer,
  token: tokenReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(socketMiddleware)
});

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
