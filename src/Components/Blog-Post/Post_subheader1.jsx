import React from 'react'
import post1Src from '../../assets/post1.png?w=480;768;1024&format=avif;webp&as=srcset'
import post1Fallback from '../../assets/post1.png?w=1024&format=png&as=src'

const Post_subheader1 = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 text-center">
        <picture>
          <source type="image/avif" srcSet={post1Src.avif} />
          <source type="image/webp" srcSet={post1Src.webp} />
          <img src={post1Fallback} alt="post image" className="w-full max-w-2xl h-auto mx-auto rounded" />
        </picture>
      </div>
    </section>
  )
}

export default Post_subheader1