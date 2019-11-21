import { authorTypes } from '../constants';
import { mergeDeep } from '../../utils';

const initialState = {
  data: {}
};

const reducer = (state = initialState, action) => {
  const dataGenerator = {
    [authorTypes.UPDATE_AUTHORS]: { data: mergeDeep(action.data, state.data) },
    default: state
  };

  return dataGenerator[action.type] || dataGenerator.default;
};

export default reducer;
