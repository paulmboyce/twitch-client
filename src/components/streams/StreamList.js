import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getStreams, deleteStream } from "../../actioncreators";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.getStreams();
	}

	renderEditButtons = (stream) => {
		let { loginStatus } = this.props;

		if (
			loginStatus &&
			loginStatus.isLoggedIn &&
			stream.userId === loginStatus.userId
		) {
			return (
				<div className="right floated content">
					<div className="ui button">Edit</div>
					<div
						className="ui button"
						onClick={() => {
							this.props.deleteStream(stream.id);
						}}
					>
						Delete
					</div>
				</div>
			);
		}
		return null;
	};
	renderStreams = function (streams) {
		return streams.map((stream) => {
			return (
				<div className="ui item padded segment" key={stream.id}>
					{this.renderEditButtons(stream)}
					<div className="content">
						<div className="header">{stream.title}</div>
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	};

	renderCreateIfLoggedIn = () => {
		let { loginStatus } = this.props;
		console.log("STATUS:", loginStatus);
		if (loginStatus && loginStatus.isLoggedIn === true) {
			return (
				<Link className="" to="/streams/new">
					<div className="ui right floated button green">
						Add Stream
					</div>
				</Link>
			);
		}
		return null;
	};

	render() {
		return (
			<div>
				<div className="ui clearing green padded segment">
					<h1>Streams</h1>
					{this.renderCreateIfLoggedIn()}
				</div>
				<div className="ui list relaxed middle aligned">
					{this.renderStreams(this.props.streams)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = function (state, oldProps) {
	console.log("STATE:", state);
	return {
		streams: Object.values(state.streams),
		loginStatus: state.loginStatus,
	};
};

const reduxStreamlist = connect(mapStateToProps, { getStreams, deleteStream })(
	StreamList
);

export { reduxStreamlist as StreamList };
