import Head from "next/head";
import {Post_I, State_I} from "../../types/types";
import {BodyText, Title, Wrapper} from "../../components/postId.styles";
import {useSelector, useDispatch} from 'react-redux';
import {GetServerSidePropsContext} from "next";
import CommentsSection from "../../components/comments-section/comments-section";
import {useEffect} from "react";
import {fetchPosts} from "../../redux/actions/actions";

const Post = ({postId}) => {
    const posts: Array<Post_I> = useSelector((state: State_I) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!posts.length)
            dispatch(fetchPosts());
    }, [posts, dispatch])

    if (!posts.length)
        return <div>Loading...</div>

    const post: Post_I = posts.find(post => post.id == postId);
    const {title, body} = post;

    return (
        <Wrapper>
            <Head>
                <title>{title}</title>
            </Head>
            <Title>
                {title}
            </Title>
            <BodyText>
                {body}
            </BodyText>
            <CommentsSection post={post}/>
        </Wrapper>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {postId} = context.params;
    return {props: {postId}};
}

export default Post;