/* eslint-disable no-undef */
import axios from "axios";

const token = localStorage.getItem("token");
const id = localStorage.getItem("userId");

export const editProfileSeller = (form) => {
	return new Promise((resolve, reject) => {
		axios
			.put(`${process.env.REACT_APP_API_URL}/user/${id}/seller`, form, {
				headers: {
					"Content-Type": "multipart/form-data",
					token: token,
				},
			})
			.then((res) => {
				resolve(res.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
