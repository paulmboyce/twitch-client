function onAuthChangeAction(isSignedIn) {
	if (isSignedIn) {
		return logInAction();
	} else {
		return logOutAction();
	}
}

function trySignOutAction() {
	return function (dispatch) {
		window.gapi.auth2
			.getAuthInstance()
			.signOut()
			.then(() => {
				dispatch(logOutAction);
				console.log("Logged OUT");
			});
	};
}
function trySignInAction() {
	return function (dispatch) {
		window.gapi.auth2
			.getAuthInstance()
			.signIn({ scope: "email" })
			.then(
				(user) => {
					console.log("Logged IN: ", user);
					dispatch(logInAction);
				},
				function rejected(err) {
					console.log("Error: ", err);
				}
			);
	};
}

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

export { trySignInAction, trySignOutAction, onAuthChangeAction };
