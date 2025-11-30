import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-black text-white w-full">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand / Contact */}
          <div className="min-w-0 flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
            <h3 className="font-semibold text-2xl text-amber-300">Finsweet</h3>
            <p className="text-xs sm:text-sm text-gray-300">© 2021 Finsweet</p>

            <div className="text-sm sm:text-base text-gray-300 break-words whitespace-normal">
              <p>Phone: <a href="tel:+14805550103" className="hover:text-white"> (480) 555-0103</a></p>
              <address className="not-italic">4517 Washington Ave.</address>
              <a
                href="mailto:finsweet@example.com"
                className="inline-block mt-1 text-sm text-gray-300 hover:text-white break-words"
              >
                finsweet@example.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" className="min-w-0 text-center sm:text-left">
            <h4 className="font-semibold uppercase text-sm sm:text-xs mb-2">Quicklinks</h4>
            <ul className="mt-2 space-y-2 text-sm sm:text-base">
              <li><Link to="/home" target="_blank" className="block py-2 px-1 text-gray-300 hover:text-black hover:bg-amber-300 hover:rounded-md hover:w-15 hover:font-bold">Home</Link></li>
              <li><Link to="/about" target="_blank" className="block py-2 px-1 text-gray-300 hover:text-black hover:bg-amber-300 hover:rounded-md hover:w-20 hover:font-bold">About us</Link></li>
              <li><Link to="/contact" target="_blank" className="block py-2 px-1 text-gray-300 hover:text-black hover:bg-amber-300 hover:rounded-md hover:w-25 hover:font-bold">Contact us</Link></li>
              <li><Link to="/sermons" target="_blank" className="block py-2 px-1 text-gray-300 hover:text-black hover:bg-amber-300 hover:rounded-md hover:w-20 hover:font-bold">Sermons</Link></li>
              <li><Link to="/events" target="_blank" className="block py-2 px-1 text-gray-300 hover:text-black hover:bg-amber-300 hover:rounded-md hover:w-15 hover:font-bold">Events</Link></li>
              <li><Link to="/blog" target="_blank" className="block py-2 px-1 text-gray-300 hover:text-black hover:bg-amber-300 hover:rounded-md hover:w-10 hover:font-bold">Blog</Link></li>
              <li><Link to="/post" target="_blank" className="block py-2 px-1 text-gray-300 hover:text-black hover:bg-amber-300 hover:rounded-md hover:w-10 hover:font-bold">post</Link></li>
            </ul>
          </nav>

          {/* Social / Connect */}
          <div className="min-w-0 flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
            <h4 className="font-semibold uppercase text-sm sm:text-xs mb-1">Connect</h4>
            <p className="text-sm sm:text-base text-gray-300">Follow us on social media</p>

            <div className="flex items-center justify-center sm:justify-start space-x-4">
              <a href="#" aria-label="Facebook" className="inline-block">
                <img src="src/assets/Facebook.svg" alt="Facebook" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" aria-label="Twitter" className="inline-block">
                <img src="src/assets/Twitter.svg" alt="Twitter" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-block">
                <img src="src/assets/Linkedin.svg" alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          {/* Subscribe */}
          <div className="min-w-0 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
            <h4 className="font-bold text-lg uppercase">Subscribe</h4>
            <p className="text-sm text-gray-300">Get latest updates and news</p>

            <form
              className="w-full"
              onSubmit={(e) => {
                e.preventDefault();
                // wire to newsletter handler
              }}
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <input
                  id="footer-email"
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="yourmail@gmail.com"
                  className="w-full px-3 py-2 rounded border border-gray-700 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 bg-amber-300 text-black font-semibold rounded hover:bg-amber-400"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-xs sm:text-sm text-gray-400">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">Designed by Finsweet — All rights reserved.</div>
            <div className="text-center sm:text-right">Privacy · Terms</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;