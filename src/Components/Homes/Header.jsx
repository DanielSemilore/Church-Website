import React from 'react'
import {useState, useEffect} from 'react'

const Header = () => {

    const [showText, setShowText] = useState(false);

  return (
    <div className="bg-[url('/src/assets/bg.jpg')] bg-cover bg-center h-screen w-full">
        <header className="flex justify-between items-center p-4">
            <div className="flex flex-col uppercase items-left pt-30 pl-10 justify-center h-full text-left text-white px-4">
                <h1 className="text-3xl font-bold mb-10">Welcome to Our Church</h1>
                <p className="text-6xl font-bold mb-4">Become a part of </p>
                <p className="text-6xl font-bold mb-20">our community</p>
                <div>
                    <button onClick={() => setShowText(!showText)} className="bg-orange-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded hover:text-gray-300 hover:font-bold hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2 font-bold pt-2 pb-2">
                        {showText ? 'see less' : 'Learn more'}
                    </button>
                    {showText && 
                        <p className="text-4xl font-bold mb-6">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, aliquid vel quam adipisci nesciunt 
                            perferendis officiis totam est cum sapiente unde, blanditiis, dolorum nobis. Expedita corporis quasi 
                            pariatur numquam! Eius, tenetur, et numquam eaque officiis sequi ab consequuntur dicta tempore error, 
                            minima earum molestiae omnis incidunt rem veritatis dolorum. Fugiat.
                        </p>
                    }
                </div>
                <p className="font-semibold mt-30 mb-1">- Lorem ipsum dolor sit amet consectetur,</p>
                <p className="pl-3 font-semibold mb-6">Lorem ipsum dolor sit.</p>
            </div>
        </header>  
    </div>
  )
}

export default Header