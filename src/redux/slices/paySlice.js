import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'howie',
    size:'s'
}

const paySlice = createSlice({
    name: 'pay',
    initialState,
    reducers: {
        payinfo: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
        }
    }
})

export const selectAllPosts = (state) => state.posts.posts;

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer