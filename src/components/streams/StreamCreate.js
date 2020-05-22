import React from "react";
import { connect } from "react-redux";

import { createStream } from "../../actioncreators";
import { StreamForm } from "./StreamForm";

class StreamCreate extends React.Component {
	onSubmit = (fields) => {
		this.props.createStream(fields);
	};

	render() {
		return (
			<div>
				<h1>Create a Stream</h1>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const connected = connect(null, { createStream })(StreamCreate);
export { connected as StreamCreate };
