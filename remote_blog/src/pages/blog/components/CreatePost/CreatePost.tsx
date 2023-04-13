/* eslint-disable prettier/prettier */
import { addPost, cancelEditingPost, finishEditingPost, updatePost } from 'pages/blog/blog.slice'
import React, { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, useAppDispatch } from 'store'
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
interface ErrorForm {
  publishDate: string | null,
  wrongTitle: string | null
}
export default function CreatePost() {
    const [formData, setFormData] = useState<Post>(initialState)
    const [errorForm, setErrorForm] = useState<null | ErrorForm>(null);

    //get data from editing post
    const editingPost = useSelector((state: RootState) => state.blog.editingPost);

    const loading = useSelector((state: RootState) => state.blog.loading);
    

    // console.log(editingPost)
    useEffect(() => {
      setFormData(editingPost || initialState)
    }, [editingPost])



    const dispatch = useAppDispatch()
    const handleSubmit = (event:  React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        //check if needed to update
        if (editingPost) {
          dispatch(
            updatePost({
              postId: editingPost.id,
              body: formData
            })
          ).unwrap().then((res) => {
            console.log(res)
            setErrorForm(null)
            setFormData(initialState)
          }).catch(error => {
            //show error when calling api
            console.log(error)
            setErrorForm({
              publishDate: error.error,
              wrongTitle: null
            })
          })
          
        } else {
          //adding id to formData
        const formDataWithId = {...formData, id: new Date().toISOString()}
          dispatch(
            addPost(formDataWithId)
          ).unwrap().then((res)=> {
            console.log(res)
            setErrorForm(null)
            setFormData(initialState)
          })
          .catch(error => {
            console.log(error)
            setErrorForm({
              publishDate: null,
              wrongTitle: error.error
            })
          })
          // console.log(formDataWithId);
        }
        
    }

    //click cancel button
    const handleCancelEdit = () => {
      dispatch(cancelEditingPost())
      setFormData(initialState)
      setErrorForm(null)
    }

    return (
      <>
        <form onSubmit={handleSubmit } onReset={handleCancelEdit} className='m-3 p-3'>
          <div className='mb-3'>
            <label className={`form-label ${errorForm?.wrongTitle ? ' text-danger' : ' '}`}>
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
             {errorForm?.wrongTitle && (
              <p className='m-2 p-2 text-danger'>Lỗi nhập title không hợp lệ</p>
          )}
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
            <label className={`form-label 
              ${
                errorForm?.publishDate ? ' text-danger' : ' '
              }`
            }>
              Published
              date:{" "}

            </label>
            <input
              type='datetime-local'
              className={`form-control ${
                errorForm?.publishDate ? ' border border-warning text-danger focus' : ' '
              }`}
              aria-describedby='Date'
              required
              value={formData.publishDate}
              onChange={(event) => setFormData((prev) => ({ ...prev, publishDate: event.target.value}))}
            />
            
          </div>
          {errorForm?.publishDate && (
              <p className='m-2 p-2 text-danger'>Lỗi: không được nhập ngày trong quá khứ</p>
            )}
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
