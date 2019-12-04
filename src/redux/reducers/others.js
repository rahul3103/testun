import { drawerTypes } from '../constants';

const initialState = {
  drawerState: false
};

const reducer = (state = initialState, action) => {
  const dataGenerator = {
    [drawerTypes.OPEN_DRAWER]: { ...state, drawerState: true },
    [drawerTypes.CLOSE_DRAWER]: { ...state, drawerState: false },
    default: state
  };

  return dataGenerator[action.type] || dataGenerator.default;
};

export default reducer;
