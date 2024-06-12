import api from './api';
import state from 'state';
import { loadCoupon, loadUser, setConfig } from 'state/user/actions';
import * as dreamtowerActions from 'state/dreamtower/actions';
import { setMetaData } from 'state/meta/actions';
import { setTokenMetaDatas } from 'state/token/action';
import { setCountryCode } from 'state/user/actions';

export const fetchUserData = async () => {
  try {
    if (!state.getState().user.isAuthenticated) return;
    const data = await api.get('/user/load').then(res => res.data);
    if (!state.getState().user.isAuthenticated) return;
    state.dispatch(loadUser(data));
  } catch {}
};

export const fetchUserInfo = async () => {
  try {
    const userInfo = await api.get('/user/load').then(res => res.data);
    state.dispatch(
      loadUser({
        ...userInfo,
        betBalanceType: 'chip',
        balance: userInfo.balances['chip'].balance,
        nfts: {
          deposited: userInfo.nfts.deposited,
          undeposited: state.getState().user.nfts.undeposited
        }
      })
    );
    state.dispatch(loadCoupon(userInfo.balances.coupon));
  } catch (error: any) {
    let { countryCode, reason: _reason } = error.response.data;
    if (countryCode) {
      state.dispatch(setCountryCode(countryCode));
    }
    throw Error('Restricted IP');
  }
};

export const fetchServerConfig = async () => {
  try {
    const data = await api.get('/config').then(res => res.data);
    const { meta, config } = data;
    state.dispatch(setMetaData(meta));
    state.dispatch(setConfig(config));
    window.balanceDecimal = config.balanceDecimals;
  } catch (error: any) {}
};

export const fetchTokens = async () => {
  try {
    const data = await api.get('/tokens').then(res => res.data);
    const tokens = data.map((item: any) => {
      let { keyword, mintAddress, image, decimals } = item;
      if (keyword.toLowerCase().slice(0, 3) === 'sol') {
        mintAddress = undefined;
      }
      return { keyword, mintAddress, image, decimals };
    });
    state.dispatch(setTokenMetaDatas(tokens));
  } catch {}
};

export const fetchDreamtowerRound = async () => {
  try {
    const data = await api.get('/dreamtower/get-round').then(res => res.data);
    if (data.roundId === undefined) {
      state.dispatch(dreamtowerActions.clear());
      return;
    }
    state.dispatch(dreamtowerActions.setRound(data));
  } catch {}
};
