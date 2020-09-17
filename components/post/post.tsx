import {Wrapper, Title, Body} from "./post.styles";
import Link from "next/link";

const Post = ({title, body, id}) => {
    return (
        <Link href='/posts/[postId]' as={`/posts/${id}`} passHref>
            <Wrapper>
                <Title>
                    {title}
                </Title>
                <Body>
                    {body}
                </Body>
            </Wrapper>
        </Link>
    );
}

export default Post;