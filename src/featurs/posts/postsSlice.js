/* eslint-disable no-undef */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postApi";
// import { build } from "vite";

const initialState = {
    posts: [],
    isLoading: true,
    isError: false,
    error: null
}
export const gethpost = createAsyncThunk("posts/gethpost", async ()=>{
    const posts = await fetchPosts();
    console.log(posts);
    return posts;
})
const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    extraReducers: (builder)=> {
        builder.addCase(gethpost.pending, (state, action)=>{
        state.isError = false,
        state.isLoading = true
        }).addCase(gethpost.fulfilled, (state, action)=>{
            // isLoading = false,
            state.posts = action.payload;
        }).addCase(gethpost.rejected, (state,action)=>{
            state.isLoading = false,
            state.isError = true,
            state.error = action.error?.message;
        });
    },
});

export default postSlice.reducer ;