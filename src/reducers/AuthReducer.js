import { LOGGED_OUT, LOGGED_IN } from "../actioncreators/types";

const INITIAL_STATE = {
	isLoggedIn: null,
	userId: null,
};
function authReducer(isLoggedInState = INITIAL_STATE, action) {
	switch (action.type) {
		case LOGGED_IN: {
			return {
				...isLoggedInState,
				isLoggedIn: true,
				userId: action.payload.userId,
			};
		}
		case LOGGED_OUT: {
			return { ...isLoggedInState, isLoggedIn: false, userId: null };
		}
		default:
			return isLoggedInState;
	}
}

export { authReducer };
