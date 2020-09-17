import {FETCH_POSTS, CREATE_NEW_POST} from "../actions/actions";
import {State_I} from "../../types/types";

const postReducer = (state: State_I = {posts: [], lastId: 0}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,
                lastId: action.payload.slice(-1)[0]
            }
        case CREATE_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                lastId: state.lastId + 1
            }
        default:
            return state;
    }
}

export default postReducer;