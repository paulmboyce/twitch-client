import React from "react";
import { connect } from "react-redux";

import { createStream } from "../../actioncreators";
import { StreamForm } from "./StreamForm";

class StreamCreate extends React.Component {
	onSubmit = (fields) => {
		this.props.createStream(fields);
	};

	render() {
		return <StreamForm title="Create a Stream" onSubmit={this.onSubmit} />;
	}
}

const connected = connect(null, { createStream })(StreamCreate);
export { connected as StreamCreate };
