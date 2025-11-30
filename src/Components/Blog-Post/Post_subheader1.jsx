import React from 'react'
import post1 from '../../assets/post1.png'

const Post_subheader1 = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 text-center">
        <img src={post1} alt="post image" className="w-full max-w-2xl h-auto mx-auto rounded" />
      </div>
    </section>
  )
}

export default Post_subheader1