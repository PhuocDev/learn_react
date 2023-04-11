/* eslint-disable prettier/prettier */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

export default function Blog() {
    

  return (
    <div>
        <CreatePost />
        <PostList />
    </div>
  )
}
