import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { callAPIMiddleware, modelMiddleware } from './middleware';
import rootReducer from './reducers';

const initStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(callAPIMiddleware, modelMiddleware))
  );
};

export default initStore;
