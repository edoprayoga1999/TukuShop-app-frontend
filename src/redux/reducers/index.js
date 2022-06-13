import { combineReducers } from "redux";
import detailUserReducer from "./detailUser";
import listUserReducer from "./listUser";

export default combineReducers({
	listUser: listUserReducer,
	detailUser: detailUserReducer,
});
