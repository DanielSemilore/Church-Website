import React, { useState } from 'react'
import bgHeader from '../../assets/bg.jpg'

const Header = () => {
  const [showText, setShowText] = useState(false)

  return (
    <div className="relative bg-center bg-cover min-h-screen w-full" style={{ backgroundImage: `url(${bgHeader})` }}>
      {/* dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <header className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Left / main content: full width on small, 3/4 on md+ */}
          <div className="w-full md:w-3/4 text-white">
            <p className="text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3">Welcome to Our Church</p>

            <h1
              className="font-extrabold leading-tight mb-4"
              style={{ fontSize: 'clamp(1.5rem, 5vw, 3.75rem)', lineHeight: 1.05 }}
            >
              <span className="block">Become a part of</span>
              <span className="block">our community</span>
            </h1>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <button
                  onClick={() => setShowText(!showText)}
                  className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 bg-amber-300 text-black font-semibold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  aria-expanded={showText}
                >
                  {showText ? 'See less' : 'Learn more'}
                </button>

                <a
                  href="/contact"
                  className="mt-3 sm:mt-0 inline-block px-4 py-2 bg-white/90 text-stone-900 font-semibold rounded-md shadow-sm hover:opacity-95"
                >
                  Get in touch
                </a>
              </div>

              {showText && (
                <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-full bg-black/20 p-4 rounded break-words">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, aliquid vel quam adipisci nesciunt
                  perferendis officiis totam est cum sapiente unde, blanditiis, dolorum nobis. Expedita corporis quasi
                  pariatur numquam! Fugiat.
                </p>
              )}

              <div className="mt-2 text-xs sm:text-sm">
                <p className="font-semibold">- Lorem ipsum dolor sit amet consectetur,</p>
                <p className="pl-1">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>

          {/* Right-side area: stacks under main on small screens, visible on all but adapts size */}
          <div className="w-full md:w-1/4 flex-shrink-0">
            {/* Use responsive content that never overflows width */}
            <div className="bg-white/5 p-4 rounded backdrop-blur-sm">
              {/* Example callout: scales to width, text wraps */}
              <h3 className="text-lg font-bold text-white mb-2">Join us this Sunday</h3>
              <p className="text-sm text-white/90 mb-3">10:00 AM • Family service • All welcome</p>
              <a
                href="/events"
                className="inline-block px-3 py-2 bg-amber-300 text-black rounded-md font-medium"
              >
                See events
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header