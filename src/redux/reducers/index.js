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
import myProductReducer from "./myProduct";
import myOrderSellerReducer from "./myOrderSeller";

export default combineReducers({
	listUser: listUserReducer,
	detailUser: detailUserReducer,
	detailSeller: detailSellerReducer,
	listCategory: listCategoryReducer,
	listNewProduct: listNewProductReducer,
	listProduct: listProductReducer,
	listProductByCategory: listProductByCategoryReducer,
	myProduct: myProductReducer,
	detailProduct: detailProductReducer,
	myCart: myCartReducers,
	myOrderSeller: myOrderSellerReducer,
});
