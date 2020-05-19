import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { authReducer } from "./AuthReducer";
import { streamReducer } from "./StreamReducer";

const reducers = combineReducers({
	loginStatus: authReducer,
	form: formReducer,
	streams: streamReducer,
});

export { reducers };
