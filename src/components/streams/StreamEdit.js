import React from "react";
import { connect } from "react-redux";

import { getStream } from "../../actioncreators";

class StreamEdit extends React.Component {
	componentDidMount = () => {
		const { stream, getStream, match } = this.props;

		if (!stream) {
			getStream(match.params.id);
		}
	};

	render() {
		const { stream } = this.props;
		console.log("PROPS: ", this.props);
		return (
			<div>
				StreamEdit STREAM: {this.props.match.params.id}
				<p>TITLE: {stream ? stream.title : null}</p>
				<p>DESC: {stream ? stream.description : null}</p>
			</div>
		);
	}
}

const mapStateToProps = function (state, oldProps) {
	console.log("STATE:", state);
	console.log("OLD PROPS: ", oldProps);
	return { stream: state.streams[oldProps.match.params.id] };
};

const connected = connect(mapStateToProps, { getStream })(StreamEdit);
export { connected as StreamEdit };
