import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import UserLocationReducer from './UserLocationReducer';
import AddressReducer from './AddressReducer';
import FoodsReducer from './FoodsReducer';

const rootReducer = combineReducers({
  UserReducer,
  UserLocationReducer,
  AddressReducer,
  FoodsReducer,
});

export default rootReducer;
