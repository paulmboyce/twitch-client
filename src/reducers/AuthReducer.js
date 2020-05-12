const INITIAL_STATE = {
	isLoggedIn: null,
};
function authReducer(isLoggedInState = INITIAL_STATE, action) {
	switch (action.type) {
		case "LOGGED_IN": {
			return { ...isLoggedInState, isLoggedIn: true };
		}
		case "LOGGED_OUT": {
			return { ...isLoggedInState, isLoggedIn: false };
		}
		default:
			return isLoggedInState;
	}
}

export { authReducer };
