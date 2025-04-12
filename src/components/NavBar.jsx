import { useState, useEffect } from "react";
import QuoteModal from "./QuoteModel"; // Assuming this component exists
import { Link } from "react-router-dom";
import { DropdownItem, Dropdown } from "./Dropdown"; // Assuming these exist and work
import logo from "../../public/images/logoPart.png"; // Adjust path if needed
import { FiChevronDown } from "react-icons/fi"; // Import chevron

const Navbar = ({ onToggleModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  useEffect(() => {
    /* ... scroll effect ... */
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    /* ... close menus on navigation ... */
    setMenuOpen(false);
    setProductsMenuOpen(false);
  }, []);

  const toggleProductsMenu = () => {
    setProductsMenuOpen(!productsMenuOpen);
  };

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-[#003229] shadow-md top-0" : "bg-transparent top-10"
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ... Logo (unchanged) ... */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Logo Symbol" className="h-12" />
            <span className="font-varela text-5xl font-bold text-zinc-200 ml-2">
              Termitrack
            </span>
          </Link>
          {/* ... Desktop Navigation Links (unchanged) ... */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-[#FBBF24] transition px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <div className="relative">
              <Dropdown label="Products">
                <DropdownItem label="Tracker Only" to="/product/TrackerOnly" />
                <DropdownItem
                  label="iTracker-Base"
                  to="/product/iTrackerBase"
                />
                <DropdownItem label="iTracker-Pro" to="/product/iTrackerPro" />
              </Dropdown>
            </div>
            {/* <Link to="/about" className="text-white hover:text-[#FBBF24] transition px-3 py-2 rounded-md text-sm font-medium">About Us</Link> */}
            <a
              href="#contact"
              className="text-white hover:text-[#FBBF24] transition px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </a>
          </div>
          {/* ... Desktop CTA Button (Removed) ... */}
          {/* ... Mobile Menu Button (unchanged) ... */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white hover:text-[#FBBF24] focus:outline-none p-2"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen /* Overlay */ && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[59]"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#003229] text-white transform transition-transform duration-300 ease-in-out shadow-lg z-[60] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-[#FBBF24] focus:outline-none p-1"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Drawer Navigation */}
        <nav className="flex flex-col space-y-1 p-4 overflow-y-auto h-[calc(100vh-5rem)]">
          <Link
            to="/"
            className="block py-2.5 px-3 rounded hover:bg-gray-700 hover:text-[#FBBF24] transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* --- Collapsible Products Section (Styled like dropdown) --- */}
          <div>
            <button
              onClick={toggleProductsMenu}
              className="w-full flex justify-between items-center py-2.5 px-3 rounded hover:bg-gray-700 hover:text-[#FBBF24] transition text-left font-medium" // Added font-medium
            >
              <span>Products</span>
              <FiChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  productsMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Conditionally rendered product links container */}
            {/* Added styling to make it look like a sub-menu block */}
            {productsMenuOpen && (
              <div className="ml-4 mt-1 pl-2 py-1 border-l-2 border-gray-600 space-y-1 bg-gray-800/30 rounded-r-md">
                {" "}
                {/* Styling for sub-menu block */}
                <Link
                  to="/product/TrackerOnly"
                  className="block py-1.5 px-3 rounded hover:bg-gray-700 hover:text-[#FBBF24] transition text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Tracker Only
                </Link>
                <Link
                  to="/product/iTrackerBase"
                  className="block py-1.5 px-3 rounded hover:bg-gray-700 hover:text-[#FBBF24] transition text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  iTracker-Base
                </Link>
                <Link
                  to="/product/iTrackerPro"
                  className="block py-1.5 px-3 rounded hover:bg-gray-700 hover:text-[#FBBF24] transition text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  iTracker-Pro
                </Link>
              </div>
            )}
          </div>
          {/* --- End Collapsible Products Section --- */}

          {/* <Link to="/about" className="block py-2.5 px-3 rounded hover:bg-gray-700 hover:text-[#FBBF24] transition" onClick={() => setMenuOpen(false)}>About Us</Link> */}
          <a
            href="#contact"
            className="block py-2.5 px-3 rounded hover:bg-gray-700 hover:text-[#FBBF24] transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
          {/* Quote Button Removed */}
        </nav>
      </div>

      {/* Modal rendering handled in App.jsx */}
    </nav>
  );
};
export default Navbar;
