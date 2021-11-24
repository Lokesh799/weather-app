import { SHOW_MODEL } from "../action";

const initialState = {
	show: true,
}

const modelshow = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODEL:
			return {
				...state,
				show: action.payload,
			};
		default:
			return state;
	}
}



export default modelshow;
