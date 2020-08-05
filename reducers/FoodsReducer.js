import {SET_FOODS} from '../actions/FoodsActions';

const initialState = {
  foods: [],
  loading: true,
};

const FoodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOODS:
      return setFoods(state, action);
    default:
      return state;
  }
};

const setFoods = (state, action) => {
  const {foods} = action;
  return {
    ...initialState,
    foods,
    loading: false,
  };
};

export default FoodsReducer;
