function logInAction() {
	return {
		type: "LOGGED_IN",
	};
}

function logOutAction() {
	return {
		type: "LOGGED_OUT",
	};
}

export { logInAction, logOutAction };
