import { authorTypes } from '../constants';

const initialState = {
  data: {}
};

const reducer = (state = initialState, action) => {
  const dataGenerator = {
    [authorTypes.UPDATE_AUTHORS]: { data: { ...state.data, ...action.data } },
    default: state
  };

  return dataGenerator[action.type] || dataGenerator.default;
};

export default reducer;
