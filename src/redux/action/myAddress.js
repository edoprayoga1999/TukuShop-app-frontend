import axios from "axios";
import {
	GET_MY_ADDRESS_FAILED,
	GET_MY_ADDRESS_PENDING,
	GET_MY_ADDRESS_SUCCESS
} from "./types";

const token = localStorage.getItem("token");

export const getMyAddress = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: GET_MY_ADDRESS_PENDING,
				payload: null,
			});
			const res = await axios.get(`${process.env.REACT_APP_API_URL}/my-address`, {
				headers: {
					token
				}
			});
			dispatch({
				type: GET_MY_ADDRESS_SUCCESS,
				payload: res.data,
			});
		} catch (err) {
			console.log(error.message);
			if (error.response) {
				error.message = error.response.data.error;
			}
			dispatch({
				type: GET_MY_ADDRESS_FAILED,
				payload: error.message,
			});
		}
	};
};