import React from 'react'

const Blog_subheader1 = () => {
  return (
    <div className="block justify-center h-screen w-full bg-gray-100 text-black">
      <div className="pt-35">
        <p className="text-xs uppercase pl-160">our blog</p>
        <div className="item-center pt-5">
          <h2 className="uppercase font-bold text-4xl pl-120">most recent post</h2>
          <div className="pt-10 text-left bg-white flex item-center w-270 h-90 ml-30 mt-15">
            <div>
                <img src="src/assets/blog1.png" alt="image1"  className="w-90 h-70 ml-15"/>
            </div>
            <div className="item-center ml-10 pb-5">
                <div className="flex text-xs uppercase font-light">
                    <p className="mr-80"> tuesday 13 may,2022</p>
                    <p>by john hunau deo</p>
                </div>
                <h3 className="uppercase font-bold text-3xl pt-5 pb-2">church was doing what he often</h3>
                <h3 className="uppercase font-bold text-3xl">did when dropped an oracle</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog_subheader1