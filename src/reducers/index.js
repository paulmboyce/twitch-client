import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";

const reducers = combineReducers({
	loginStatus: authReducer,
});

export { reducers };
