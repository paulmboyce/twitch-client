import { axiosStream } from "../api/axiosStreams";
import {
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
	GET_STREAM,
	GET_STREAMS,
} from "./types";

const createStream = function (newStream) {
	return function (dispatch) {
		axiosStream.post("/streams", newStream).then(function (response) {
			dispatch({
				type: CREATE_STREAM,
				payload: { stream: response.data },
			});
		});
	};
};

const editStream = function (stream) {
	return function (dispatch) {
		axiosStream
			.put(`/streams/${stream.id}`, stream)
			.then(function (response) {
				dispatch({
					type: EDIT_STREAM,
					payload: { stream: response.data },
				});
			});
	};
};

const deleteStream = function (id) {
	console.log(`DELETE ID ${id}...`);
	return function (dispatch) {
		axiosStream.delete(`/streams/${id}`).then(function (response) {
			dispatch({
				type: DELETE_STREAM,
				payload: { id: id },
			});
		});
	};
};

const getStream = function (id) {
	return function (dispatch) {
		axiosStream.get(`/streams/${id}`).then(function (response) {
			dispatch({
				type: GET_STREAM,
				payload: { stream: response.data },
			});
		});
	};
};

const getStreams = function () {
	return function (dispatch) {
		axiosStream.get(`/streams`).then(function (response) {
			let streams = {};
			response.data.forEach(function (stream) {
				streams[stream.id] = stream;
			});
			dispatch({
				type: GET_STREAMS,
				payload: { streams: streams },
			});
		});
	};
};
export { createStream, editStream, deleteStream, getStream, getStreams };
