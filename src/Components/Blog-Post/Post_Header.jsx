import React from 'react'

const Post_Header = () => {
  return (
    <div className="flex justify-center h-auto w-full">
      <div className="pt-25 text-center">
        <p className="text-xs uppercase text-amber-400 font-semibold">relationship</p>
        <h2 className="pt-5 uppercase font-bold text-4xl">how to show compassion</h2>
        <div className="pt-7 flex text-xs font-semibold">
          <p className="pr-5 pl-40">13 May, 2018</p>
          <p>By Matthew Johnson</p>
        </div>
      </div>
    </div>    
  )
}

export default Post_Header