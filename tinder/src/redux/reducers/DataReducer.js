import {ADD_FAVOURITE} from '../actions/type';

const INITIAL_STATE = {
  userData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    default:
      return state;
  }
};
