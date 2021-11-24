import { GET_USER } from "../action";

const initialState = {
     record:[],
}

const getUser= (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				record: action.userdetail,
			};
		default:
			return state;
	}
}



export default getUser;
