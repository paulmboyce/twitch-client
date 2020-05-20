import {
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
	GET_STREAM,
	GET_STREAMS,
} from "../actioncreators/types";
import { mapArrayToKeyedObject } from "../utils";

const streamReducer = function (oldState = {}, action) {
	console.log(action.type);
	switch (action.type) {
		case CREATE_STREAM: {
			return {
				...oldState,
				[action.payload.stream.id]: action.payload.stream,
			};
		}

		case GET_STREAMS: {
			return mapArrayToKeyedObject(action.payload.streams);
		}

		case GET_STREAM: {
			return {
				...oldState,
				[action.payload.stream.id]: action.payload.stream,
			};
		}

		case EDIT_STREAM: {
			return {
				...oldState,
				[action.payload.stream.id]: action.payload.stream,
			};
		}

		case DELETE_STREAM: {
			let streams = { ...oldState };
			delete streams[action.payload.id];
			return streams;
		}

		default: {
			return oldState;
		}
	}
};

export { streamReducer };
