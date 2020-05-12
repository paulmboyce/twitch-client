import { combineReducers } from "redux";

function authReducer(isLoggedInState = null, action) {
	switch (action.type) {
		case "LOGGED_IN": {
			return true;
		}
		case "LOGGED_OUT": {
			return false;
		}
		default:
			return isLoggedInState;
	}
}

const reducers = combineReducers({
	isLoggedIn: authReducer,
});

export { reducers };
