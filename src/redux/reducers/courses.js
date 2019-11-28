import { courseTypes } from '../constants';
import { mergeDeep } from '../../utils';

const initialState = {
  data: {}
};

const reducer = (state = initialState, action) => {
  const dataGenerator = {
    [courseTypes.UPDATE_COURSES]: {
      data: mergeDeep(action.data, state.data)
    },
    default: state
  };

  return dataGenerator[action.type] || dataGenerator.default;
};

export default reducer;
