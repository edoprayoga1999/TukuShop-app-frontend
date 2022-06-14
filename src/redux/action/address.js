import axios from "axios";

const token = localStorage.getItem("token");

export const addAddress = (form) => {
	return new Promise((resolve, reject) => {
		axios.post(`${process.env.REACT_APP_API_URL}/address`, form, {
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
