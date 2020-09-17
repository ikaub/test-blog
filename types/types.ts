export interface Post_I {
    id: any,
    title: string,
    body: string
}

export interface State_I {
    posts: Array<Post_I>,
    lastId: any
}