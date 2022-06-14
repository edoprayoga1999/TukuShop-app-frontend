import {
	GET_MY_ADDRESS_PENDING,
	GET_MY_ADDRESS_SUCCESS,
	GET_MY_ADDRESS_FAILED
} from "../action/types";

const initialState = {
	isLoading: false,
	isError: false,
	data: [],
	error: null,
};

const myAddressReducers = (state = initialState, action) => {
	switch (action.type) {
	case GET_MY_ADDRESS_PENDING:
		return { ...state, isLoading: true };
	case GET_MY_ADDRESS_SUCCESS:
		return {
			...state,
			isLoading: false,
			isError: false,
			data: action.payload.data,
		};
	case GET_MY_ADDRESS_FAILED:
		return {
			...state,
			isLoading: false,
			isError: true,
			error: action.payload,
		};
	default:
		return state;
	}
};

export default myAddressReducers;
