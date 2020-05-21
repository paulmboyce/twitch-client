import { axiosStream } from "../api/axiosStreams";
import { history } from "../history";
import {
	CREATE_STREAM,
	EDIT_STREAM,
	DELETE_STREAM,
	GET_STREAM,
	GET_STREAMS,
} from "./types";

const createStream = function (formValues) {
	return function (dispatch, getState) {
		const { userId } = getState().auth;
		axiosStream
			.post("/streams", { ...formValues, userId })
			.then(function (response) {
				dispatch({
					type: CREATE_STREAM,
					payload: { stream: response.data },
				});
				history.push("/");
			});
		// .err(() => {  Show Errors })
	};
};

const editStream = function (formValues, id) {
	return function (dispatch, getState) {
		const { userId } = getState().auth;
		axiosStream
			.put(`/streams/${id}`, { ...formValues, userId })
			.then(function (response) {
				dispatch({
					type: EDIT_STREAM,
					payload: { stream: response.data },
				});
				history.push("/");
			});
	};
};

const deleteStream = function (id) {
	return function (dispatch) {
		axiosStream.delete(`/streams/${id}`).then(function () {
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
			dispatch({
				type: GET_STREAMS,
				payload: { streams: response.data },
			});
		});
	};
};

export { createStream, editStream, deleteStream, getStream, getStreams };
