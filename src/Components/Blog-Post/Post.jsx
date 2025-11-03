import React from 'react'
import NavBar from '../Homes/NavBar'
import Post_Header from './Post_Header'
import Post_subheader1 from './Post_subheader1'
import Post_subheader2 from './Post_subheader2'
import Footer from '../Homes/Footer';

const Post = () => {
  return (
    <div>      
      <NavBar />
      <Post_Header />
      <Post_subheader1 />
      <Post_subheader2 />
      <Footer />
    </div>
  )
}

export default Post