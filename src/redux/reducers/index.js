import { combineReducers } from "redux";
import listUserReducer from "./listUser";
import listCategoryReducer from "./listCategory";
import listNewProductReducer from "./listNewProduct";
import listProductReducer from "./listProduct";
import listProductByCategoryReducer from "./listProductByCategory";
import detailProductReducer from "./detailProduct";

export default combineReducers({
	listUser: listUserReducer,
	listCategory: listCategoryReducer,
	listNewProduct: listNewProductReducer,
	listProduct: listProductReducer,
	listProductByCategory: listProductByCategoryReducer,
	detailProduct: detailProductReducer,
});