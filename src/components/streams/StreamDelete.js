import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { ModalFragment } from "../ModalFragment";
import { getStream, deleteStream } from "../../actioncreators";

class StreamDelete extends React.Component {
	componentDidMount = () => {
		if (!this.props.stream) {
			this.props.getStream(this.props.match.params.id);
		}
	};

	successAction = () => {
		this.props.deleteStream(this.props.match.params.id);
	};

	renderActions() {
		return (
			<React.Fragment>
				<Link to={"/"} className="ui grey cancel  button">
					<i className="remove icon"></i>
					NO
				</Link>
				<Link
					to={"/"}
					onClick={this.successAction}
					className="ui red ok button"
				>
					<i className="checkmark icon"></i>
					YES
				</Link>
			</React.Fragment>
		);
	}

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
				<ModalFragment
					header="DELETE STREAM"
					message={`Want to delete Stream "${stream.title}"?`}
					cancelLink="/"
					actions={this.renderActions()}
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
