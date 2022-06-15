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
export const editAddress = (form, id) => {
	return new Promise((resolve, reject) => {
		axios.put(`${process.env.REACT_APP_API_URL}/address/${id}`, form, {
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
export const deleteAddress = (id) => {
	return new Promise((resolve, reject) => {
		axios.delete(`${process.env.REACT_APP_API_URL}/address/${id}`, {
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
