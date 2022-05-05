import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = {
    auth:authReducer
}
export default rootReducer;