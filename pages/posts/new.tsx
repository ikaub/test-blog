import AddPostForm from "../../components/addPostForm/AddPostForm";
import Head from "next/head";

const CreatePost = () => {

    return (
        <div>
            <Head>
                <title>Create New Post</title>
            </Head>
            <AddPostForm/>
        </div>
    );
}

export default CreatePost;