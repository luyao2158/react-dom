import * as constants from './constants';

const defaultState = {
  todoList: []
}

export default (state = defaultState, { type, ...action}) => {
  switch (type) {
    case constants.UPDATE_STATE:
      return { ...state, ...action };
    default:
      return { ...state };
  }
}