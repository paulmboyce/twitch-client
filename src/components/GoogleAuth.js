import React from "react";
import { connect } from "react-redux";

import { logInAction, logOutAction } from "../actioncreators";

const GOOGLE_CLIENT_ID =
	"931872608637-0n3q7ru6jisa5g43rofhtkru2daou7gq.apps.googleusercontent.com";

class GoogleAuth extends React.Component {
	auth2 = null;

	componentDidMount = () => {
		window.gapi.load("auth2", () => {
			window.gapi.auth2
				.init({ clientId: GOOGLE_CLIENT_ID })
				.then((auth2) => {
					console.log("GoogleAuth loaded..OK");
					this.auth2 = auth2;
					auth2.isSignedIn.listen(this.signInListener);
					this.initStatus(auth2.isSignedIn.get());
				});
		});
	};

	initStatus = (isSignedIn) => {
		this.signInListener(isSignedIn);
	};

	signInListener = (isSignedIn) => {
		if (isSignedIn) {
			this.props.logInAction();
		} else {
			this.props.logOutAction();
		}
	};

	onClickLogIn = () => {
		this.auth2.signIn({ scope: "email" }).then(
			(user) => {
				console.log("Logged in OK: ", user);
			},
			function rejected(err) {
				console.log("Error: ", err);
			}
		);
	};

	onClickLogOut = () => {
		this.auth2.signOut().then(() => {
			console.log("Logged Out OK");
		});
	};

	render() {
		if (this.props.signedIn == null) {
			return null;
		}

		if (this.props.signedIn) {
			return (
				<div className="ui blue button" onClick={this.onClickLogOut}>
					<i className="google icon" />
					Sign Out
				</div>
			);
		} else {
			return (
				<div className="ui blue button" onClick={this.onClickLogIn}>
					<i className="google icon" />
					Sign In with Google
				</div>
			);
		}
	}
}

const mapStateToProps = (state, props) => {
	return { signedIn: state.isLoggedIn };
};

const reduxConnected = connect(mapStateToProps, { logInAction, logOutAction })(
	GoogleAuth
);

export { reduxConnected as GoogleAuth };
