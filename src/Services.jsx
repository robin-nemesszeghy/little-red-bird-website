import { useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is Full Service Self-Publishing?",
      answer:
        "We take your manuscript from a raw draft to a polished, published book. This includes formatting, cover design coordination, copy editing, and the actual publishing setup on Amazon KDP and IngramSpark.",
    },
    {
      question: "Is Full Service Self-Publishing right for me?",
      answer:
        "If you want the creative control and higher royalties of self-publishing but don't want to spend hundreds of hours learning the technical formatting, uploading, and distribution processes, this service is for you.",
    },
    {
      question: "Why choose Little Red Bird Publishing for this service?",
      answer:
        "We are authors ourselves. We guarantee your book gets published, we don't take any of your royalties, and we tailor our timeline to fit your specific needs.",
    },
    {
      question: "How long will it take to have my book published?",
      answer:
        "Depending on the level of editing required, we can have your book published in as little as a single month, or up to 6 months if you prefer a slower, more deliberate pace.",
    },
    {
      question: "I don't have a full draft written yet. Can I still sign up?",
      answer:
        "Absolutely! Our Book Coaching services are designed exactly for this. We can help you structure, write, and stay accountable until your draft is finished.",
    },
    {
      question:
        "What if I want more story-level editing done on my book before it's published?",
      answer:
        "Developmental and line editing are not included in the base Full-Service package, but they can easily be added on for an additional charge. We can also provide 1:1 Book Coaching while you write.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col grow bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20 px-6 lg:px-8 border-b border-gray-200 text-center relative">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Professional Editorial & Publishing Services
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Whether you are staring at a blank page, holding a messy first
            draft, or ready to launch your masterpiece into the world, we meet
            you exactly where you are.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#book-coaching"
              className="text-sm font-semibold tracking-widest uppercase text-red-800 hover:text-red-600 transition-colors"
            >
              Book Coaching
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="#developmental-editing"
              className="text-sm font-semibold tracking-widest uppercase text-red-800 hover:text-red-600 transition-colors"
            >
              Developmental Editing
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="#full-service"
              className="text-sm font-semibold tracking-widest uppercase text-red-800 hover:text-red-600 transition-colors"
            >
              Full-Service Publishing
            </a>
          </div>
        </div>

        {/* Bouncing Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a
            href="#book-coaching"
            className="flex flex-col items-center text-gray-400 hover:text-red-800 transition-colors animate-bounce"
          >
            <span className="text-xs uppercase tracking-widest font-semibold mb-2">
              View Packages
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

      {/* Book Coaching Section */}
      <section
        id="book-coaching"
        className="py-24 px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Book Coaching
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For writers who need an architect. Writing a book can be a lonely,
              overwhelming process. Our 1:1 Book Coaching provides you with
              real-time feedback, structural strategy, and the accountability
              you need to finally finish your manuscript.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-red-800 mr-2 font-bold">✓</span> Deadline
                accountability and weekly check-ins
              </li>
              <li className="flex items-start">
                <span className="text-red-800 mr-2 font-bold">✓</span> Live
                feedback as you write to prevent costly structural mistakes
              </li>
              <li className="flex items-start">
                <span className="text-red-800 mr-2 font-bold">✓</span> Expert
                guidance refining your pitch, proposal, and query letter
              </li>
            </ul>
            <div className="text-sm font-semibold text-gray-900 mb-2 bg-slate-100 inline-block px-4 py-2 rounded-md">
              Packages starting at $300/month*
            </div>
            <p className="text-xs text-gray-500 mb-8 italic">
              *Based on reviewing up to 40 pages (approx. 10,000 words) per
              month.
            </p>

            <Link
              to="/contact"
              className="inline-block rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors uppercase tracking-widest"
            >
              Inquire About Coaching
            </Link>
          </div>
          {/* YouTube Video Embed */}
          <div className="bg-slate-200 aspect-video w-full rounded-xl shadow-lg relative overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/ufIvxdPqiRQ"
              title="Book Coaching FAQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Developmental Editing Section */}
      <section
        id="developmental-editing"
        className="py-24 px-6 lg:px-8 bg-slate-50 border-y border-gray-200 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* YouTube Video Embed */}
          <div className="order-2 md:order-1 bg-white aspect-video w-full rounded-xl shadow-lg relative overflow-hidden border border-gray-200">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/lSGHYZeXxKk"
              title="Levels of Editing Explained"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Developmental Editing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For the completed draft that needs a structural overhaul. Before
              you worry about commas and typos, you need to ensure the bones of
              your story are solid. We evaluate the big picture to make sure
              your narrative works.
            </p>
            <ul className="space-y-3 mb-6 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-red-800 mr-2 font-bold">✓</span>{" "}
                Comprehensive evaluation of pacing, plot, and character arcs
              </li>
              <li className="flex items-start">
                <span className="text-red-800 mr-2 font-bold">✓</span> Fixing
                plot holes and structural inconsistencies
              </li>
              <li className="flex items-start">
                <span className="text-red-800 mr-2 font-bold">✓</span>{" "}
                Refinement of your core argument (for nonfiction and memoir)
              </li>
            </ul>
            <div className="text-sm font-semibold text-gray-900 mb-8 bg-white border border-gray-200 inline-block px-4 py-2 rounded-md">
              Starting at $0.03 per word
            </div>
            <br />
            <Link
              to="/contact"
              className="inline-block rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors uppercase tracking-widest"
            >
              Get an Editing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Full Service Self-Publishing Section */}
      <section
        id="full-service"
        className="py-24 px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
      >
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">
            Full-Service Self-Publishing
          </h2>

          {/* Evocative Intro Text */}
          <div className="space-y-8 mb-16">
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif leading-relaxed">
              <span className="font-semibold text-gray-900">How much</span>{" "}
              would you save in time, money, or frustration if you didn't have
              to worry about{" "}
              <strong className="not-italic text-gray-900">
                editing, formatting, and publishing
              </strong>{" "}
              and could devote all that time and energy to doing more of what
              you love instead?
            </p>
            <div className="flex justify-center text-red-800/30">❦</div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif leading-relaxed">
              <span className="font-semibold text-gray-900">
                How would it feel
              </span>{" "}
              to work with somebody who's gone through this entire process, have
              them be by your side guiding you, and walk you through having your
              book published, live, and available for your readers, so{" "}
              <strong className="not-italic text-gray-900">
                you don't have to do it alone
              </strong>
              ?
            </p>
            <div className="flex justify-center text-red-800/30">❦</div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif leading-relaxed">
              <span className="font-semibold text-gray-900">Imagine</span> you
              had someone take care of the entire process for you and had your
              dream book published under your name a month from now.
            </p>
            <p className="text-lg font-bold text-gray-900 uppercase tracking-widest pt-4">
              What would that be worth?
            </p>
            <div className="flex justify-center text-red-800/30">❦</div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-serif leading-relaxed">
              <span className="font-semibold text-gray-900">What if</span> I
              told you I could do all this for you and more,{" "}
              <strong className="not-italic text-gray-900">
                without taking any royalties
              </strong>{" "}
              (no subscription, no reoccurring fees, and your book is entirely
              yours—published under YOUR name alone)?
            </p>
          </div>

          <div className="mb-6 text-center">
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-gray-900 mb-2">
              Enter... Full Service Self-Publishing.
            </h3>
            <p className="text-lg text-gray-600 italic font-serif">
              When you just want to write the book and have someone else take
              care of the rest!
            </p>
          </div>

          <div className="inline-block bg-red-50 text-red-900 px-8 py-6 rounded-md border border-red-100 shadow-sm text-left mb-4">
            <span className="font-semibold text-lg block mb-1">
              Packages starting at $2,500*
            </span>
            <span className="block text-sm text-red-800 mt-2">
              *Based on a manuscript of up to 40,000 words. Add $250 per
              additional 10,000 words.
            </span>
            <span className="block text-sm text-red-800 mt-1">
              0% interest payment plans up to 6 months available.
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16 aspect-video w-full rounded-xl shadow-lg relative overflow-hidden border border-gray-200">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/MGWz4s9BrF8"
            title="Full Service Self-Publishing Explainer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border-t-4 border-t-red-600 shadow-lg rounded-b-xl p-8 text-center">
            <div className="w-12 h-12 bg-red-100 text-red-800 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
              Done For You
            </h3>
            <p className="text-sm text-gray-500 italic mb-4">
              Oz behind the curtain...
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Think of this as fully outsourcing the publishing of your book. We
              handle the formatting, copy editing, and backend setup while you
              retain 100% of your royalties.
            </p>
          </div>
          <div className="bg-white border-t-4 border-t-purple-600 shadow-lg rounded-b-xl p-8 text-center">
            <div className="w-12 h-12 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              💡
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
              We Teach You
            </h3>
            <p className="text-sm text-gray-500 italic mb-4">
              They say if you teach a man to fish...
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We walk you through the process step-by-step using a collaborative
              Trello board, so you never have to outsource this part of the
              process again (unless you want to!).
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            What's Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>Multiple copy edits & proofreads</strong> – we make
                  sure your manuscript is polished and ready to go.*
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>Book interior formatting</strong> – front matter, back
                  matter, and everything in between.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>Book exterior</strong> – dimensions, cover finish,
                  pages, detailing, and branding.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>Text that goes along with a published book**</strong>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>We find you a cover designer</strong> within your
                  budget for ebook, paperback, hardcover, & audiobook.
                </span>
              </li>
            </ul>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>We find you a professional reader</strong> within your
                  budget for your audiobook (if applicable).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>Flexible publishing timeline within 1 month</strong>{" "}
                  that is entirely dependent on your needs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>Amazon ads, keywords, and categories</strong> – we
                  help your ideal readers easily find your book.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>Unlimited revisions</strong> on everything offered
                  until we publish your book or set it up for preorder.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-lg leading-none">
                  ☑
                </span>
                <span>
                  <strong>We publish your book for you</strong> directly on
                  Amazon KDP and IngramSpark.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-xs text-gray-600 space-y-4">
            <p>
              *{" "}
              <strong className="text-gray-900">
                Developmental and line editing are not included
              </strong>{" "}
              but can be added on for an additional charge. See our{" "}
              <a
                href="#developmental-editing"
                className="text-red-800 font-semibold hover:underline"
              >
                Developmental Editing services
              </a>{" "}
              above.
            </p>
            <p>
              ** This includes all supplementary text (e.g., title and subtitle,
              copyright, book description/blurb, front and back cover text,
              reviews, About Author, foreword and afterword, introduction,
              acknowledgements).
            </p>
            <p className="text-red-900 font-semibold bg-red-50 p-4 rounded-md border border-red-100 inline-block">
              NOTE: You must have a completed first draft of your manuscript to
              book this service. If you need help finishing your draft, please
              check out our{" "}
              <a href="#book-coaching" className="underline hover:text-red-700">
                1:1 Book Coaching
              </a>
              .
            </p>
          </div>
        </div>

        {/* Updated Button Container for Mobile Stacking */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto text-center rounded-md bg-red-800 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors uppercase tracking-widest"
          >
            Book Your Free Strategy Session
          </Link>
          <Link
            to="/portfolio"
            className="w-full sm:w-auto text-center rounded-md bg-amber-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 transition-colors uppercase tracking-widest"
          >
            View Previous Full Serviced Books
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section (Global) */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">
            Why Trust Little Red Bird with Full-Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-left">
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3 font-serif">
                1. We know the process inside and out
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our own books have gone through the same rigorous process, along
                with the books of our other clients! We navigate through the
                self-publishing minefield with our own creations, so we
                understand and empathize with you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3 font-serif">
                2. We don't take any royalties
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You pay us a one-time fee and that's it. No hidden costs, no
                add-on fees, not ever. Once your book is published, it's all
                yours and only yours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3 font-serif">
                3. We guarantee your book gets published
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                All you need to come with is your book's first draft; we take
                care of the rest. Within 1-6 months of coming to us, we
                guarantee your book will be published, live, and available for
                purchase!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3 font-serif">
                4. We tailor our services to your timeline
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you would like to have your book published within a
                single month, or you would like to utilize the full 6 months, we
                honor that, and the fee remains the same.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3 font-serif">
                5. We offer competitive pricing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our pricing is a lot less than other comparable services. We
                also offer flexible payment plans to fit your needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3 font-serif">
                6. We are authors too
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Being authors ourselves, we understand what authors need. We
                provide the service, insight, and publishing framework we wish
                we had when we were first starting out on our own journeys.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3 font-serif">
                7. We are both friendly and professional
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We aim to bring you the best experience as we partner with you
                on your journey. We are here for you as a peer, partner, and
                friend. We are the cheerleaders of your marathon. And we also
                know how to get things done!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-3 font-serif">
                8. Bonus: Added exposure
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your book gets added to our website portfolio for additional
                exposure with a direct link to purchase on Amazon. Plus, an
                optional Medium post to all our followers and followers of
                Little Red Bird Publishing!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900">FAQ</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get your questions answered
          </p>
        </div>
        <div className="mb-12 aspect-video w-full rounded-xl shadow-lg relative overflow-hidden border border-gray-200">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/hh850cl_C28"
            title="Full-Service Self-Publishing FAQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-gray-900 text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <span className="text-red-800 text-xl font-light">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-6 text-sm text-gray-600 leading-relaxed transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-48 py-4 border-t border-gray-100 opacity-100" : "max-h-0 py-0 opacity-0"}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
