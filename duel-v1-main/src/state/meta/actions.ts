import { createAction } from '@reduxjs/toolkit';

import { CoinflipGameMeta } from 'api/types/coinflip';
import {
  JackpotGameMeta,
  JackpotRoom,
  GrandJackpotGameMeta
} from 'api/types/jackpot';
import { DreamtowerGameMeta } from 'api/types/dreamtower';
import { CrashMeta } from 'api/types/crash';
import { PlinkoMeta } from 'api/types/plinko';

export const setMetaData = createAction<any>('meta/set_meta');

export const setCoinflipMeta = createAction<CoinflipGameMeta>('meta/coinflip');

export const setJackpotMeta = createAction<{
  room: JackpotRoom;
  meta: JackpotGameMeta;
}>('meta/jackpot');

export const setGrandJackpotMeta =
  createAction<GrandJackpotGameMeta>('meta/grandJackpot');

export const setDreamtowerMeta =
  createAction<DreamtowerGameMeta>('meta/dreamtower');

export const setCrashMeta = createAction<CrashMeta>('meta/crash');

export const setPlinkoMeta = createAction<PlinkoMeta>('meta/plinko');
