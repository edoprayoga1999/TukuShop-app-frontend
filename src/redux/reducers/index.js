import { combineReducers } from "redux";
import listUserReducer from "./listUser";
import detailSellerReducer from "./detailSeller";

export default combineReducers({
	listUser: listUserReducer,
	detailSeller: detailSellerReducer,
});
