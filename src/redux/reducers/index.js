import { combineReducers } from 'redux';

import testReducer from './testReducer';

const rootReducers = combineReducers({
  testData: testReducer
});

export default rootReducers;
