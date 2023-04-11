/* eslint-disable prettier/prettier */
import { createAction, createReducer, current } from '@reduxjs/toolkit';
import { initalPostList } from 'constants/blog';
import { Post } from 'types/blog.type'

interface BlogState {
    postList: Post[]
    editingPost: Post | null
}
const initalState: BlogState = {
    postList: initalPostList,
    editingPost: null,
}
//ten blog nen trung voi blog trong store.ts
export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost') 
export const startEditingPost = createAction<string>('blog/startEditingPost')
export const cancelEditingPost = createAction('blog/cancelEditingPost')
export const finishEditingPost = createAction<Post>('blog/finishEditingPost')


const blogReducer = createReducer(initalState, (builder) => {
    builder.addCase(addPost, (state, action) => {
        //immerJs: allow to mutate a state safely
        const newPost = action.payload;
        state.postList.push(newPost);
    }).addCase(deletePost, (state, action) => {
        const postId = action.payload;
        const foundPostIndex = state.postList.findIndex(post => post.id === postId)
        if (foundPostIndex != -1) {
            state.postList.splice(foundPostIndex,1);
        }
    }).addCase(startEditingPost, (state, action) => {
        const postId = action.payload;
        const foundPost = state.postList.find(post => post.id === postId) || null;
        state.editingPost = foundPost;
    }).addCase(cancelEditingPost, (state, action) => {
        state.editingPost = null;
    }).addCase(finishEditingPost, (state, action) => {
        const postId = action.payload.id;
        state.postList.some((post, index) => {
            if (post.id === postId) {
                state.postList[index] = action.payload
                state.editingPost = null;
                return true;
            }
            return false;
        })
    })
    // .addMatcher((action) => action.type.includes('cancel') ,(action, state) => {
    //     console.log(current(state));
    // })
} )

export default blogReducer