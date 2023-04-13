/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect } from 'react'
import PostItem from '../PostItem'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
import { deletePost, getPostList, startEditingPost } from 'pages/blog/blog.slice'
import SkeletonPost from '../SkeletonPost'


//goi api trong useeffect
//neu goi thanh cong thi dispatch action type: 'blog/getPostListSuccess'
//neu goi that bai thi dispatch action type: 'blog/getPostListFailed'
//khong duoc xu ly bat dong bo trong reduce (khong duoc get api trong reduce)

export default function PostList() {
    //postList nam o day
    const postList = useSelector((state: RootState) => state.blog.postList)
    const loading = useSelector((state: RootState) => state.blog.loading)
    //xem config useAppDispatch trong file store
    const dispatch = useAppDispatch();
    
    //get api posts
    useEffect(() => {
       const promise =  dispatch(getPostList())
       return () => {
        promise.abort()
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
                {loading && (
                    <Fragment>
                        <SkeletonPost/>
                        <SkeletonPost/>
                    </Fragment>
                )}
                {!loading && postList.map(post => (
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
