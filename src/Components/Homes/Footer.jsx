import React from 'react'
import { Link, Links } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="block justify-center h-70 w-full bg-black text-white">
      <div className="pt-10 flex">
        <div className="text-left pl-25 pr-25 uppercase">
          <h3 className="font-semibold text-3xl text-amber-300 pb-5">Finsweet</h3>
          <p className="text-xs font-light">@ copyright 2021 Finsweet</p>
          <p className="text-sm font-light pt-10">(480) 555-0103</p>
          <p className="text-sm font-light pt-5">4517 washington ave.</p>
          <p className="text-sm font-light pt-5">finsweet@example.com</p>
        </div>
        <div className="text-left pl-25 pr-15 uppercase">
          <h4 className="font-semibold">quicklinks</h4>
          <p className="text-sm font-light pt-5">about us</p>
          <p className="text-sm font-light pt-5">sermons</p>
          <p className="text-sm font-light pt-5">events</p>
          <p className="text-sm font-light pt-5">blog</p>
        </div>
        <div className="text-left pr-15">
          <h3 className="font-semibold">connect</h3>
          <div className="pt-5 flex">
            <Link target="_blank" to ="*">
              <img src="src/assets/Facebook.svg" alt="facebook icon" className="pr-5"/>
            </Link>
            <Link target="_blank" to ="*">
              <img src="src/assets/Twitter.svg" alt="twitter icon" className="pr-5"/>
            </Link>
            <Link target="_blank" to ="*">
              <img src="src/assets/Linkedin.svg" alt="linkedin icon" className="pr-5"/>
            </Link>
          </div>
        </div>
        <div className="text-left pr-20">
          <h2 className="font-bold text-3xl uppercase">subscribe to get latest</h2>
          <h2 className="font-bold text-3xl pb-5 uppercase">updates and news</h2>
          <div>
            <label className="font-light text-white">
              <input required autoComplete="email" className="w-70 h-10 border-white rounder" type="email" name="email or number" placeholder="Yourmail@gmail.com" />
            </label>
            <button className="bg-orange-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded hover:text-gray-300 hover:font-bold hover:rounded hover:bg-gray-800 hover-pr-2 hover-pl-2">
              <Link target="_blank" to="*" className="uppercase">subscribe</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer