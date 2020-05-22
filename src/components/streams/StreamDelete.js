import React from "react";
import { connect } from "react-redux";

import { Modal } from "../Modal";
import { getStream, deleteStream } from "../../actioncreators";

class StreamDelete extends React.Component {
	componentDidMount = () => {
		if (!this.props.stream) {
			this.props.getStream(this.props.match.params.id);
		}
	};
	render() {
		console.log("PROPS:", this.props);
		const { match, stream } = this.props;
		if (!stream) {
			return null;
		}
		return (
			<div>
				<h1>StreamDelete</h1>
				{match.params.id}
				<Modal
					header="DELETE STREAM"
					message={`Want to delete Stream "${stream.title}"?`}
					successLink="/"
					cancelLink="/"
					successAction={() => {
						this.props.deleteStream(this.props.match.params.id);
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = function (state, ownProps) {
	return { stream: state.streams[ownProps.match.params.id] };
};
const reduxComponent = connect(mapStateToProps, { getStream, deleteStream })(
	StreamDelete
);
export { reduxComponent as StreamDelete };
