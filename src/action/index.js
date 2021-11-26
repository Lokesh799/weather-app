import userdetail from "../api/userdetail";
export const GET_USER = 'GET_USER';
export const SHOW_MODEL = 'SHOW_MODEL';
export const SHOW_CITY = 'SHOW_CITY';
export const SHOW_WHEATHER = 'SHOW_WHEATHER';


export const showModel = (payload) => ({ type: SHOW_MODEL, payload });
export const showCity = (payload) => ({ type: SHOW_CITY, payload });
export const showCityWheather = (payload) => ({ type: SHOW_WHEATHER, payload });
export const getUser = (userdetail) => ({ type: GET_USER, userdetail });

export const getUSer = () => (dispatch) => {
	userdetail.getUser(userdetail => {
		dispatch(getUser(userdetail))
	})
}