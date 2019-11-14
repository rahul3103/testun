import { actionTypes, timeTypes } from '../constants';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  currentTime: 0
};

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return { ...state, lastUpdate: action.ts, light: !!action.light };
    case actionTypes.ADD:
      return { ...state, count: state.count + 1 };
    case `${timeTypes.FETCH_NEW_TIME}_SUCCESS`:
      return { ...state, currentTime: action.result.dateString };
    default:
      return state;
  }
};

export default reducer;
