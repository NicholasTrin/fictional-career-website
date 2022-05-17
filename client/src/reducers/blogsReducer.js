import { FETCH_BLOGS } from "../actions/types";

export default function blogsReducer(state=null, action){
    //console.log("REDUCED", action.type, action.payload);
    switch(action.type){ 
        case FETCH_BLOGS:
            return action.payload;
        default:
            return state
    }
}