const initState = {
    posts: [
        {id: '1', title: 'CKC', body: 'This is my childhood college'},
        {id: '2', title: 'CSAIST', body: 'This is my graduation college'},
        {id: '3', title: 'OIST', body: 'This is my post graduation college'}
    ]
}

const rootReducer = (state= initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer

