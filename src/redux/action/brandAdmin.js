import axios from "axios";
import { 
	GET_ALL_BRANDS_ADMIN_PENDING,
	GET_ALL_BRANDS_ADMIN_SUCCESS,
	GET_ALL_BRANDS_ADMIN_FAILED,
	GET_DETAIL_BRANDS_ADMIN_PENDING,
	GET_DETAIL_BRANDS_ADMIN_SUCCESS,
	GET_DETAIL_BRANDS_ADMIN_FAILED
} from "./types";
const token = localStorage.getItem("token");

export const addBrand = (form) => {
	return new Promise((resolve, reject) => {
		axios.post(`${process.env.REACT_APP_API_URL}/product-brand`, form, {
			headers: {
				"Content-Type": "multipart/form-data",
				token
			}
		})
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
export const editBrand = (id, form) => {
	return new Promise((resolve, reject) => {
		axios.put(`${process.env.REACT_APP_API_URL}/product-brand/${id}`, form, {
			headers: {
				"Content-Type": "multipart/form-data",
				token
			}
		})
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
export const editStatusBrand = (id, form) => {
	return new Promise((resolve, reject) => {
		axios.put(`${process.env.REACT_APP_API_URL}/product-brand-status/${id}`, form, {
			headers: {
				token
			}
		})
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
export const deleteBrand = (id) => {
	return new Promise((resolve, reject) => {
		axios.delete(`${process.env.REACT_APP_API_URL}/product-brand/${id}`, {
			headers: {
				token
			}
		})
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
export const getAllBrandsAdmin = (url) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: GET_ALL_BRANDS_ADMIN_PENDING,
				payload: null,
			});
			const res = await axios.get(url, {
				headers: {
					token
				}
			});
			dispatch({
				type: GET_ALL_BRANDS_ADMIN_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			if (error.response) {
				error.message = error.response.data.message;
			}
			dispatch({
				type: GET_ALL_BRANDS_ADMIN_FAILED,
				payload: error.message,
			});
		}
	};
};
export const getDetailBrandsAdmin = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: GET_DETAIL_BRANDS_ADMIN_PENDING,
				payload: null,
			});
			const res = await axios.get(`${process.env.REACT_APP_API_URL}/product-brand/${id}`, {
				headers: {
					token
				}
			});
			dispatch({
				type: GET_DETAIL_BRANDS_ADMIN_SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			if (error.response) {
				error.message = error.response.data.message;
			}
			dispatch({
				type: GET_DETAIL_BRANDS_ADMIN_FAILED,
				payload: error.message,
			});
		}
	};
};