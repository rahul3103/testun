import { courseTypes } from '../constants';
import { mergeDeep } from '../../utils';

const initialState = {
  data: {}
};

const reducer = (state = initialState, action) => {
  const dataGenerator = {
    [courseTypes.UPDATE_COURSES]: {
      ...state,
      data: mergeDeep(action.data, state.data)
    },
    [`${courseTypes.FETCH_COURSE_INFO}_SUCCESS`]: {
      ...state,
      courseDetails: {
        ...state.courseDetails,
        [action.courseUid]: action.result
      }
    },
    default: state
  };

  return dataGenerator[action.type] || dataGenerator.default;
};

export default reducer;
