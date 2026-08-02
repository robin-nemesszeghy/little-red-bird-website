import { useState } from "react";
import { Link } from "react-router-dom";
import badgeFiction from "./assets/badge-fiction.png";
import badgeNonfiction from "./assets/badge-nonfiction.png";
import badgeMemoir from "./assets/badge-memoir.png";
import robinHeadshot from "./assets/headshots/robin.png";

import { testimonialsData } from "./data/testimonialsData";

export default function About() {
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
    <div className="flex flex-col grow bg-white">
      {/* Hero Section - Now full height with Start Here arrow */}
      <section className="relative bg-slate-900 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-32 px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Hero+Background')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl mb-6">
            Professional Editorial & Creative Book Publishing Services
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            I'm a certified book coach & developmental editor helping
            professionals, authors, and influencers who want to write a book but
            lack the time and structure to bring their vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="rounded-md bg-white text-slate-900 px-8 py-3.5 text-sm font-semibold shadow-sm hover:bg-gray-100 transition-colors uppercase tracking-widest"
            >
              Services
            </Link>
            <Link
              to="/dark-speculations"
              className="rounded-md bg-red-800 text-white px-8 py-3.5 text-sm font-semibold shadow-sm hover:bg-red-700 transition-colors uppercase tracking-widest"
            >
              Submit to Anthology
            </Link>
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="text-sm font-bold text-red-400 hover:text-red-300 uppercase tracking-widest underline underline-offset-4"
            >
              Book Your Strategy Call
            </Link>
          </div>
        </div>

        {/* Start Here Bouncing Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a
            href="#foundations"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors animate-bounce"
          >
            <span className="text-xs uppercase tracking-widest font-semibold mb-2">
              Start Here
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

      {/* 00 - Foundations (Replaces old Start Here) */}
      <section
        id="foundations"
        className="py-24 px-6 lg:px-8 bg-white text-center border-b border-gray-200 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="text-8xl font-serif font-bold text-slate-100 block -mb-8 select-none">
              00
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-900 relative z-10">
              Ensuring you build the foundations you need
            </h2>
          </div>

          {/* 4-Step Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 text-red-800 rounded-full flex items-center justify-center text-2xl mb-4 shadow-sm border border-red-100">
                🎯
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Goal Setting</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Establish a clear path to publication and set actionable
                milestones.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 text-red-800 rounded-full flex items-center justify-center text-2xl mb-4 shadow-sm border border-red-100">
                🤝
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1-on-1 Coaching</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Personalized guidance tailored to your specific genre and needs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 text-red-800 rounded-full flex items-center justify-center text-2xl mb-4 shadow-sm border border-red-100">
                📅
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Weekly Accountability
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Stay on track with regular check-ins and deadline management.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 text-red-800 rounded-full flex items-center justify-center text-2xl mb-4 shadow-sm border border-red-100">
                🚀
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Publishing Guidance
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Navigate the publishing industry with confidence and clarity.
              </p>
            </div>
          </div>

          {/* Core Roles & Badges */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-8">
              Certified Expertise
            </h3>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8">
              <div className="flex flex-col items-center">
                <img
                  src={badgeFiction}
                  alt="Fiction Badge"
                  className="h-24 w-auto drop-shadow-md hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={badgeNonfiction}
                  alt="Nonfiction Badge"
                  className="h-24 w-auto drop-shadow-md hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={badgeMemoir}
                  alt="Memoir Badge"
                  className="h-24 w-auto drop-shadow-md hover:scale-105 transition-transform"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-semibold tracking-widest uppercase text-red-800">
              <span>Editorial Advice</span>
              <span>Accountability Mentor</span>
              <span>Creative Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* 01 - Founder's Note */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Starry+Background')] bg-cover bg-center opacity-20"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-8xl font-serif font-bold text-white/10 block -mb-8 select-none">
              01
            </span>
            <h2 className="text-3xl font-serif font-bold relative z-10">
              Let's Hear From Our Founder
            </h2>
            <p className="mt-4 text-red-400 uppercase tracking-widest text-xs font-semibold">
              Robin Nemesszeghy
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-10 items-center md:items-start">
            <img
              src={robinHeadshot}
              alt="Robin Nemesszeghy"
              className="w-40 h-40 rounded-full object-cover shadow-xl shrink-0"
            />
            <div className="text-gray-200 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                Hello! I’m Robin, and I’m passionate about stories. I believe
                everyone has a unique story to tell, and my mission is to help
                you bring that story out into the world.
              </p>
              <p>
                As a certified Book Coach and Developmental Editor, I know how
                vulnerable the writing process can be. It’s hard work, and doing
                it alone can lead to frustration and burnout. That’s why I
                created Little Red Bird Publishing—to be the partner, guide, and
                mirror you need to achieve your publishing dreams.
              </p>
              <p>
                Whether you're crafting a complex fantasy world, sharing a
                deeply personal memoir, or writing a business book to establish
                your authority, I am here to ensure your voice shines through
                with clarity and impact.
              </p>
              <div className="pt-4 border-t border-white/20 mt-6">
                <span className="font-serif italic text-lg text-white">
                  Robin Nemesszeghy
                </span>
                <span className="block text-xs text-red-400 uppercase tracking-widest mt-1">
                  Founder, Little Red Bird Publishing
                </span>
              </div>
            </div>
          </div>

          {/* YouTube Video Embed */}
          <div className="mt-16 aspect-video bg-black rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/qTZx4SCfV7s"
              title="Welcome to Little Red Bird Publishing"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 02 - Why Select Us */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 border-b border-gray-200 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-8xl font-serif font-bold text-slate-200 block -mb-8 select-none">
              02
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-900 relative z-10">
              Why Select Us?
            </h2>
            <p className="mt-4 text-gray-500 uppercase tracking-widest text-xs font-semibold">
              We are as detail-focused as we are creative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Business Growth
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We understand that your book is a powerful tool for your
                business and brand authority. We build strategy into the writing
                process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">💲</div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Budget Friendly
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We offer competitive pricing and flexible 0% interest payment
                plans because professional publishing should be accessible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Progress Over Perfection
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Perfectionism kills creativity. We help you push past blocks and
                focus on forward momentum to finally finish that draft.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">❤️</div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Empathetic Experience
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Writing is vulnerable. We provide a safe, supportive, and
                compassionate environment for you to explore your story.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Friendly Service
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We are your cheerleaders. Expect prompt communication, warm
                encouragement, and a true collaborative partnership.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="font-serif font-bold text-gray-900 mb-2">
                Matching Book
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We ensure the final product—from cover design to interior
                formatting—perfectly matches the essence of your story.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors uppercase tracking-widest inline-block"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 03 - Testimonials Carousel */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-red-800 to-red-950 text-white relative overflow-hidden">
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <span className="text-8xl font-serif font-bold text-white/10 block -mb-8 select-none">
              03
            </span>
            <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl relative z-10">
              Testimonials
            </h2>
            <p className="mt-4 text-red-200 text-sm tracking-widest uppercase font-semibold">
              Hear from our incredible authors
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/5 p-8 sm:p-12 rounded-2xl border border-white/10 backdrop-blur-sm min-h-[300px]">
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

              <div className="flex gap-2 flex-wrap justify-center max-w-[200px]">
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
