import React from "react";
import { connect } from "react-redux";

import { StreamForm } from "./StreamForm";
import { getStream, editStream } from "../../actioncreators";

class StreamEdit extends React.Component {
	componentDidMount = () => {
		const { stream, getStream, match } = this.props;

		if (!stream) {
			getStream(match.params.id);
		}
	};

	onSubmit = (fields) => {
		this.props.editStream(fields, this.props.match.params.id);
	};

	render() {
		const { stream } = this.props;
		console.log("PROPS: ", this.props);
		return (
			<div>
				StreamEdit STREAM: {this.props.match.params.id}
				<p>TITLE: {stream ? stream.title : null}</p>
				<p>DESC: {stream ? stream.description : null}</p>
				<StreamForm title="Stream Edit" onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = function (state, oldProps) {
	console.log("STATE:", state);
	console.log("OLD PROPS: ", oldProps);
	return { stream: state.streams[oldProps.match.params.id] };
};

const connected = connect(mapStateToProps, { getStream, editStream })(
	StreamEdit
);
export { connected as StreamEdit };
