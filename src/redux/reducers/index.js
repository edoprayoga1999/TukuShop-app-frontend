import { combineReducers } from "redux";
import listUserReducer from "./listUser";
import listCategoryReducer from "./listCategory";
import listNewProductReducer from "./listNewProduct";
import listProductReducer from "./listProduct";
import listProductByCategoryReducer from "./listProductByCategory";
import detailSellerReducer from "./detailSeller";
import myProductReducer from "./myProduct";

export default combineReducers({
	listUser: listUserReducer,
	detailSeller: detailSellerReducer,
	listCategory: listCategoryReducer,
	listNewProduct: listNewProductReducer,
	listProduct: listProductReducer,
	listProductByCategory: listProductByCategoryReducer,
	myProduct: myProductReducer,
});
