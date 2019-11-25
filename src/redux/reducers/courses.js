import { courseTypes } from '../constants';

const exampleInitialState = {
  courses: {},
  loading: false
};

// const reducer = (state = exampleInitialState, action) => {
//   switch (action.type) {
//     case `${courseTypes?.FETCH_FREE_COURSES}_REQUEST`:
//       return { ...state, loading: true };
//     case `${courseTypes?.FETCH_FREE_COURSES}_SUCCESS`:
//       return {
//         ...state,
//         currentTime: action.result.dateString,
//         loading: false
//       };
//     case `${courseTypes?.FETCH_FREE_COURSES}_FAIL`:
//       return { ...state, loading: false };
//     default:
//       return state;
//   }

const reducer = (state = exampleInitialState, action) => {
  const dataGenerator = {
    [`${courseTypes?.FETCH_FREE_COURSES}_REQUEST`]: { ...state, loading: true },
    [`${courseTypes?.FETCH_FREE_COURSES}_SUCCESS`]: {
      ...state,
      courses: action.result,
      loading: false
    },
    [`${courseTypes?.FETCH_FREE_COURSES}_FAIL`]: { ...state, loading: false },
    default: state
  };

  return dataGenerator[action.type] || dataGenerator.default;
};

export default reducer;
