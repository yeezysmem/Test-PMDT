import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import rootReducers from './modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) => createStore(
  combineReducers({
    ...rootReducers,
    ...reducers,
  }),
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      ...middlewares,
      thunk,
      reduxLogger,

    ),
  )
);

export default configureStore;
