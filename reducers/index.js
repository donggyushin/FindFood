import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import UserLocationReducer from './UserLocationReducer';
import AddressReducer from './AddressReducer';

const rootReducer = combineReducers({
  UserReducer,
  UserLocationReducer,
  AddressReducer,
});

export default rootReducer;
