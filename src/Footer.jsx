import { Link } from "react-router-dom";

// Import your badge images here!
import badgeFiction from "./assets/badge-fiction.png";
import badgeNonfiction from "./assets/badge-nonfiction.png";
import badgeMemoir from "./assets/badge-memoir.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider mb-2">
              Little Red Bird Publishing
            </h3>
            <p className="text-xs text-red-400 uppercase tracking-widest mb-4">
              Publish Without Fear
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Guiding writers and professionals to authorship through
              full-service self-publishing, developmental editing, and dedicated
              book coaching. Home to curated anthologies for bold voices.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 text-xs uppercase tracking-widest font-semibold">
            <span className="text-gray-500 font-bold mb-2">Navigation</span>
            <Link to="/" className="hover:text-red-400 transition-colors">
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-red-400 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-red-400 transition-colors"
            >
              Portfolio
            </Link>
            <Link to="/about" className="hover:text-red-400 transition-colors">
              About
            </Link>
            <Link
              to="/dark-speculations"
              className="hover:text-red-400 transition-colors"
            >
              Dark Speculations
            </Link>
            <Link
              to="/affiliates"
              className="hover:text-red-400 transition-colors"
            >
              Affiliates
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Connect / Socials */}
          <div className="flex flex-col gap-2 text-xs uppercase tracking-widest font-semibold">
            <span className="text-gray-500 font-bold mb-2">
              Where to Find Us
            </span>
            <a
              href="https://www.amazon.com/Robin-Nemesszeghy/e/B087TD99VS/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Amazon Author Page
            </a>
            <a
              href="https://www.youtube.com/channel/UCRv5k7UtNekKMSzUzWHEtXw/?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/littlebirdpeeps/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://robinnemesszeghy.medium.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Medium
            </a>
            <a
              href="https://www.linkedin.com/in/robin-nemesszeghy/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/robinnemesszeghypublishing"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="mailto:info@littleredbirdpublishing.com"
              className="hover:text-red-400 transition-colors"
            >
              Email Us
            </a>
          </div>

          {/* Certifications & Support */}
          <div className="flex flex-col gap-3 text-xs uppercase tracking-widest font-semibold">
            <span className="text-gray-500 font-bold mb-1">
              Book Coaching & Support
            </span>
            <div className="flex flex-col gap-1 text-[11px] text-gray-400 normal-case">
              <span className="font-semibold text-gray-300 uppercase tracking-wider text-[10px] mb-1">
                Author Accelerator Certified:
              </span>
              <a
                href="https://authoraccelerator.teachable.com/courses/certification-fiction?affcode=27214_kgd9mbva"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                Fiction Book Coach
              </a>
              <a
                href="https://authoraccelerator.teachable.com/courses/certification-nonfiction?affcode=27214_kgd9mbva"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                Nonfiction Book Coach
              </a>
              <a
                href="https://authoraccelerator.teachable.com/courses/certification-memoir?affcode=27214_kgd9mbva"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                Memoir Book Coach
              </a>
            </div>

            {/* BADGES ROW */}
            <div className="flex items-center gap-3 mt-1 mb-2">
              <a
                href="https://authoraccelerator.teachable.com/courses/certification-fiction?affcode=27214_kgd9mbva"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={badgeFiction}
                  alt="Certified Fiction Book Coach"
                  className="h-12 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://authoraccelerator.teachable.com/courses/certification-nonfiction?affcode=27214_kgd9mbva"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={badgeNonfiction}
                  alt="Certified Nonfiction Book Coach"
                  className="h-12 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="https://authoraccelerator.teachable.com/courses/certification-memoir?affcode=27214_kgd9mbva"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={badgeMemoir}
                  alt="Certified Memoir Book Coach"
                  className="h-12 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <a
                href="https://ko-fi.com/littleredbirdpublishing"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-red-800 text-white text-center py-2 px-3 rounded text-[11px] font-semibold hover:bg-red-700 transition tracking-wider shadow-sm"
              >
                Support Us on Ko-fi
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Little Red Bird Publishing. All rights
            reserved.
          </p>
          <p className="mt-2 sm:mt-0">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
