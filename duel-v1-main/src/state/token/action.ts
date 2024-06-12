import { createAction } from '@reduxjs/toolkit';

import { TokenMetaData } from 'api/types/token';

export const setTokenMetaDatas = createAction<TokenMetaData[]>(
  'token/set_token_meta_datas'
);

export const setTokenPrices = createAction<any>('token/set_token_prices');
