import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#003049] to-[#0d1b2a] text-white pt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-20">
        {/* LEFT SECTION */}
        <div>
          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_placeholder.svg/512px-Logo_placeholder.svg.png"
              alt="logo"
              className="w-16"
            />

            <div>
              <h3 className="text-xl font-semibold leading-tight">
                PELOTON
                <br />
                WORKREADY
              </h3>

              <p className="text-xs text-gray-400">TRANSFORMING LIVES</p>
            </div>
          </div>

          <p className="mt-8 text-gray-300 leading-relaxed max-w-[320px]">
            Your trusted partner in Australian Migration. Led by Dr. Lidia Paul
            (MARN 0957235). We provide expert guidance and personalized
            solutions to navigate the complexities of Australian migration.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Quicklinks</h3>

          <ul className="space-y-4 text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white transition">
                • About Us
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-white transition">
                • Our Services
              </Link>
            </li>

            <li>
              <Link to="/team" className="hover:text-white transition">
                • Our Team
              </Link>
            </li>

            <li>
              <Link to="/testimonials" className="hover:text-white transition">
                • Testimonial
              </Link>
            </li>

            <li>
              <Link to="/blog" className="hover:text-white transition">
                • Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT + MAP */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

          <p className="text-gray-300 mb-4">+61 414 873 868</p>

          <p className="text-gray-300 mb-4">lidiapaul@hotmail.com</p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            8B/9 Futura Road, Keysborough VIC 3173, Australia
          </p>

          {/* GOOGLE MAP */}
          <div className="w-full h-[200px] rounded-lg overflow-hidden border border-white/10">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=8B/9%20Futura%20Road%20Keysborough%20VIC%203173%20Australia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-xl text-gray-400">
            <a
              href="https://www.facebook.com/AIMCAustralianVisas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="ri-facebook-fill text-2xl"></i>
            </a>

            <a
              href="https://www.instagram.com/aimc.australia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <i className="ri-instagram-line text-2xl"></i>
            </a>
          </div>

          {/* COPYRIGHT */}
          <p className="text-gray-400 text-sm">
            2026 | Designed & Developed by Imdadul Hussain
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
