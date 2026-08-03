import { useState } from "react";
import { Link } from "react-router-dom";
import logoSymbol from "./assets/logo-symbol.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          onClick={closeMenu}
        >
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
            <img
              src={logoSymbol}
              alt="Little Red Bird Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wider text-gray-900 uppercase leading-none">
              Little Red Bird
            </span>
            <span className="text-xs tracking-widest text-red-800 uppercase font-sans mt-1">
              Publishing
            </span>
          </div>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest text-gray-700 uppercase">
          <Link
            to="/"
            className="hover:text-red-800 transition-colors no-underline text-gray-700"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-red-800 transition-colors no-underline text-gray-700"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            className="hover:text-red-800 transition-colors no-underline text-gray-700"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="hover:text-red-800 transition-colors no-underline text-gray-700"
          >
            About
          </Link>
          <Link
            to="/dark-speculations"
            className="hover:text-red-800 transition-colors no-underline text-gray-700"
          >
            Dark Speculations
          </Link>
          <Link
            to="/affiliates"
            className="hover:text-red-800 transition-colors no-underline text-gray-700"
          >
            Affiliates
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-800 transition-colors no-underline text-gray-700"
          >
            Contact
          </Link>

          <a
            href="https://www.youtube.com/channel/UCRv5k7UtNekKMSzUzWHEtXw/?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-800 transition-colors no-underline text-gray-700"
          >
            YouTube
          </a>
          <a
            href="https://medium.com/@robinnemesszeghy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-800 transition-colors no-underline text-gray-700"
          >
            Medium
          </a>
        </nav>
      </div>

      {/* Mobile Navigation Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-md py-4 px-6 flex flex-col gap-6 text-xs font-semibold tracking-widest text-gray-700 uppercase overflow-y-auto max-h-[calc(100vh-5rem)]">
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-red-800 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className="hover:text-red-800 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            onClick={closeMenu}
            className="hover:text-red-800 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="hover:text-red-800 transition-colors"
          >
            About
          </Link>
          <Link
            to="/dark-speculations"
            onClick={closeMenu}
            className="hover:text-red-800 transition-colors"
          >
            Dark Speculations
          </Link>
          <Link
            to="/affiliates"
            onClick={closeMenu}
            className="hover:text-red-800 transition-colors"
          >
            Affiliates
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="hover:text-red-800 transition-colors"
          >
            Contact
          </Link>
          <div className="h-px bg-gray-100 w-full my-2"></div>
          <a
            href="https://www.youtube.com/channel/UCRv5k7UtNekKMSzUzWHEtXw/?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-800 transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://medium.com/@robinnemesszeghy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-800 transition-colors"
          >
            Medium
          </a>
        </div>
      )}
    </header>
  );
}
