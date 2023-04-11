/* eslint-disable prettier/prettier */
import React from 'react'
import PostItem from '../PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { deletePost, startEditingPost } from 'pages/blog/blog.reducer'

export default function PostList() {
    //postList nam o day
    const postList = useSelector((state: RootState) => state.blog.postList)
    const dispatch = useDispatch();
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
