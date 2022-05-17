import authReducer from "./authReducer";
import blogsReducer from "./blogsReducer";
import blogReducer from "./blogReducer";
import { combineReducers } from "redux";

export default combineReducers({
    auth:authReducer,
    blogs:blogsReducer,
    blog:blogReducer,
});