import axios from "axios";

const token = localStorage.getItem("token");

export const addCategory = (form) => {
	return new Promise((resolve, reject) => {
		axios.post(`${process.env.REACT_APP_API_URL}/category`, form, {
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
export const editCategory = (id, form) => {
	return new Promise((resolve, reject) => {
		axios.put(`${process.env.REACT_APP_API_URL}/category/${id}`, form, {
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
export const editStatusCategory = (id, form) => {
	return new Promise((resolve, reject) => {
		axios.put(`${process.env.REACT_APP_API_URL}/category-status/${id}`, form, {
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
export const deleteCategory = (id) => {
	return new Promise((resolve, reject) => {
		axios.delete(`${process.env.REACT_APP_API_URL}/category/${id}`, {
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