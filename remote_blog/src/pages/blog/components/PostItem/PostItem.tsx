/* eslint-disable prettier/prettier */
import React from 'react'
import { Post } from 'types/blog.type';
interface PostItemType {
    post: Post,
    handleDelete: (postId: string) => void
    handleStartEditing: (postId: string) => void
}
export default function PostItem({post, handleDelete, handleStartEditing}: PostItemType) {

  return (
    <>
        <div className="card m-3 p-0" style={{width:'40%'}} >
            <div className="row g-0 ">
                <div className="col-md-4 p-0" >
                    <img src= {post.featuredImage}
                    className="img-fluid rounded-start"
                    style={{height:'300px', overflow:'hidden'}}
                    alt="..." />
                </div>
                <div className="col-md-8 p-0">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text"> {post.description}</p>
                        <p className="card-text"><small className="text-muted">Date release: {post.publishDate}</small></p>
                        <button onClick={() => handleStartEditing(post.id)} type='button' className='card-text mr-2 btn btn-outline-secondary btn-sm'>Edit</button>
                        <button onClick={() => handleDelete(post.id)} type='button' className='card-text btn btn-outline-secondary btn-sm'>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
