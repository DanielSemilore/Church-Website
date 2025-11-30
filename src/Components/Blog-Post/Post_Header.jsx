import React from 'react'

const Post_Header = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs uppercase text-amber-400 font-semibold">relationship</p>
        <h2 className="mt-3 uppercase font-bold text-2xl sm:text-3xl md:text-4xl">how to show compassion</h2>

        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 text-xs font-semibold text-gray-700">
          <time className="">13 May, 2018</time>
          <span className="">By Matthew Johnson</span>
        </div>
      </div>
    </section>
  )
}

export default Post_Header