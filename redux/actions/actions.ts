import axios, {AxiosResponse} from 'axios';
import {Post_I} from "../../types/types";

export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

export const createNewPost = (post: Post_I) => {
    return {
        type: CREATE_NEW_POST,
        payload: post
    }
}

export const fetchPosts = () => {
    return async dispatch => {
        const res: AxiosResponse = await axios.get('https://simple-blog-api.crew.red/posts');
        const posts: Array<Post_I> = res.data;
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        });
    }
}