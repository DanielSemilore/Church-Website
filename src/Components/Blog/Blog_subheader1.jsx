import React from 'react'
import {useState, useEffect} from 'react'

const Blog_subheader1 = () => {

    const [showText, setShowText] = useState(false);

  return (
    <div className="block justify-center h-screen w-full bg-gray-100 text-black">
      <div className="pt-35 bg-gray-100">
        <p className="text-xs uppercase pl-160">our blog</p>
        <div className="item-center pt-5">
          <h2 className="uppercase font-bold text-4xl pl-120">most recent post</h2>
          <div className="pt-10 text-left bg-white flex item-center w-280 h-auto ml-20 mt-15">
            <div>
                <img src="src/assets/blog1.png" alt="image1"  className="w-100 h-80 mb-10 ml-15"/>
            </div>
            <div className="item-center ml-10 pb-5">
                <div className="flex text-xs uppercase font-light">
                    <p className="mr-80"> tuesday 13 may,2022</p>
                    <p>by john hunau deo</p>
                </div>
                <h3 className="uppercase font-bold text-3xl pt-5 pb-2">church was doing what he often</h3>
                <h3 className="uppercase font-bold text-3xl pb-5">did when dropped an oracle</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, aliquid vel quam</p>
                <p>perferendis officiis totam est cum sapiente unde, blanditiis, dolorum nobis. Expedita</p>
                <p>pariatur numquam! Eius, tenetur, et numquam eaque officiis sequi ab consequuntur,</p>
                <p className="pb-5">minima earum molestiae omnis incidunt rem veritatis dolorum. Fugiat.</p>
                <div>
                    <button onClick={() => setShowText(!showText)} className="bg-orange-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded hover:text-gray-300 hover:font-bold hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2 font-bold pt-2 pb-2">
                        {showText ? 'see less' : 'Learn more'}
                    </button>
                    {showText && 
                        <div className="text-3xl font-light mb-6">
                            <p>Lorem ipsum dolor sit, amet </p>
                            <p>consectetur adipisicing elit. Tempora, aliquid</p>
                            <p> vel quam adipisci nesciunt </p>
                            <p>perferendis officiis totam est cum</p>
                            <p> sapiente unde, blanditiis, dolorum nobis.</p> 
                            <p>Expedita corporis quasi</p>
                            <p>pariatur numquam! Eius, tenetur, et </p>
                            <p>numquam eaque officiis sequi ab</p> 
                            <p>consequuntur dicta tempore error, minima</p>
                            <p>earum molestiae omnis incidunt rem</p>
                            <p>veritatis dolorum. Fugiat.</p>
                            <p>minima earum molestiae omnis incidunt</p>
                            <p>rem veritatis dolorum. Fugiat.</p>
                        </div>
                    }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog_subheader1