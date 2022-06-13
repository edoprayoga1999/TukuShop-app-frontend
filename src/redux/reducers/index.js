import { combineReducers } from "redux";
import listUserReducer from "./listUser";
import listCategoryReducer from "./listCategory";
import listNewProductReducer from "./listNewProduct";
import listProductReducer from "./listProduct";
import myCartReducers from "./myCart";

export default combineReducers({
	listUser: listUserReducer,
	listCategory: listCategoryReducer,
	listNewProduct: listNewProductReducer,
	listProduct: listProductReducer,
	myCart: myCartReducers
});