import { TEST_ACTION } from '../actions/testActions';

const initialState = {};

const testData = (state = initialState, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default testData;
