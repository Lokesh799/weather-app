import { createStore,applyMiddleware} from "redux";
import reducer from '../reducer/index';
import thunk from 'redux-thunk';
// import { getUSer } from "../action";

const store = createStore(reducer , applyMiddleware(thunk));

//  store.dispatch(getUSer());

export default store;