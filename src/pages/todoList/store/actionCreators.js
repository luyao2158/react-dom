import * as constants from './constants';

export const updateState = (newState) => ({
  type: constants.UPDATE_STATE,
  ...newState,
})