import { useState } from "react";
import { booksData } from "./data/booksData";

export default function Portfolio() {
  // State to track which filter is currently active
  const [activeFilter, setActiveFilter] = useState("All");

  // Dynamically generate the list of unique genres from our data file
  const uniqueGenres = ["All", ...new Set(booksData.map((book) => book.genre))];

  // Filter logic: If "All" is selected, show everything. Otherwise, match the genre.
  const filteredBooks =
    activeFilter === "All"
      ? booksData
      : booksData.filter((book) => book.genre === activeFilter);

  return (
    <div className="flex flex-col grow bg-white">
      {/* Page Header - Now full height with bouncing arrow */}
      <section className="bg-slate-50 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20 px-6 border-b border-gray-200 text-center relative">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Our Published Books
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Browse the diverse collection of stories and expertise we've had the
            distinct honor of helping bring into the world.
          </p>
        </div>

        {/* Bouncing Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a
            href="#book-grid"
            className="flex flex-col items-center text-gray-400 hover:text-red-800 transition-colors animate-bounce"
          >
            <span className="text-xs uppercase tracking-widest font-semibold mb-2">
              Browse the Books
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Portfolio Grid & Filters */}
      <section
        id="book-grid"
        className="py-16 px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-20"
      >
        {/* Interactive Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {uniqueGenres.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeFilter === category
                  ? "bg-red-800 text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* The Book Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {filteredBooks.map((book) => (
            <a
              key={book.id}
              href={book.isComingSoon ? undefined : book.amazonLink}
              target={book.isComingSoon ? undefined : "_blank"}
              rel={book.isComingSoon ? undefined : "noreferrer"}
              className={`flex flex-col group ${
                book.isComingSoon ? "cursor-default" : "cursor-pointer"
              }`}
              title={
                book.isComingSoon
                  ? "Coming Soon"
                  : `View ${book.title} on Amazon`
              }
            >
              {/* Cover Image Wrapper */}
              <div className="aspect-[2/3] bg-slate-200 rounded-md overflow-hidden shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 border border-slate-200 relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />

                {/* Coming Soon Badge */}
                {book.isComingSoon && (
                  <div className="absolute top-2 right-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest border border-slate-700 shadow-sm">
                    Oct 2026
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 border border-white/50 rounded-full">
                    {book.isComingSoon ? "Coming Soon" : "View on Amazon"}
                  </span>
                </div>
              </div>

              {/* Book Info */}
              <div className="mt-4 text-center">
                <h3 className="font-serif font-bold text-gray-900 text-sm leading-snug px-1 mb-1">
                  {book.title}
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-red-800 font-semibold block">
                  {book.genre}
                </span>
                <span className="text-[10px] text-gray-500 block mt-0.5">
                  by {book.author}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Fallback if a filter yields no results */}
        {filteredBooks.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No books found in this category yet.
          </div>
        )}
      </section>
    </div>
  );
}
