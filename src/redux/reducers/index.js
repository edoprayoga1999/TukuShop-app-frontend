import { combineReducers } from "redux";
import listUserReducer from "./listUser";

export default combineReducers({
	listUser: listUserReducer,
});
