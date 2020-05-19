import { LOGGED_IN, LOGGED_OUT } from "./types";
import {
	createStream,
	editStream,
	deleteStream,
	getStream,
	getStreams,
} from "./streamDataActions";

function onAuthChangeAction(isSignedIn) {
	if (isSignedIn) {
		let userId = window.gapi.auth2
			.getAuthInstance()
			.currentUser.get()
			.getId();
		return logInAction(userId);
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
					dispatch(logInAction(user.getId()));
				},
				function rejected(err) {
					console.log("Error: ", err);
				}
			);
	};
}

function logInAction(userId) {
	return {
		type: LOGGED_IN,
		payload: {
			userId: userId,
		},
	};
}

function logOutAction() {
	return {
		type: LOGGED_OUT,
	};
}

export {
	trySignInAction,
	trySignOutAction,
	onAuthChangeAction,
	createStream,
	editStream,
	deleteStream,
	getStream,
	getStreams,
};
