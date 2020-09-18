import {AuthorName, CommentText, Wrapper} from "./comment.styles";

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