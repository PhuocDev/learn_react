import { current } from '@reduxjs/toolkit';
/* eslint-disable prettier/prettier */
import {   createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { stat } from 'fs';
import { Post } from 'types/blog.type'
import http from 'utils/http';


type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>
type PendingAction = ReturnType<GenericAsyncThunk['pending']>
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

interface BlogState {
    postList: Post[]
    editingPost: Post | null
    loading: boolean
    currentRequestId: string | undefined
}
const initialState: BlogState = {
    postList: [],
    editingPost: null,
    loading: false,
    currentRequestId: undefined
}

export const getPostList = createAsyncThunk(
    'blog/getPostList',
    async(_,thunkAPI) => {
        const response = await http.get<Post[]>('posts', {
            signal: thunkAPI.signal
        } )
        return response.data
    }
)
export const addPost = createAsyncThunk(
    'blog/addPost',
    async (body : Post,thunkAPI) => {
        try {
            const response = await http.post<Post>('posts',body, {
                signal: thunkAPI.signal
            } )
            return response.data
        } catch (error : any) {
            console.log(error)
            if (error.name === 'AxiosError' && error.response.status === 421) {
                return thunkAPI.rejectWithValue(error.response.data);
            }
            throw error
        }
        
    }
) 
export const updatePost = createAsyncThunk(
    'blog/updatePost',
    async ({postId, body} : {postId: string, body: Post},thunkAPI) => {
        try {
            const response = await http.put<Post>(`posts/${postId}`,body, {
                signal: thunkAPI.signal
            } )
            return response.data
        } catch (error : any) {
            console.log(error);
            if (error.name === 'AxiosError' && error.response.status === 422) {
                return thunkAPI.rejectWithValue(error.response.data);
            }
            throw error
        }
        
    }
) 
export const deletePost = createAsyncThunk(
    'blog/deletePost',
    async (postId : string,thunkAPI) => {
        const response = await http.delete(`posts/${postId}`, {
            signal: thunkAPI.signal
        } )
        return response.data
    }
)

const blogSlice = createSlice({
    name: 'blog',
    initialState: initialState,
    reducers: {
        startEditingPost: (state, action) => {
            const postId = action.payload;
            const foundPost = state.postList.find(post => post.id === postId) || null;
            state.editingPost = foundPost;
        },
        cancelEditingPost: (state) => {
            state.editingPost = null;
        },
        finishEditingPost: (state, action) => {
            const postId = action.payload.id;
            state.postList.some((post, index) => {
                if (post.id === postId) {
                    state.postList[index] = action.payload
                    state.editingPost = null;
                    return true;
                }
                return false;
            })
        },
 
    }, extraReducers(builder) {
        builder
        .addCase(getPostList.fulfilled, (state, action) => {
            state.postList = action.payload
        })
        .addCase(addPost.fulfilled, (state, action) => {
            state.postList.push(action.payload)
        })
        .addCase(updatePost.fulfilled, (state, action) => {
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
        .addCase(deletePost.fulfilled, (state, action) => {
            //day la nhung thu truyen vao
            const postId = action.meta.arg;
            const foundPostIndex = state.postList.findIndex(post => post.id === postId)
            if (foundPostIndex != -1) {
                state.postList.splice(foundPostIndex,1);
            }
        })
        .addMatcher<PendingAction>(
            (action) => action.type.endsWith('/pending'),
            (state, action) => {
                state.loading = true;
                state.currentRequestId = action.meta.requestId; //sinh ra khi gọi 1 api bất kì
            }
        )
        .addMatcher<RejectedAction | FulfilledAction>(
            (action) => (action.type.endsWith('/rejected') || action.type.endsWith('/fulfilled') ) ,
            (state, action) => {
                if (state.currentRequestId && state.currentRequestId === action.meta.requestId) {
                    state.loading = false;
                    state.currentRequestId = undefined;
                }
                
            }
        )
    }
})

export const {   startEditingPost, finishEditingPost, cancelEditingPost  } = blogSlice.actions
const blogReducer = blogSlice.reducer
export default blogReducer
