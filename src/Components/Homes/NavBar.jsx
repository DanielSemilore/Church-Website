import React from 'react'
import { Link, Links } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="bg-stone-950 fixed w-full top-0 left-0 z-10 text-white h-15">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-full">
            <span className="text-40px text-2xl font-bold pl-10 pr-10 pt-2.5 pb-2.5 h-15 pr-4 border-r-1">Finsweet</span>
            <div className="text-1xl uppercase font-small pl-20 text-16px">
                <nav>
                    <Link to ="/home" className="hover:font-bold hover:text-2xl hover:text-gray-300 pr-2 pl-2 hover:rounded hover:bg-gray-800">Home</Link>
                    <Link target="_blank" to ="/about" className="hover:font-bold hover:text-2xl hover:text-gray-300 pr-2 pl-2 hover:rounded hover:bg-gray-800">About us</Link>
                    <Link target="_blank" to ="/blog" className="hover:font-bold hover:text-2xl hover:text-gray-300 pr-2 pl-2 rounded hover:bg-gray-800">Blog</Link>
                    <Link target="_blank" to ="/sermons" className="hover:font-bold hover:text-2xl hover:text-gray-300 pr-2 pl-2 rounded hover:bg-gray-800">Sermons</Link>
                </nav>
            </div>
            <div className="ml-auto pr-15">
                <button className="bg-orange-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded hover:text-gray-300 hover:font-bold hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2">
                    <Link target="_blank" to="/contact" className="">Contact us</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar