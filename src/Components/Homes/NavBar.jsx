import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null) // <-- fixed: no TS generic, valid ref object

  // prevent body scroll when mobile menu is open & close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // focus first link when menu opens
  useEffect(() => {
    if (open) {
      const first = menuRef.current?.querySelector('a,button')
      if (first && typeof first.focus === 'function') first.focus()
    }
  }, [open])

  // close when clicking outside the mobile menu
  useEffect(() => {
    const onClick = (e) => {
      if (!open) return
      const el = menuRef.current
      if (el && !el.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav className="relative bg-stone-950 fixed w-full top-0 left-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold mr-4">
              Finsweet
            </Link>

            {/* Desktop links (show on md+) */}
            <div className="hidden md:flex md:items-center md:space-x-3">
              <Link to="/home" target="_blank" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800">
                Home
              </Link>
              <Link to="/about" target="_blank" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800">
                About
              </Link>
              <Link to="/blog" target="_blank" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800">
                Blog
              </Link>
              <Link to="/sermons" target="_blank" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-800">
                Sermons
              </Link>
            </div>
          </div>

          {/* Right side: contact button (md+) + mobile toggle (top-right on small screens) */}
          <div className="flex items-center">
            <Link
              to="/contact"
              className="hidden md:inline-block bg-amber-300 text-black px-3 py-2 rounded-md font-semibold hover:bg-amber-400"
            >
              Contact
            </Link>

            {/* Mobile menu button placed at top-edge right on small screens */}
            <button
              type="button"
              className="ml-2 md:ml-4 p-2 rounded-md md:hidden absolute right-4 top-2 bg-transparent hover:bg-gray-800/40"
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((s) => !s)}
            >
              <span className="sr-only">Toggle navigation</span>
              {open ? (
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) - full width panel below top bar */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed left-0 right-0 top-16 z-40 transform transition-all duration-200 ease-in-out ${
          open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div className="bg-stone-950 border-t border-gray-800 shadow-sm">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              to="/home"
              onClick={close}
              className="block w-full text-left px-4 py-3 rounded-md text-base font-medium hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={close}
              className="block w-full text-left px-4 py-3 rounded-md text-base font-medium hover:bg-gray-800"
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={close}
              className="block w-full text-left px-4 py-3 rounded-md text-base font-medium hover:bg-gray-800"
            >
              Blog
            </Link>
            <Link
              to="/sermons"
              onClick={close}
              className="block w-full text-left px-4 py-3 rounded-md text-base font-medium hover:bg-gray-800"
            >
              Sermons
            </Link>

            <div className="pt-2">
              <Link
                to="/contact"
                onClick={close}
                className="block w-full text-center px-4 py-3 rounded-md bg-amber-300 text-black font-semibold hover:bg-amber-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar