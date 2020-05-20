import React from "react";
import { connect } from "react-redux";

import {
	trySignInAction,
	trySignOutAction,
	onAuthChangeAction,
} from "../actioncreators";

const GOOGLE_CLIENT_ID =
	"931872608637-0n3q7ru6jisa5g43rofhtkru2daou7gq.apps.googleusercontent.com";

class GoogleAuth extends React.Component {
	componentDidMount = () => {
		window.gapi.load("auth2", () => {
			window.gapi.auth2
				.init({ clientId: GOOGLE_CLIENT_ID })
				.then((auth2) => {
					console.log("GoogleAuth loaded..OK");
					auth2.isSignedIn.listen(this.props.onAuthChangeAction);
					this.initStatus(auth2.isSignedIn.get());
				});
		});
	};

	initStatus = (isSignedIn) => {
		this.props.onAuthChangeAction(isSignedIn);
	};

	onClickLogIn = () => {
		this.props.trySignInAction();
	};

	onClickLogOut = () => {
		this.props.trySignOutAction();
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

const mapStateToProps = function (state, props) {
	return { signedIn: state.auth.isLoggedIn };
};

const reduxConnected = connect(mapStateToProps, {
	trySignInAction,
	trySignOutAction,
	onAuthChangeAction,
})(GoogleAuth);

export { reduxConnected as GoogleAuth };
