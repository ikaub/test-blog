export interface Comment_I {
    author: string,
    comment: string
}

export interface Post_I {
    id: any,
    title: string,
    body: string,
    comments: Array<Comment_I>
}

export interface State_I {
    posts: Array<Post_I>,
    lastId: any,
}