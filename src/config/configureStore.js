import R from 'ramda';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';

import reducer from './reducers';
import DevTools from './DevTools';

const loggerMiddleware = createLogger();

const configureStore = () => createStore(
  reducer,
  R.pipe(
    DevTools.instrument(),
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware,
      loggerMiddleware,
    ),
  ),
);

export default configureStore;
