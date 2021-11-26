import { SHOW_CITY, SHOW_WHEATHER } from "../action";

const initialState = {
	fetchApi: [],
	city: ""
}
const getCity = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_CITY:
			return {
				...state,
				city: action.payload,
			};
		case SHOW_WHEATHER:
			return {
				...state,
				fetchApi: action.payload,
			};
		default:
			return state;
	}
}
export default getCity;
