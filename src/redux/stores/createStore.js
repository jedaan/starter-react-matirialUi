/* eslint-disable no-undef */
import { applyMiddleware, createStore, compose } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from '../reducers/index';

import rootLogic from '../config/logic';
import { interceptor } from './interceptor';
// import router from './router/router';

let composeEnhancers = compose;
let preloadedState = {};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sessionData'] // only sessionData will be persisted
};

const axiosInstance = interceptor();

const deps = {
  api: axiosInstance
};

const logicMiddleware = createLogicMiddleware(rootLogic, { deps });

if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  preloadedState = window.INITIAL_STATE || {};
  delete window.INITIAL_STATE;
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(logicMiddleware))
);
const persistor = persistStore(store);

export { store, persistor };
