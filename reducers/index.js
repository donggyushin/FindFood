import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import UserLocationReducer from './UserLocationReducer';

const rootReducer = combineReducers({
  UserReducer,
  UserLocationReducer,
});

export default rootReducer;
