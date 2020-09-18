import {AuthorName, CommentText, Wrapper} from "../styles/comment.styles";

const Comment = ({author, comment}) => {
    return (
        <Wrapper>
            <AuthorName>
                {author}
            </AuthorName>
            <CommentText>
                {comment}
            </CommentText>
        </Wrapper>
    );
}

export default Comment;