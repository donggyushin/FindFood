import {SET_ADDRESS} from '../actions/AddressAction';

const initialState = {
  area1Name: '',
  area2Name: '',
  area3Name: '',
  loading: true,
};

const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      const {area1Name, area2Name, area3Name} = action;
      return {
        ...state,
        area1Name,
        area2Name,
        area3Name,
        loading: false,
      };
    default:
      return state;
  }
};

export default AddressReducer;
