/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/blog.slice'
import { useDispatch } from 'react-redux'

export const store = configureStore ({
    reducer: {
        blog: blogReducer
    }
})

//lay root state va Appdispatch tu store
export type RootState = ReturnType<typeof store.getState >

export type AppDispatch = typeof store.dispatch
//use this when appDispatch is errored
export const useAppDispatch = () => useDispatch<AppDispatch>()