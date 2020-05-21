import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getStreams, deleteStream } from "../../actioncreators";
import { history } from "../../history";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.getStreams();
	}

	renderEditButtons = (stream) => {
		let { userId: currentUserId } = this.props.auth;
		if (stream.userId === currentUserId) {
			return (
				<div className="right floated content">
					<div
						className="ui button"
						onClick={() => {
							history.push(`/streams/edit/${stream.id}`);
						}}
					>
						Edit
					</div>
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
		let { auth } = this.props;
		if (auth && auth.isLoggedIn === true) {
			return (
				<Link
					to="/streams/new"
					className="ui right floated button green"
				>
					Add Stream
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
	return {
		streams: Object.values(state.streams),
		auth: state.auth,
	};
};

const reduxStreamlist = connect(mapStateToProps, { getStreams, deleteStream })(
	StreamList
);

export { reduxStreamlist as StreamList };
