import {FETCH_POSTS, CREATE_NEW_POST, ADD_POST_COMMENT, LOAD_PERSISTED_POSTS} from "../actions/actions";
import {State_I} from "../../types/types";

const postReducer = (state: State_I = {posts: [], lastId: 0}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,
                lastId: action.payload.length + 1,
            }
        case CREATE_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                lastId: state.lastId + 1
            }
        case ADD_POST_COMMENT:
            const {post, comment} = action.payload;
            post.comments.push(comment);
            return {
                ...state,
                posts: state.posts.map(p => p.id != post.id ? p : post)
            }
        case LOAD_PERSISTED_POSTS:
            return {
                ...state,
                posts: action.payload,
                lastId: action.payload.length + 1
            }
        default:
            return state;
    }
}

export default postReducer;