import { Link } from "react-router-dom";
import logoSymbol from "./assets/logo-symbol.png";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
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

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 text-xs font-semibold tracking-widest text-gray-700 uppercase">
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
    </header>
  );
}
