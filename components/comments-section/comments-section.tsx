import {BodyInput, Header, SubmitButton, TitleInput} from "../styles/addPostForm.styles";
import {CommentsList, CommentsWrapper} from "../styles/postId.styles";
import Comment from "../comment/comment";
import {Comment_I} from "../../types/types";
import {addPostComment} from "../../redux/actions/actions";
import {useState} from 'react';
import {useDispatch} from "react-redux";
import Error from "../error/error";

const CommentsSection = ({post}) => {

    const {comments} = post;

    const [state, setState] = useState({author: '', comment: ''});
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const addComment = () => {
        if (!state.comment || !state.author) {
            setError(true);
        } else {
            const comment: Comment_I = {
                author: state.author,
                comment: state.comment
            };
            dispatch(addPostComment(post, comment));
            setState({author: '', comment: ''});
        }
    }

    const handleChange = event => {
        setState({...state, [event.target.name]: event.target.value});
        setError(false);
    }

    return (
        <CommentsWrapper>
            {
                comments.length ?
                    <>
                        <Header>Comments:</Header>
                        <CommentsList>
                            {comments.map((comment, index) => (
                                <li key={index}>
                                    <Comment author={comment.author} comment={comment.comment}/>
                                </li>
                            ))}
                        </CommentsList>
                    </>
                    : 'There are no comments yet. Be first to leave the comment! :)'
            }
            <Header>Leave your comment below!</Header>
            {error ? <Error/> : null}
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
        </CommentsWrapper>
    );
}

export default CommentsSection