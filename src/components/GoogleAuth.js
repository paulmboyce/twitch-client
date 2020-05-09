import React from "react";

class GoogleAuth extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			auth2: null,
			authLoaded: null,
			buttonText: "",
			clickAction: () => {
				console.log("Waiting for status..");
			},
		};

		window.gapi.load(
			"auth2",
			function () {
				const auth2 = window.gapi.auth2.init({
					clientId:
						"931872608637-0n3q7ru6jisa5g43rofhtkru2daou7gq.apps.googleusercontent.com",
					scope: "email",
				});
				auth2.then(() => {
					this.setState({ auth2: auth2, authLoaded: true });
					console.log("GoogleAuth loaded..OK");
				});
			}.bind(this)
		);
	}

	componentDidMount = () => {
		if (!this.state.authLoaded) {
			console.log("Waiting for auth2...");
			setTimeout(this.componentDidMount, 300);
		} else {
			this.updateLoginButton();
		}
	};

	logIn = () => {
		this.state.auth2
			.signIn({
				scope: "profile email",
			})
			.then(
				function success(user) {
					console.log("Logged in OK, user: ", user);
					this.updateLoginButton();
				}.bind(this),
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
		console.log(
			`User ${
				signedIn ? `IS` : `is NOT`
			} signed in. Setting Login/Out Button....`
		);

		if (signedIn) {
			this.setState({ buttonText: "Log Out", clickAction: this.logOut });
		} else {
			this.setState({
				buttonText: "Log In With Google",
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
