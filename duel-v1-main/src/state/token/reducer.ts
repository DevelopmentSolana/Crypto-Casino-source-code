import { createReducer } from '@reduxjs/toolkit';
import { TokenMetaData } from 'api/types/token';
import { setTokenMetaDatas, setTokenPrices } from './action';

interface Token {
  tokens: TokenMetaData[];
  prices: any;
}

const initialState: Token = {
  tokens: [],
  prices: {}
};

export default createReducer<Token>(initialState, builder =>
  builder
    .addCase(setTokenMetaDatas, (state, { payload }) => {
      let tokens = [...state.tokens, ...payload];
      tokens = tokens.filter((token, index) => {
        return (
          index ===
          tokens.findIndex(
            item => item.keyword.toLowerCase() === token.keyword.toLowerCase()
          )
        );
      });
      state.tokens = tokens;
    })
    .addCase(setTokenPrices, (state, { payload }) => {
      state.prices = payload;
    })
);
