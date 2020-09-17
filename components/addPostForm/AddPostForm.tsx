import {Wrapper, Header, TitleInput, BodyInput, SubmitButton} from "./addPostForm.styles";
import {Dispatch, useState} from 'react';
import {Post_I, State_I} from "../../types/types";
import {useDispatch, useSelector} from 'react-redux';
import {createNewPost} from "../../redux/actions/actions";
import {useRouter} from 'next/router';

interface FormInput_I {
    title: string,
    body: string
}

const AddPostForm = () => {
    const router = useRouter();
    const postId: number = useSelector((state: State_I) => state.lastId);
    const dispatch = useDispatch();

    const [state, setState]: [FormInput_I, Dispatch<FormInput_I>] = useState({title: "", body: ""});

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value});
    }

    const handleSubmit = () => {
        const post: Post_I = {
            title: state.title,
            body: state.body,
            id: postId + 1
        };
        dispatch(createNewPost(post));
        router.push('/');
    }

    return (
        <Wrapper>
            <Header>
                Create New Post
            </Header>
            <TitleInput
                name='title'
                value={state.title}
                placeholder='Title'
                size={30}
                onChange={handleChange}
            />
            <BodyInput
                name='body'
                value={state.body}
                placeholder='Enter your post here...'
                cols={150}
                rows={15}
                onChange={handleChange}
            />
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </Wrapper>
    );
}

export default AddPostForm;