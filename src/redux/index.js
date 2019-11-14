import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import callAPIMiddleware from './middleware/callAPIMiddleware';
import rootReducer from './reducers';

const initStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(callAPIMiddleware))
  );
};

export default initStore;
