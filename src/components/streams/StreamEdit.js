import React from "react";

const StreamEdit = (props) => {
	console.log("PROPS: ", props);
	return <div>StreamEdit STREAM: {props.match.params.id}</div>;
};

export { StreamEdit };
