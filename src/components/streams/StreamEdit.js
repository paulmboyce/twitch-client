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
		console.log("EDIT FIELDS TO SAVE: ", fields);
		this.props.editStream(fields, this.props.match.params.id);
	};

	render() {
		const { stream } = this.props;
		console.log("PROPS: ", this.props);
		if (!stream) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h1>Edit Stream</h1>
				<StreamForm
					onSubmit={this.onSubmit}
					initialValues={{
						title: stream.title,
						description: stream.description,
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = function (state, oldProps) {
	return { stream: state.streams[oldProps.match.params.id] };
};

const connected = connect(mapStateToProps, { getStream, editStream })(
	StreamEdit
);
export { connected as StreamEdit };
