import {
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
	GET_STREAM,
	GET_STREAMS,
} from "../actioncreators/types";
import { act } from "react-dom/test-utils";

const streamReducer = function (oldStreams = {}, action) {
	console.log(action.type);
	switch (action.type) {
		case CREATE_STREAM: {
			return {
				...oldStreams,
				[action.payload.stream.id]: action.payload.stream,
			};
		}

		case GET_STREAMS: {
			return action.payload.streams;
		}

		case GET_STREAM: {
			let streams = { ...oldStreams };
			return (streams[action.payload.stream.id] = action.payload.stream);
		}

		case EDIT_STREAM: {
			let streams = { ...oldStreams };
			return (streams[action.payload.stream.id] = action.payload.stream);
		}

		case DELETE_STREAM: {
			let streams = { ...oldStreams };
			console.log(
				`STREAMS: before delete id:${action.payload.id}`,
				streams
			);
			delete streams[action.payload.id];
			console.log("STREAMS: after", streams);
			return streams;
		}

		default: {
			return oldStreams;
		}
	}
};

export { streamReducer };
