import Head from "next/head";
import {State_I} from "../../types/types";
import {BodyText, Title, Wrapper} from "../../components/postId.styles";
import {useSelector} from 'react-redux';
import {GetServerSidePropsContext} from "next";

const Post = ({postId}) => {
    const posts = useSelector((state: State_I) => state.posts);
    const {title, body} = posts.find(post => post.id == postId);

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
        </Wrapper>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {postId} = context.params;
    return {props: {postId}};
}

export default Post;