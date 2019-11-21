import { goalTypes } from '../constants';

const initialState = {
  data: {}
};

const reducer = (state = initialState, action) => {
  const dataGenerator = {
    [goalTypes.UPDATE_GOALS]: { data: { ...state.data, ...action.data } },
    default: state
  };

  return dataGenerator[action.type] || dataGenerator.default;
};

export default reducer;
