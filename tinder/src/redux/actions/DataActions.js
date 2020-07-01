import {ADD_FAVOURITE} from './type';

export function addToFavourite(user, onDone = () => {}) {
  return (dispatch, store) => {
    console.log('Hoang log here');
    dispatch({
      type: ADD_FAVOURITE,
      payload: user,
    });
  };
}
