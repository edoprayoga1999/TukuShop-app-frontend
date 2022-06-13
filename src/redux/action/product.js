import axios from "axios";
import {
	GET_LIST_NEW_PRODUCT_PENDING,
	GET_LIST_NEW_PRODUCT_SUCCESS,
	GET_LIST_NEW_PRODUCT_FAILED,
	GET_LIST_PRODUCT_PENDING,
	GET_LIST_PRODUCT_SUCCESS,
	GET_LIST_PRODUCT_FAILED,
	GET_LIST_PRODUCT_BY_CATEGORY_PENDING,
	GET_LIST_PRODUCT_BY_CATEGORY_SUCCESS,
	GET_LIST_PRODUCT_BY_CATEGORY_FAILED,
} from "./types";

export const getListProduct = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: GET_LIST_PRODUCT_PENDING,
				payload: null,
			});

			const res = await axios.get(`${process.env.REACT_APP_API_URL}/product?limit=24`);

			dispatch({
				type: GET_LIST_PRODUCT_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			console.log(error.message);
			if (error.response) {
				error.message = error.response.data.error;
			}

			dispatch({
				type: GET_LIST_PRODUCT_FAILED,
				payload: error.message,
			});
		}
	};
};

export const getListNewProduct = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: GET_LIST_NEW_PRODUCT_PENDING,
				payload: null,
			});

			const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/new`);

			dispatch({
				type: GET_LIST_NEW_PRODUCT_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			console.log(error.message);
			if (error.response) {
				error.message = error.response.data.error;
			}

			dispatch({
				type: GET_LIST_NEW_PRODUCT_FAILED,
				payload: error.message,
			});
		}
	};
};

export const getListProductByCategory = (categoryId) => {
	return async (dispatch) => {
		try {
			const token = localStorage.getItem("token");

			dispatch({
				type: GET_LIST_PRODUCT_BY_CATEGORY_PENDING,
				payload: null,
			});

			const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/${categoryId}/category`, {
				headers: {
					token
				}
			});

			dispatch({
				type: GET_LIST_PRODUCT_BY_CATEGORY_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			console.log(error.message);
			if (error.response) {
				error.message = error.response.data.error;
			}

			dispatch({
				type: GET_LIST_PRODUCT_BY_CATEGORY_FAILED,
				payload: error.message,
			});
		}
	};
};
