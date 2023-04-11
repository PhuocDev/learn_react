/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import PostItem from '../PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { deletePost, startEditingPost } from 'pages/blog/blog.slice'
import http from 'utils/http'
import { error } from 'console'

//goi api trong useeffect
//neu goi thanh cong thi dispatch action type: 'blog/getPostListSuccess'
//neu goi that bai thi dispatch action type: 'blog/getPostListFailed'
//khong duoc xu ly bat dong bo trong reduce (khong duoc get api trong reduce)

export default function PostList() {
    //postList nam o day
    const postList = useSelector((state: RootState) => state.blog.postList)
    const dispatch = useDispatch();
    
    //get api posts
    useEffect(() => {
        const controller = new AbortController()
        http.get('posts', {
            signal: controller.signal
        }).then((res) => {
            console.log(res.data)
            const postsListResult = res.data;
            dispatch({
                type: 'blog/getPostListSuccess',
                payload: postsListResult
            })
        }).catch(error => {
            if(!(error.code === "ERR_CANCELED"))
            dispatch({
                type:'blog/getPostListFailed',
                payload: error
            })
        })
        return () => {
            controller.abort()
        }
    }, [dispatch])



    
    const handleDelete = (postId : string) => {dispatch(deletePost(postId))}
    const handleStartEditing = (postId : string) => {dispatch(startEditingPost(postId))}
  return (
    <>
        <div className='container'>
            <h4 className='col d-flex justify-content-center'>Phuocdev's blog</h4>
            <p className='col d-flex justify-content-center'>I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.</p>
            <div className='container row  d-flex justify-content-center'>
                {postList.map(post => (
                    <PostItem post={post} key={post.id}
                    handleDelete={handleDelete} 
                    handleStartEditing={handleStartEditing}
                    />
                ))}          
            </div>
        </div>
    </>
  )
}
