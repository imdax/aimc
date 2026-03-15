import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image/aimc-white.png";

export default function Navbar() {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenus = () => {
    setCompanyOpen(false);
    setContactOpen(false);
    setMobileMenu(false);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="AIMC Logo"
            className="h-18 sm:h-14 md:h-16 lg:h-36 xl:h-36 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10 font-medium">
          <li>
            <Link
              to="/"
              onClick={closeMenus}
              className="hover:text-[#e0e1dd] transition"
            >
              HOME
            </Link>
          </li>

          {/* COMPANY */}
          <li className="relative">
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center gap-1 hover:text-[#e0e1dd]"
            >
              OUR COMPANY
              <i
                className={`ri-arrow-down-s-line transition-transform ${
                  companyOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {companyOpen && (
              <div className="absolute left-0 top-full mt-4 w-48 bg-white text-black rounded-lg shadow-xl py-3">
                <Link
                  to="/about"
                  onClick={closeMenus}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  About Us
                </Link>

                <Link
                  to="/team"
                  onClick={closeMenus}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our Team
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/blog"
              onClick={closeMenus}
              className="hover:text-[#e0e1dd] transition"
            >
              BLOG
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              onClick={closeMenus}
              className="hover:text-[#e0e1dd] transition"
            >
              SERVICES
            </Link>
          </li>

          <li>
            <Link
              to="/news"
              onClick={closeMenus}
              className="hover:text-[#e0e1dd] transition"
            >
              NEWS
            </Link>
          </li>

          <li>
            <Link
              to="/gallery"
              onClick={closeMenus}
              className="hover:text-[#e0e1dd] transition"
            >
              GALLERY
            </Link>
          </li>

          <li>
            <Link
              to="/testimonials"
              onClick={closeMenus}
              className="hover:text-[#e0e1dd] transition"
            >
              TESTIMONIALS
            </Link>
          </li>

          {/* CONTACT */}
          <li className="relative">
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="flex items-center gap-1 hover:text-[#e0e1dd]"
            >
              CONTACT US
              <i
                className={`ri-arrow-down-s-line transition-transform ${
                  contactOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {contactOpen && (
              <div className="absolute left-0 top-full mt-4 w-48 bg-white text-black rounded-lg shadow-xl py-3">
                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden bg-black px-6 pb-6 space-y-4">
          <Link to="/" onClick={closeMenus} className="block">
            Home
          </Link>

          <Link to="/about" onClick={closeMenus} className="block">
            About Us
          </Link>

          <Link to="/team" onClick={closeMenus} className="block">
            Team
          </Link>

          <Link to="/services" onClick={closeMenus} className="block">
            Services
          </Link>

          <Link to="/blog" onClick={closeMenus} className="block">
            Blog
          </Link>

          <Link to="/news" onClick={closeMenus} className="block">
            News
          </Link>

          <Link to="/gallery" onClick={closeMenus} className="block">
            Gallery
          </Link>

          <Link to="/testimonials" onClick={closeMenus} className="block">
            Testimonials
          </Link>

          <Link to="/contact" onClick={closeMenus} className="block">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
