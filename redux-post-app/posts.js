const { createStore } = require('redux');
// initial state
const initialState = {
    posts: []
}

// action (action, action creator)
// Add post
const addPostAction = (post) => {
    return {
        type: "ADD_POST",
        payload: post
    };
}
// remove post
const reomovePostAction = (id) => {
    return {
        type: "REMOVE_POST",
        id
    }
}

// reducer
const postReducer = (state = initialState, action) => {
    if (action.type === 'ADD_POST') {
        return {
            posts: [...state.posts, action.payload],
        }
    }

    else if (action.type === 'REMOVE_POST') {
        return {
            posts: state.posts.filter((post) => {
                return post.id !== action.id;
            })
        }
    }
    else {
        return state;
    }
}

// store
const store = createStore(postReducer);

// subscribe 
store.subscribe(() => {
 
    const data = store.getState();
    console.log(data);
})
// dispatch
// add post action 
store.dispatch(addPostAction({
    id: 1,
    title : 'Good Post',
}))
store.dispatch(addPostAction({
    id: 2,
    title : 'Good Post 2',
}))

//  remove posts
store.dispatch(reomovePostAction(1))
