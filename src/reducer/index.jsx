import { combineReducers } from 'redux';
import modelshow from './showModel';
import getUser from './getUser';

const reducer= combineReducers({
  modelshow,
  getUser

});
export default reducer;