import { FETCH_BLOG } from "../actions/types";

export default function blogsReducer(state=null, action){
    console.log("REDUCED", action.type, action.payload);
    switch(action.type){ 
        case FETCH_BLOG:
            return action.payload;
        default:
            return state
    }
}