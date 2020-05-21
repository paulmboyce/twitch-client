import React from "react";
import { connect } from "react-redux";

const StreamEdit = (props) => {
	const { stream } = props;
	console.log("PROPS: ", props);
	return (
		<div>
			StreamEdit STREAM: {props.match.params.id}
			<p>TITLE: {stream ? stream.title : null}</p>
			<p>DESC: {stream ? stream.description : null}</p>
		</div>
	);
};

const mapStateToProps = function (state, oldProps) {
	console.log("STATE:", state);
	console.log("OLD PROPS: ", oldProps);
	return { stream: state.streams[oldProps.match.params.id] };
};

const connected = connect(mapStateToProps)(StreamEdit);
export { connected as StreamEdit };
