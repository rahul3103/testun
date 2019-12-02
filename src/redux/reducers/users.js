import { educatorTypes } from '../constants';
import { mergeDeep } from '../../utils';

const initialState = {
  data: {},
  profileInfo: {}
};

const reducer = (state = initialState, action) => {
  const dataGenerator = {
    [educatorTypes.UPDATE_USERS]: {
      ...state,
      data: mergeDeep(action.data, state.data)
    },
    [`${educatorTypes.FETCH_PROFILE_INFO}_SUCCESS`]: {
      ...state,
      profileInfo: {
        ...state.profileInfo,
        [action.username]: action.result
      }
    },
    default: state
  };

  return dataGenerator[action.type] || dataGenerator.default;
};

export default reducer;
