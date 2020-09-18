import Post from "../post/post";
import {Wrapper, PostsList} from "../styles/postsSection.styles";
import {useEffect} from "react";
import {fetchPosts} from "../../redux/actions/actions";
import {useSelector, useDispatch} from 'react-redux';
import {Post_I, State_I} from "../../types/types";

const PostsSection = () => {
    const posts: Array<Post_I> = useSelector((state: State_I) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length)
            dispatch(fetchPosts());
    }, [posts, dispatch]);

    return (
        <Wrapper>
            <PostsList>
                {posts.map((post) => (
                        <Post id={post.id} key={post.id} title={post.title} body={post.body}/>
                    )
                )}
            </PostsList>
        </Wrapper>
    );
}

export default PostsSection;