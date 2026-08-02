import { useState } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

// Import your local singing bird animation file
import singingBirdAnimation from "./assets/singing-bird.json";

// Import your centralized data files
import { booksData } from "./data/booksData";
import { testimonialsData } from "./data/testimonialsData"; // <-- This is the crucial new link!

export default function Home() {
  // Dynamically pull only the books marked as "isFeatured" from our data file
  const featuredBooks = booksData
    .filter((book) => book.isFeatured)
    .slice(0, 10);

  // Carousel State using the imported data
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1,
    );
  };

  return (
    <div className="flex flex-col grow">
      {/* 2-Column Hero Section */}
      <section className="bg-slate-50 py-16 px-6 sm:py-24 lg:px-8 border-b border-gray-200 overflow-hidden relative">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column: Text & Buttons */}
          <div className="text-center lg:text-left pointer-events-auto">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Publish Without <span className="text-red-800">Fear.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              We guide writers and busy professionals from rough drafts to
              published authors through full-service self-publishing,
              developmental editing, and dedicated book coaching.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link
                to="/services"
                className="rounded-md bg-red-800 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                to="/dark-speculations"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-800 transition-colors"
              >
                Submit to our Anthology <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Stack of Books & Bird Visual */}
          <div className="relative w-full max-w-md mx-auto aspect-square flex justify-center items-center z-30">
            <div className="absolute inset-0 bg-red-100/60 rounded-full blur-3xl w-3/4 h-3/4 m-auto z-0"></div>

            <div className="relative z-10 flex flex-col items-center justify-center drop-shadow-xl transform hover:scale-105 transition-transform duration-500">
              <div className="w-40 h-40 sm:w-56 sm:h-56 z-20 pointer-events-none -mb-6 sm:-mb-10">
                <Player
                  autoplay
                  loop
                  src={singingBirdAnimation}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-56 h-10 bg-red-800 rounded-r-md rounded-l-sm border-l-8 border-red-950 flex items-center px-4 text-white font-serif text-xs shadow-md transform -rotate-2">
                  <span className="truncate">The Author's Journey</span>
                </div>
                <div className="w-64 h-12 bg-slate-800 rounded-r-md rounded-l-sm border-l-8 border-slate-950 flex items-center justify-between px-4 text-slate-200 font-serif text-xs shadow-md transform rotate-1">
                  <span className="truncate">Craft & Structure</span>
                  <span className="text-[10px] text-slate-400">VOL. I</span>
                </div>
                <div className="w-72 h-14 bg-amber-900 rounded-r-md rounded-l-sm border-l-8 border-amber-950 flex items-center px-5 text-amber-100 font-serif text-sm shadow-lg transform -rotate-1">
                  <span className="font-semibold tracking-wide">
                    Mastering Developmental Editing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Author Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 mb-4">
              Meeting you exactly where you are in your writing journey.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200 text-xs font-semibold uppercase tracking-widest text-slate-700">
              <span className="w-2 h-2 rounded-full bg-red-800"></span>
              Author Accelerator Certified in Fiction, Nonfiction & Memoir
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-slate-50 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                Book Coaching
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed grow mb-6">
                For writers who need an architect. Get real-time feedback,
                structure strategy, and accountability while you write—or get
                expert guidance refining your pitch, proposal, and query letter
                for traditional publishing.
              </p>
              <Link
                to="/services"
                className="text-sm font-semibold text-red-800 hover:text-red-700 uppercase tracking-wider"
              >
                Learn More &rarr;
              </Link>
            </div>

            <div className="border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-slate-50 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-800"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                Developmental Editing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed grow mb-6">
                For the completed draft that needs a structural overhaul. We'll
                evaluate the big picture, fix pacing issues, and refine your
                narrative arc or core argument to ensure your manuscript is
                structurally sound before publication.
              </p>
              <Link
                to="/services"
                className="text-sm font-semibold text-red-800 hover:text-red-700 uppercase tracking-wider"
              >
                Learn More &rarr;
              </Link>
            </div>

            <div className="border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-slate-50 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                Full-Service Publishing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed grow mb-6">
                The complete "done-for-you" package. We take your manuscript
                through professional formatting, comprehensive copy editing, and
                final setup to launch you as a published author.
              </p>
              <Link
                to="/services"
                className="text-sm font-semibold text-red-800 hover:text-red-700 uppercase tracking-wider"
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio: Featured Books (Teaser) */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 border-t border-gray-200">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            A selection of the incredible stories we've had the honor of helping
            bring to the world.
          </p>

          {/* Featured Grid using real data */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
            {featuredBooks.map((book) => (
              <a
                key={book.id}
                href={book.amazonLink}
                target="_blank"
                rel="noreferrer"
                className="aspect-[2/3] rounded-md shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 border border-slate-200 bg-white block relative group"
                title={`View ${book.title} on Amazon`}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay on hover indicating it links out */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-widest px-3 py-1 border border-white/50 rounded-full backdrop-blur-sm">
                    View
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Button linking to dedicated Portfolio page */}
          <Link
            to="/portfolio"
            className="inline-block rounded-md bg-white border border-gray-300 px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors uppercase tracking-widest"
          >
            View All {booksData.length}+ Published Books
          </Link>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-red-800 to-red-950 text-white relative overflow-hidden">
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl">
              Testimonials
            </h2>
            <p className="mt-4 text-red-200 text-sm tracking-widest uppercase">
              Don't just take our word for it. Hear what our authors have to
              say.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* The Active Testimonial Card */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/5 p-8 sm:p-12 rounded-2xl border border-white/10 backdrop-blur-sm min-h-[300px]">
              {/* Headshot or Fallback Icon */}
              {testimonialsData[currentTestimonial].image ? (
                <img
                  src={testimonialsData[currentTestimonial].image}
                  alt={testimonialsData[currentTestimonial].name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-red-700 shadow-xl shrink-0"
                />
              ) : (
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-red-900 border-4 border-red-700 shadow-xl shrink-0 flex items-center justify-center text-3xl">
                  🖋️
                </div>
              )}

              <div className="text-center md:text-left flex-1">
                <blockquote className="text-lg sm:text-xl italic leading-relaxed text-red-50 mb-6 font-serif min-h-[120px]">
                  "{testimonialsData[currentTestimonial].quote}"
                </blockquote>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-lg font-bold tracking-wide">
                    {testimonialsData[currentTestimonial].name}
                  </span>
                  <span className="hidden md:inline text-red-400">|</span>
                  <span className="text-sm text-red-300 uppercase tracking-widest font-semibold">
                    {testimonialsData[currentTestimonial].role}
                  </span>
                </div>
                {/* 5-Star Rating */}
                <div className="text-amber-400 text-lg mt-3 flex justify-center md:justify-start gap-1">
                  ★★★★★
                </div>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Previous Testimonial"
              >
                &larr;
              </button>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-white w-4"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Next Testimonial"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
