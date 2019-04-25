import { combineReducers } from "redux";
import allBooksReducer from "./allbooksreducer";
import selBookReducer from "./selbookreducer";

let rootReducer = combineReducers({
	allBooks: allBooksReducer,
	selBook: selBookReducer,
}); 

export default rootReducer;