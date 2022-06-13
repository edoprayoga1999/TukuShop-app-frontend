/* eslint-disable no-undef */
/* eslint-disable indent */
import axios from "axios";
import {
  GET_LIST_USER_PENDING,
  GET_LIST_USER_SUCCESS,
  GET_LIST_USER_FAILED,
  GET_DETAIL_USER_PENDING,
  GET_DETAIL_USER_SUCCESS,
  GET_DETAIL_USER_FAILED,
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

export const getDetailUser = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_DETAIL_USER_PENDING,
        payload: null,
      });
      const id = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${id}`,
        {
          headers: { token },
        }
      );

      dispatch({
        type: GET_DETAIL_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_DETAIL_USER_FAILED,
        payload: error.message,
      });
    }
  };
};

export const updateUserBuyer = async (formData) => {
  try {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    console.log(formData);
    await axios.put(
      `${process.env.REACT_APP_API_URL}/user/${id}/buyer`,
      formData,
      {
        headers: {
          token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
