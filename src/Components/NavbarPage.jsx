import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Image/aimc.png";

export default function NavbarPage() {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenus = () => {
    setCompanyOpen(false);
    setContactOpen(false);
    setMobileMenu(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 text-[#003049]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <img src={logo} alt="logo" className="w-28" />

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10 font-medium">
          <li>
            <Link to="/" onClick={closeMenus} className="hover:text-[#c1121f]">
              HOME
            </Link>
          </li>

          {/* COMPANY */}
          <li className="relative">
            <button
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center gap-1 hover:text-[#c1121f]"
            >
              OUR COMPANY
              <i
                className={`ri-arrow-down-s-line transition-transform ${
                  companyOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {companyOpen && (
              <div className="absolute left-0 top-full mt-3 w-48 bg-white rounded-lg shadow-lg py-2 border">
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
              className="hover:text-[#c1121f]"
            >
              BLOG
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              onClick={closeMenus}
              className="hover:text-[#c1121f]"
            >
              SERVICES
            </Link>
          </li>

          <li>
            <Link
              to="/news"
              onClick={closeMenus}
              className="hover:text-[#c1121f]"
            >
              NEWS
            </Link>
          </li>

          <li>
            <Link
              to="/gallery"
              onClick={closeMenus}
              className="hover:text-[#c1121f]"
            >
              GALLERY
            </Link>
          </li>

          <li>
            <Link
              to="/testimonials"
              onClick={closeMenus}
              className="hover:text-[#c1121f]"
            >
              TESTIMONIALS
            </Link>
          </li>

          {/* CONTACT */}
          <li className="relative">
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="flex items-center gap-1 hover:text-[#c1121f]"
            >
              CONTACT US
              <i
                className={`ri-arrow-down-s-line transition-transform ${
                  contactOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {contactOpen && (
              <div className="absolute left-0 top-full mt-3 w-48 bg-white rounded-lg shadow-lg py-2 border">
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

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden bg-white px-6 pb-6 space-y-4 border-t">
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
