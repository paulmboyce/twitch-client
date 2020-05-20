import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getStreams, deleteStream } from "../../actioncreators";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.getStreams();
	}

	renderStreams = function (streams) {
		return streams.map((stream) => {
			return (
				<div className="ui item padded segment" key={stream.id}>
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
					<div className="content">
						<div className="header">{stream.title}</div>
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				<div className="ui clearing green padded segment">
					<h1>Streams</h1>
					<Link className="" to="/streams/new">
						<div className="ui right floated button green">
							Add Stream
						</div>
					</Link>
				</div>
				<div className="ui list relaxed middle aligned">
					{this.renderStreams(this.props.streams)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = function (state, oldProps) {
	return { streams: Object.values(state.streams) };
};

const reduxStreamlist = connect(mapStateToProps, { getStreams, deleteStream })(
	StreamList
);

export { reduxStreamlist as StreamList };
