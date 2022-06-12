import axios from "axios";
import {
	GET_LIST_USER_PENDING,
	GET_LIST_USER_SUCCESS,
	GET_LIST_USER_FAILED,
} from "./types";

export const getListUser = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: GET_LIST_USER_PENDING,
				payload: null,
			});

			const res = await axios.get("https://jsonplaceholder.typicode.com/users");

			dispatch({
				type: GET_LIST_USER_SUCCESS,
				payload: res,
			});
		} catch (error) {
			dispatch({
				type: GET_LIST_USER_FAILED,
				payload: error.message,
			});
		}
	};
};

export const addUser = async () => {
	// req api
};