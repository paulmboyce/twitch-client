import React from "react";

const GOOGLE_CLIENT_ID =
	"931872608637-0n3q7ru6jisa5g43rofhtkru2daou7gq.apps.googleusercontent.com";

class GoogleAuth extends React.Component {
	state = { signedIn: null };
	auth2 = null;

	componentDidMount = () => {
		window.gapi.load("auth2", () => {
			window.gapi.auth2
				.init({ clientId: GOOGLE_CLIENT_ID })
				.then((auth2) => {
					console.log("GoogleAuth loaded..OK");
					this.auth2 = auth2;
					this.setState({
						signedIn: auth2.isSignedIn.get(),
					});
				});
		});
	};

	logIn = () => {
		this.auth2.signIn({ scope: "profile email" }).then(
			(user) => {
				console.log("Logged in OK: ", user);
				this.setState({ signedIn: true });
			},
			function rejected(err) {
				console.log("Error: ", err);
			}
		);
	};

	logOut = () => {
		this.auth2.signOut().then(() => {
			console.log("Logged Out OK");
			this.setState({ signedIn: false });
		});
	};

	render() {
		if (this.state.signedIn == null) {
			return <div>Waiting...</div>;
		}

		if (this.state.signedIn) {
			return (
				<div
					className="ui primary button"
					onClick={() => {
						this.logOut();
					}}
				>
					Log Out
				</div>
			);
		} else {
			return (
				<div
					className="ui primary button"
					onClick={() => {
						this.logIn();
					}}
				>
					Log in with Google
				</div>
			);
		}
	}
}

export { GoogleAuth };
