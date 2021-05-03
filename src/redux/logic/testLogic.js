/* eslint-disable no-empty */
/* eslint-disable camelcase */
import { createLogic } from 'redux-logic';
import _ from 'lodash';
import { TEST_ACTION } from '../actions/testActions';

const testLogic = createLogic({
  type: [TEST_ACTION],
  latest: true,
  name: 'build session',
  async process({ action, deps }, dispatch, done) {
    try {
    } catch (error) {
    } finally {
      done();
    }
  }
});

export { testLogic };
