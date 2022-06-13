import { combineReducers } from "redux";
import detailUserReducer from "./detailUser";
import listUserReducer from "./listUser";
import listCategoryReducer from "./listCategory";
import listNewProductReducer from "./listNewProduct";
import listProductReducer from "./listProduct";
import myCartReducers from "./myCart";
import listProductByCategoryReducer from "./listProductByCategory";
import detailProductReducer from "./detailProduct";
import detailSellerReducer from "./detailSeller";

export default combineReducers({
	listUser: listUserReducer,
	detailUser: detailUserReducer,
	detailSeller: detailSellerReducer,
	listCategory: listCategoryReducer,
	listNewProduct: listNewProductReducer,
	listProduct: listProductReducer,
	listProductByCategory: listProductByCategoryReducer,
	detailProduct: detailProductReducer,
	myCart: myCartReducers,
	listProductByCategory: listProductByCategoryReducer
});
