import React from 'react'

const Blog_subheader2 = () => {
  return (
    <div className="w-full text-black bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="uppercase font-bold text-3xl sm:text-4xl">all blog posts</h2>
        </div>

        {/* first row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <article className="bg-amber-200 rounded-md p-6 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase text-amber-600">relationship</p>
            <h3 className="font-bold text-xl sm:text-2xl mt-2 uppercase">THE BEST WAY TO<br/>INSPIRE PEOPLE</h3>
            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit,</p>
              <p>sed do eiusmod tempor incididunt,</p>
              <p>ut labore et dolore magna aliqua.</p>
            </div>
            <p className="mt-4 text-xs uppercase text-gray-600">by mathew johnson</p>
            <p className="text-xs text-gray-600">Tuesday 13 May, 2021</p>
            <div className="bg-amber-300 h-1 w-16 mt-4 rounded" />
          </article>

          <article className="bg-amber-200 rounded-md p-6 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase text-amber-600">relationship</p>
            <h3 className="font-bold text-xl sm:text-2xl mt-2 uppercase">HOW TO SHOW<br/>COMPASSION</h3>
            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit,</p>
              <p>sed do eiusmod tempor incididunt,</p>
              <p>ut labore et dolore magna aliqua.</p>
            </div>
            <p className="mt-4 text-xs uppercase text-gray-600">by mathew johnson</p>
            <p className="text-xs text-gray-600">Tuesday 13 May, 2021</p>
          </article>

          <article className="bg-amber-200 rounded-md p-6 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase text-amber-600">relationship</p>
            <h3 className="font-bold text-xl sm:text-2xl mt-2 uppercase">THE BIBLICAL<br/>PURPOSE OF MONEY</h3>
            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit,</p>
              <p>sed do eiusmod tempor incididunt,</p>
              <p>ut labore et dolore magna aliqua.</p>
            </div>
            <p className="mt-4 text-xs uppercase text-gray-600">by mathew johnson</p>
            <p className="text-xs text-gray-600">Tuesday 13 May, 2021</p>
          </article>

          <article className="bg-amber-200 rounded-md p-6 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase text-amber-600">relationship</p>
            <h3 className="font-bold text-xl sm:text-2xl mt-2 uppercase">THE BEST WAY TO<br/>INSPIRE PEOPLE</h3>
            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit,</p>
              <p>sed do eiusmod tempor incididunt,</p>
              <p>ut labore et dolore magna aliqua.</p>
            </div>
            <p className="mt-4 text-xs uppercase text-gray-600">by mathew johnson</p>
            <p className="text-xs text-gray-600">Tuesday 13 May, 2021</p>
          </article>
        </div>

        {/* second row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <article className="bg-amber-200 rounded-md p-6 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase text-amber-600">relationship</p>
            <h3 className="font-bold text-xl sm:text-2xl mt-2 uppercase">WHAT IT MEANS TO<br/>BE A DISCIPLE</h3>
            <div className="mt-3 text-sm text-gray-700">
              <p>We both celebrate and challenge the</p>
              <p>culture around us as we orient our</p>
              <p>lives around Jesus. We want</p>
            </div>
            <p className="mt-4 text-xs uppercase text-gray-600">by mathew johnson</p>
            <p className="text-xs text-gray-600">Tuesday 13 May, 2021</p>
          </article>

          <article className="bg-amber-200 rounded-md p-6 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase text-amber-600">relationship</p>
            <h3 className="font-bold text-xl sm:text-2xl mt-2 uppercase">WHAT IT MEANS TO<br/>BELIEVE</h3>
            <div className="mt-3 text-sm text-gray-700">
              <p>We both celebrate and challenge the</p>
              <p>culture around us as we orient our</p>
              <p>lives around Jesus. We want</p>
            </div>
            <p className="mt-4 text-xs uppercase text-gray-600">by mathew johnson</p>
            <p className="text-xs text-gray-600">Tuesday 13 May, 2021</p>
          </article>

          <article className="bg-amber-200 rounded-md p-6 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase text-amber-600">relationship</p>
            <h3 className="font-bold text-xl sm:text-2xl mt-2 uppercase">THE MODERN CHURCH<br/>IN 2022</h3>
            <div className="mt-3 text-sm text-gray-700">
              <p>We both celebrate and challenge the</p>
              <p>culture around us as we orient our</p>
              <p>lives around Jesus. We want</p>
            </div>
            <p className="mt-4 text-xs uppercase text-gray-600">by mathew johnson</p>
            <p className="text-xs text-gray-600">Tuesday 13 May, 2021</p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Blog_subheader2