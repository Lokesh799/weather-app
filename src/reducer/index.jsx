import { combineReducers } from 'redux';
import modelshow from './showModel';
import getUser from './getUser';
// import getCity from './ShowCity';

const reducer = combineReducers({
  modelshow,
  getUser,
  // getCity,

});
export default reducer;