import React from "react";

const GOOGLE_CLIENT_ID =
	"931872608637-0n3q7ru6jisa5g43rofhtkru2daou7gq.apps.googleusercontent.com";

class GoogleAuth extends React.Component {
	state = {
		auth2: null,
		buttonText: "",
		clickAction: () => {},
	};

	componentDidMount = () => {
		window.gapi.load("auth2", () => {
			window.gapi.auth2
				.init({ clientId: GOOGLE_CLIENT_ID })
				.then((auth2) => {
					console.log("GoogleAuth loaded..OK");
					this.setState({ auth2: auth2 });
					this.updateLoginButton();
				});
		});
	};

	logIn = () => {
		this.state.auth2.signIn({ scope: "profile email" }).then(
			(user) => {
				console.log("Logged in OK, user: ", user);
				this.updateLoginButton();
			},
			function rejected(err) {
				console.log("HOUSTON.. we have an: ", err);
			}
		);
	};

	logOut = () => {
		this.state.auth2.signOut().then(() => {
			console.log("User Logged Out: OK");
			this.updateLoginButton();
		});
	};

	updateLoginButton = function () {
		const signedIn = this.state.auth2.isSignedIn.get();
		if (signedIn) {
			this.setState({
				buttonText: "Log Out",
				clickAction: this.logOut,
			});
		} else {
			this.setState({
				buttonText: "Log in with Google",
				clickAction: this.logIn,
			});
		}
	};

	render() {
		return (
			<div>
				<div
					className="ui primary button"
					onClick={() => {
						this.state.clickAction();
					}}
				>
					{this.state.buttonText}
				</div>
			</div>
		);
	}
}

export { GoogleAuth };
