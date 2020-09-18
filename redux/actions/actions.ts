import axios, {AxiosResponse} from 'axios';
import {Comment_I, Post_I} from "../../types/types";
import Cookies from 'js-cookie';

export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';
export const LOAD_PERSISTED_POSTS = 'LOAD_PERSISTED_POSTS';

export const createNewPost = (post: Post_I) => {
    const posts = JSON.parse(Cookies.get('posts'));
    posts.push(post);
    Cookies.set('posts', JSON.stringify(posts));
    return {
        type: CREATE_NEW_POST,
        payload: post
    }
}

export const fetchPosts = () => {
    const postsStr = Cookies.get('posts');
    if (postsStr) {
        const postsPersist = JSON.parse(postsStr);
        if (postsPersist)
            return {
                type: LOAD_PERSISTED_POSTS,
                payload: postsPersist
            }
    }

    return async dispatch => {
        const res: AxiosResponse = await axios.get('https://simple-blog-api.crew.red/posts');
        const posts: Array<Post_I> = res.data;
        posts.forEach(post => post.comments = []);
        Cookies.set('posts', JSON.stringify(posts), {expires: 1});
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        });
    }
}

export const addPostComment = (post: Post_I, comment: Comment_I) => {
    return {
        type: ADD_POST_COMMENT,
        payload: {post, comment}
    }
}