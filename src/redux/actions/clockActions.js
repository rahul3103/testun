import { actionTypes } from '../constants';

export const serverRenderClock = isServer => ({
  type: actionTypes.TICK,
  light: !isServer,
  ts: Date.now()
});

export const startClock = () => dispatch =>
  setInterval(
    () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
    1000
  );

export const addCount = () => ({ type: actionTypes.ADD });
