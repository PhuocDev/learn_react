/* eslint-disable prettier/prettier */
import { addPost, cancelEditingPost, finishEditingPost } from 'pages/blog/blog.reducer'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { Post } from 'types/blog.type'
import PostItem from '../PostItem'

const initialState: Post = {
    id: '',
    description: '',
    featuredImage: '',
    publishDate: '',
    published: false,
    title: ''
}
export default function CreatePost() {
    const [formData, setFormData] = useState<Post>(initialState)

    //get data from editing post
    const editingPost = useSelector((state: RootState) => state.blog.editingPost);
    // console.log(editingPost)
    useEffect(() => {
      setFormData(editingPost || initialState)
    }, [editingPost])



    const dispatch = useDispatch()
    const handleSubmit = (event:  React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        //check if needed to update
        if (editingPost) {
          dispatch(finishEditingPost(formData))
          setFormData(initialState)
        } else {
          //adding id to formData
        const formDataWithId = {...formData, id: new Date().toISOString()}
          dispatch(addPost(formDataWithId))
          setFormData(initialState)
          // console.log(formDataWithId);
        }
        
    }

    //click cancel button
    const handleCancelEdit = () => {
      dispatch(cancelEditingPost())
      setFormData(initialState)
    }

    return (
      <>
        <form onSubmit={handleSubmit } onReset={handleCancelEdit} className='m-3 p-3'>
          <div className='mb-3'>
            <label className='form-label'>
              Title
            </label>
            <input
              type='text'
              className='form-control'
              aria-describedby='Title'
              placeholder='Enter title here'
              required
              value={formData.title}
              onChange={(event) => setFormData((prev) => ({ ...prev, title: event.target.value}))}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>
              Featured
              Image
            </label>
            <input
              type='text'
              className='form-control'
              aria-describedby='Featured Image'
              placeholder='Url Image'
              required
              value={formData.featuredImage}
              onChange={(event) => setFormData((prev) => ({ ...prev, featuredImage: event.target.value}))}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>
              Description
            </label>
            <textarea
              className='form-control'
              aria-describedby='Description'
              placeholder='Enter description for your blog'
              required
              value={formData.description}
              onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value}))}
            />
          </div>
          <div
            className='mb-3 w-50'
            style={{
              maxWidth:
                "20%"
            }}
          >
            <label className='form-label'>
              Published
              date:{" "}
            </label>
            <input
              type='datetime-local'
              className='form-control'
              aria-describedby='Date'
              required
              value={formData.publishDate}
              onChange={(event) => setFormData((prev) => ({ ...prev, publishDate: event.target.value}))}
            />
          </div>
          <div className='mb-3 form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
              checked={formData.published}
              onChange={(event) => setFormData((prev) => ({ ...prev, published: event.target.checked}))}
            />
            <label className='form-check-label'>
              Publish
            </label>
          </div>
          <div className='row'>
            {
              !editingPost && 
              <>
                <button
                  type='submit'
                  className='col-2 m-2 btn btn-primary'
                >
                  Publish
                  post
                </button>
              </>
            }
            {
              editingPost && 
              <>
                <button
                  type='submit'
                  className='col-1 m-2 btn btn-secondary'
                >
                  Update
                </button>
                <button
                  type='reset'
                  className='col-1 m-2 btn btn-danger'
                >
                  Cancel
                </button>
              </>
            }
          </div>
        </form>
      </>
    )
}
