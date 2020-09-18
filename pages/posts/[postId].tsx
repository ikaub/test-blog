import Head from "next/head";
import {Comment_I, Post_I, State_I} from "../../types/types";
import {BodyText, CommentsSection, Title, Wrapper, CommentsList} from "../../components/postId.styles";
import {SubmitButton, TitleInput, BodyInput, Header} from "../../components/addPostForm/addPostForm.styles";
import {useSelector} from 'react-redux';
import {GetServerSidePropsContext} from "next";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addPostComment} from "../../redux/actions/actions";
import Comment from "../../components/comment/comment";

const Post = ({postId}) => {
    const posts: Array<Post_I> = useSelector((state: State_I) => state.posts);
    const post: Post_I = posts.find(post => post.id == postId);
    const {title, body, comments} = post;

    const [state, setState] = useState({author: '', comment: ''});
    const dispatch = useDispatch();

    const addComment = () => {
        const comment: Comment_I = {
            author: state.author,
            comment: state.comment
        };
        dispatch(addPostComment(post, comment));
        setState({author: '', comment: ''});
    }

    const handleChange = event => {
        setState({...state, [event.target.name]: event.target.value});
    }

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
            <CommentsSection>
                {
                    comments.length ?
                        <>
                            <Header>Comments:</Header>
                            <CommentsList>
                                {comments.map(comment => (
                                    <li><Comment author={comment.author} comment={comment.comment}/></li>
                                ))}
                            </CommentsList>
                        </>
                        : <BodyText>
                            There are no comments yet. Be first to leave the comment! :)
                        </BodyText>
                }
                <Header>Leave your comment below!</Header>
                <TitleInput
                    placeholder='Author Name'
                    size={30}
                    name='author'
                    value={state.author}
                    onChange={handleChange}
                />
                <BodyInput
                    cols={150}
                    rows={15}
                    name='comment'
                    value={state.comment}
                    onChange={handleChange}
                />
                <SubmitButton onClick={addComment}>Leave Comment!</SubmitButton>
            </CommentsSection>
        </Wrapper>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {postId} = context.params;
    return {props: {postId}};
}

export default Post;