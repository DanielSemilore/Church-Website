import React from 'react'

const Footer = () => {
  return (
    <div className="block justify-center h-50 w-full bg-black mt-35 text-white">
      <div className="pt-10 flex">
        <div className="text-left pl-25 pr-25">
          <h3 className="font-semibold text-3xl text-amber-300 pb-5">Finsweet</h3>
          <p className="text-xs font-light">@ copyright 2021 Finsweet</p>
          <p className="text-sm font-light pt-5">(480) 555-0103     </p>
        </div>
        <div className="text-left pl-25 pr-10"></div>
        <div className="text-left pr-20"></div>
      </div>
    </div>
  )
}

export default Footer