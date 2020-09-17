import Post from "../components/post/post";
import Header from "../components/header/header";
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchPosts} from "../redux/actions/actions";
import Head from "next/head";
import PostsSection from "../components/postsSection/postsSection";

const Home = () => {

    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <Header/>
            <PostsSection />
        </div>
    )
}

export default Home;
