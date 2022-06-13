import { combineReducers } from "redux";
import listUserReducer from "./listUser";
import listCategoryReducer from "./listCategory";
import listNewProductReducer from "./listNewProduct";
import listProductReducer from "./listProduct";

export default combineReducers({
	listUser: listUserReducer,
	listCategory: listCategoryReducer,
	listNewProduct: listNewProductReducer,
	listProduct: listProductReducer,
});