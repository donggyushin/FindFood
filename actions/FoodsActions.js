export const SET_FOODS = 'SET_FOODS';

export const setFoodsAction = (foods) => (dispatch) => {
  return dispatch({
    type: SET_FOODS,
    foods,
  });
};
