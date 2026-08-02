export default function Contact() {
  return (
    <div className="flex flex-col grow bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 px-6 lg:px-8 text-center border-b border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl mb-6">
            Let's Talk About Your Book
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Ready to take the next step in your publishing journey? Fill out the
            form below to tell us a little bit about your project. If we are a
            good fit, we will reach out to schedule a free strategy call.
          </p>
        </div>
      </section>

      {/* Form & Contact Info Section */}
      <section className="py-24 px-6 lg:px-8 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column: The Qualifying Form */}
        <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Project Inquiry
          </h2>

          {/* Formspree Integration Complete! */}
          <form
            action="https://formspree.io/f/mpqvvznl"
            method="POST"
            className="space-y-6"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6 bg-white"
                  placeholder="Jane Austen"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6 bg-white"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            {/* Service Interest */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
              >
                Which service are you most interested in?
              </label>
              <select
                id="service"
                name="service"
                required
                className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6 bg-white"
              >
                <option value="">Select a service...</option>
                <option value="Full-Service Self-Publishing">
                  Full-Service Self-Publishing (Starting at $2,500)
                </option>
                <option value="Developmental Editing">
                  Developmental Editing (Starting at $0.03/word)
                </option>
                <option value="1:1 Book Coaching">
                  1:1 Book Coaching (Starting at $300/month)
                </option>
                <option value="Anthology Inquiry">
                  Dark Speculations Anthology Inquiry
                </option>
                <option value="Other">Other / Not Sure</option>
              </select>
            </div>

            {/* Manuscript Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
              >
                What stage is your manuscript currently in?
              </label>
              <select
                id="status"
                name="status"
                required
                className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6 bg-white"
              >
                <option value="">Select a stage...</option>
                <option value="Idea/Brainstorming">
                  Just an idea / Brainstorming
                </option>
                <option value="Writing first draft">
                  Currently writing the first draft
                </option>
                <option value="First draft finished">
                  First draft is finished!
                </option>
                <option value="Self-revised multiple times">
                  I have self-revised it multiple times
                </option>
                <option value="Polished and ready">
                  Polished and ready for formatting/publication
                </option>
              </select>
            </div>

            {/* Word Count */}
            <div>
              <label
                htmlFor="wordcount"
                className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
              >
                Estimated Word Count (if known)
              </label>
              <input
                type="text"
                id="wordcount"
                name="wordcount"
                className="block w-full rounded-md border-0 py-2.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6 bg-white"
                placeholder="e.g., 60,000 words"
              />
            </div>

            {/* The Pitch/Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 mb-2"
              >
                Tell us about your book!
              </label>
              <p className="text-xs text-gray-500 mb-3">
                What is your genre? What is the story about? What are your
                ultimate publishing goals?
              </p>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6 bg-white"
                placeholder="My memoir is about..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-md bg-red-800 px-8 py-4 text-sm font-bold text-white shadow-sm hover:bg-red-700 transition-colors uppercase tracking-widest"
              >
                Submit Inquiry
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                We aim to respond to all serious inquiries within 48 business
                hours.
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Contact Info & FAQ */}
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Direct Contact
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Prefer to send a direct email? You can reach us at the address
              below. Please note that for project inquiries, we will still need
              the information requested in the form.
            </p>
            <a
              href="mailto:info@littleredbirdpublishing.com"
              className="text-red-800 font-bold hover:text-red-600 transition-colors"
            >
              info@littleredbirdpublishing.com
            </a>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              Response Times
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We typically review new project inquiries on Tuesdays and
              Thursdays. If we believe we are a great fit for your project, we
              will reply with a link to book your free discovery call on our
              calendar.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-serif font-bold text-red-400 mb-3">
              Why no calendar link?
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Publishing a book is a deeply personal and collaborative process.
              We want to ensure we can genuinely provide the value and expertise
              your specific project needs before we take up your valuable time
              on a call.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
