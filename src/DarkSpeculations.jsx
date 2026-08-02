import { Link } from "react-router-dom";
import darkSpeculationsVol1 from "./assets/covers/dark-speculations-vol-1.jpg";
import darkSpeculationsVol2 from "./assets/covers/dark-speculations-vol-2.jpg";
import horrorGenresMap from "./assets/horror-genres.png"; // <-- Imported your new graphic!

export default function DarkSpeculations() {
  return (
    <div className="flex flex-col grow bg-slate-950 text-slate-300 selection:bg-red-900 selection:text-white">
      {/* 1. Dark Immersive Hero */}
      <section className="relative py-32 px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Dark+Forest+Road')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-red-700 text-4xl mb-6">🪶</div>
          <h2 className="text-sm font-semibold tracking-widest uppercase text-red-600 mb-4">
            Little Red Bird Literary Presents
          </h2>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-slate-100 sm:text-6xl mb-6 leading-tight">
            Dark Speculations:
            <br />
            <span className="text-3xl sm:text-4xl text-slate-400">
              Tales of Various Shapes and Shadows
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto italic font-serif">
            "Reading is the sole means by which we slip, involuntarily, often
            helplessly, into another's skin, another's voice, another's soul."{" "}
            <br />— Joyce Carol Oates
          </p>
          <a
            href="#guidelines"
            className="inline-block rounded-md bg-red-800 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors uppercase tracking-widest"
          >
            View Submission Guidelines
          </a>
        </div>
      </section>

      {/* 2. Status Banner */}
      <div className="bg-red-950/80 border-y border-red-900 py-6 px-6 text-center backdrop-blur-sm sticky top-20 z-40">
        <h3 className="text-xl font-bold text-red-50 uppercase tracking-widest">
          We Are Currently CLOSED for Submissions!
        </h3>
        <p className="text-red-200 text-sm mt-2">
          Read our submission guidelines below and prepare your stories for our
          next reading window.
        </p>
      </div>

      {/* 3. The Anthology Showcase */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-100">
            The Collection
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            The best way to become familiar with what we publish is to read our
            previous volumes, which you will find{" "}
            <a
              href="https://mybook.to/DarkSpeculations"
              target="_blank"
              rel="noreferrer"
              className="text-red-500 hover:text-red-400 underline underline-offset-4 font-semibold"
            >
              available here.
            </a>
          </p>
          <div className="w-16 h-1 bg-red-800 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Volume 3 */}
          <div className="flex flex-col items-center group">
            <div className="aspect-[2/3] w-full max-w-[280px] bg-slate-900 rounded-lg overflow-hidden shadow-2xl border border-slate-800 relative mb-6">
              <img
                src="https://via.placeholder.com/400x600/000000/FFFFFF?text=Coming+Soon"
                alt="Volume 3"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute top-4 right-4 bg-slate-950 text-red-500 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider border border-red-900/50">
                Coming Soon
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-100 text-center">
              Volume III
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Reading window closed. Publishing Oct 2026.
            </p>
          </div>

          {/* Volume 2 */}
          <div className="flex flex-col items-center group">
            <div className="aspect-[2/3] w-full max-w-[280px] bg-slate-900 rounded-lg overflow-hidden shadow-2xl border border-slate-800 relative mb-6">
              <img
                src={darkSpeculationsVol2}
                alt="Volume 2"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-100 text-center">
              Volume II
            </h3>
            <p className="text-sm text-slate-500 mt-2 mb-4 text-center line-clamp-3">
              A haunting tapestry of tales that defy categorization, delving
              deep into human nature.
            </p>
            <a
              href="https://mybook.to/DarkSpeculationsV2"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 border-b border-red-500 pb-1"
            >
              Check Out Volume II
            </a>
          </div>

          {/* Volume 1 */}
          <div className="flex flex-col items-center group">
            <div className="aspect-[2/3] w-full max-w-[280px] bg-slate-900 rounded-lg overflow-hidden shadow-2xl border border-slate-800 relative mb-6">
              <img
                src={darkSpeculationsVol1}
                alt="Volume 1"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-100 text-center">
              Volume I
            </h3>
            <p className="text-sm text-slate-500 mt-2 mb-4 text-center line-clamp-3">
              Anchored in familiar settings, bridging fantastical and scientific
              elements with Lovecraftian horror.
            </p>
            <a
              href="https://mybook.to/DarkSpeculationsV1"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 border-b border-red-500 pb-1"
            >
              Check Out Volume I
            </a>
          </div>
        </div>
      </section>

      {/* 4. What We Publish (Text + Infographic) */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-100 mb-6">
              What We Publish
            </h2>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <p>
                We seek dark speculative tales. We are open to almost all genres
                as long as they align with dark themes (e.g., dark sci-fi, dark
                adventure, dark fantasy).
              </p>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-md my-6">
                <p className="text-red-400 font-semibold italic">
                  **Tip: The best way to describe what we are looking for is
                  unique and creative "hopeful dark" psychological stories that
                  make us think differently about humanity as a whole.**
                </p>
              </div>
              <p>
                We welcome stories that challenge readers to think deeply about
                their own mortality. Werewolves, shapeshifters, zombies, and
                beasts are welcome. Keep us up at night, throw in familiar
                settings, and surprise us.
              </p>
              <h3 className="text-lg font-bold text-slate-200 mt-8 mb-2 font-serif">
                What We DON'T Publish
              </h3>
              <p>
                We do not publish splatter or slasher fiction, or senseless
                violence without a deeper motive. Violence is acceptable, but it
                should be secondary to the point of your piece.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/* Linked Infographic */}
            <a
              href="https://georgebartley77.wixsite.com/georgebartleyoffical/single-post/2016/12/09/horror"
              target="_blank"
              rel="noreferrer"
              className="w-full bg-slate-800 rounded-lg flex flex-col items-center justify-center border border-slate-700 shadow-xl overflow-hidden p-2 mb-6 group transition-transform hover:scale-[1.02]"
              title="View Original Source"
            >
              <img
                src={horrorGenresMap}
                alt="Horror Genres Map"
                className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[10px] text-slate-400 mt-2 pb-1 text-center group-hover:text-red-400 transition-colors">
                Graphic Originally via George Bartley / Horror on Screen
              </span>
            </a>

            <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 w-full text-sm text-slate-400 space-y-3">
              <p className="font-semibold text-slate-300 mb-4 border-b border-slate-800 pb-2">
                Not sure what fits the genre?
              </p>
              <a
                href="https://www.languagehumanities.org/what-is-dark-fiction.htm"
                target="_blank"
                rel="noreferrer"
                className="block text-red-500 hover:text-red-400 transition-colors"
              >
                → Read exactly what Dark Fiction is
              </a>
              <a
                href="https://www.masterclass.com/articles/what-is-speculative-fiction-defining-and-understanding-the-different-genres-of-speculative-fiction"
                target="_blank"
                rel="noreferrer"
                className="block text-red-500 hover:text-red-400 transition-colors"
              >
                → Read exactly what Speculative Fiction is
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Guidelines "Quick Facts" Grid */}
      <section
        id="guidelines"
        className="py-24 px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-100">
            Submission Guidelines
          </h2>
          <p className="mt-4 text-slate-400">
            Everything you need to know before sending your literary seeds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">
              Word Count
            </h3>
            <p className="text-sm font-semibold text-slate-200 mb-2">
              Short Stories: 1,000 - 12,000 words
            </p>
            <p className="text-sm font-semibold text-slate-200">
              Flash Fiction: Up to 1,000 words
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Max 3,000 words total for flash submissions.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">
              Multiple & Sim Subs
            </h3>
            <p className="text-sm font-semibold text-slate-200 mb-2">
              Simultaneous: YES
            </p>
            <p className="text-sm font-semibold text-slate-200">
              Multiple: YES
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Submit up to 1 short story AND 3 flash pieces at once (in separate
              emails).
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">
              Reprints
            </h3>
            <p className="text-sm font-semibold text-slate-200 mb-2">
              Reprints: YES
            </p>
            <p className="text-xs text-slate-500 mt-2">
              As long as the piece isn't publicly available online (excludes
              blogs/Medium). Print/Patreon is okay.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">
              Compensation & Rights
            </h3>
            <p className="text-sm font-semibold text-slate-200 mb-2">
              Payment: Digital Contributor Copy
            </p>
            <p className="text-sm font-semibold text-slate-200">
              Rights: Non-exclusive
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Electronic and print rights for the anthology volume.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">
              Formatting
            </h3>
            <p className="text-sm font-semibold text-slate-200 mb-2">
              Shunn Manuscript Format
            </p>
            <p className="text-xs text-slate-500 mt-2">
              DOCX, DOC, or RTF. Times New Roman, 12pt, double-spaced. Title &
              Word Count on first page.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 border-l-4 border-l-red-600">
            <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2">
              Blind Reading
            </h3>
            <p className="text-sm font-semibold text-slate-200 mb-2">
              REMOVE YOUR NAME
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Do not include your name or identifying info inside the document
              itself or the document file name.
            </p>
          </div>
        </div>

        {/* 6. Step-by-Step Email Instructions */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-slate-100 mb-10 text-center">
            How to Navigate Your Submission
          </h3>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-10 h-10 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center font-bold font-serif shrink-0 border border-red-900/50">
                1
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-lg mb-2">
                  Prepare Your Email
                </h4>
                <p className="text-sm text-slate-400">
                  Email your submission to{" "}
                  <a
                    href="mailto:darkspeculations@gmail.com"
                    className="text-red-400 hover:underline"
                  >
                    darkspeculations@gmail.com
                  </a>
                  . The subject line MUST be formatted as: <br />
                  <strong className="text-slate-300 mt-2 block">
                    DARK SPECULATIONS – [Name of Your Piece] – [Your Name]
                  </strong>
                </p>
              </div>
            </div>

            {/* Step 2 (Bio Rules) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-10 h-10 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center font-bold font-serif shrink-0 border border-red-900/50">
                2
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-lg mb-2">
                  The Cover Letter & Bio Requirements
                </h4>
                <p className="text-sm text-slate-400 mb-4">
                  Include a cover letter and a{" "}
                  <strong className="text-slate-200">third-person bio</strong>{" "}
                  in the body of your email. Please let us know if your piece is
                  a reprint and its approximate word count. You do not need to
                  summarize your story!
                </p>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
                  <p className="text-sm font-semibold text-slate-200 mb-3">
                    Your Third-Person Bio Must Adhere to the Following:
                  </p>
                  <ul className="space-y-3 text-sm text-slate-400 list-disc list-inside">
                    <li>
                      <strong className="text-slate-300">
                        Previous Publications:
                      </strong>{" "}
                      Feel free to include a list of past publishing credits, if
                      any.
                    </li>
                    <li>
                      <strong className="text-slate-300">
                        Biographical Details:
                      </strong>{" "}
                      Keep details strictly pertinent to your piece (e.g.,
                      mention you live near a cemetery only if your story is set
                      in one).
                    </li>
                    <li>
                      <strong className="text-slate-300">
                        Strictly No Controversy:
                      </strong>{" "}
                      Do <span className="underline">not</span> include
                      political or other controversial statements. We want the
                      focus to remain entirely on the stories.
                    </li>
                    <li>
                      <strong className="text-slate-300">Links:</strong> You may
                      include a link to your website, social media, etc.
                    </li>
                  </ul>
                  <p className="text-xs text-red-400 mt-4 italic">
                    Note: If selected, the bio you provide will be published
                    exactly as-is alongside your piece.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-10 h-10 rounded-full bg-red-900/30 text-red-500 flex items-center justify-center font-bold font-serif shrink-0 border border-red-900/50">
                3
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-lg mb-2">
                  Attach & Send
                </h4>
                <p className="text-sm text-slate-400">
                  Attach your blind-formatted manuscript. We aim to respond to
                  all submissions within eight (8) weeks. If you haven't heard
                  from us after that period, feel free to query{" "}
                  <a
                    href="mailto:info@littleredbirdpublishing.com"
                    className="text-red-400 hover:underline"
                  >
                    info@littleredbirdpublishing.com
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* The Submit Button (with auto-filled subject line!) */}
            <div className="mt-8 flex justify-center pt-4">
              <a
                href="mailto:darkspeculations@gmail.com?subject=DARK%20SPECULATIONS%20%E2%80%93%20%5BName%20of%20Your%20Piece%5D%20%E2%80%93%20%5BYour%20Name%5D"
                className="rounded-md bg-red-800 px-10 py-4 text-sm font-bold text-white shadow-lg hover:bg-red-700 transition-transform hover:scale-105 uppercase tracking-widest"
              >
                Submit to Dark Speculations
              </a>
            </div>
          </div>

          {/* Best Practices Resources */}
          <div className="mt-16 pt-12 border-t border-slate-800 text-center">
            <h4 className="font-serif font-bold text-xl text-slate-200 mb-6">
              New to Submitting?
            </h4>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <a
                href="https://medium.com/@robinnemesszeghy/the-most-important-things-to-remember-when-submitting-to-literary-journals-9671f282f38f?sk=fc12d1b4c9007ac42b38646e7009d777"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-slate-800 border border-slate-700 px-6 py-3 text-xs font-semibold text-slate-200 shadow-sm hover:bg-slate-700 transition-colors uppercase tracking-widest"
              >
                Read: Best Practices Article
              </a>
              <a
                href="https://www.youtube.com/watch?v=8hapqlYUOpY&t=8s"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-slate-800 border border-slate-700 px-6 py-3 text-xs font-semibold text-slate-200 shadow-sm hover:bg-slate-700 transition-colors uppercase tracking-widest"
              >
                Watch: Best Practices Video
              </a>
            </div>
            <p className="text-xs text-red-500 italic max-w-2xl mx-auto leading-relaxed">
              Please read or watch one of the above if you are unsure about
              submitting or if you are new to submitting, as it has all the
              information you need to submit without worrying your piece will be
              rejected due to not following the guidelines. We prefer you reach
              out to us beforehand than to send us something we will reject due
              to not following the guidelines!
            </p>
          </div>
        </div>

        {/* Social Links Footer */}
        <div className="mt-12 text-center text-sm text-slate-400">
          <p className="mb-4">
            Don't forget to follow us to keep up with publishing updates!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/darkspeculations/"
              target="_blank"
              rel="noreferrer"
              className="text-red-500 hover:text-red-400 font-semibold uppercase tracking-widest text-xs"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/darkspeculations/"
              target="_blank"
              rel="noreferrer"
              className="text-red-500 hover:text-red-400 font-semibold uppercase tracking-widest text-xs"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCRv5k7UtNekKMSzUzWHEtXw/?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="text-red-500 hover:text-red-400 font-semibold uppercase tracking-widest text-xs"
            >
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* 7. Feedback Upsell */}
      <section className="py-16 px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl font-serif font-bold text-slate-100 mb-4">
            Want Editorial Feedback?
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
            For $5, we offer the option of receiving feedback on your story
            submission. This includes a brief editorial summary detailing what
            worked well and what needs improvement.
          </p>
          <p className="text-xs text-slate-500 mb-8 max-w-2xl mx-auto">
            Payment is made via Ko-fi. Be sure to include the comment
            "SUBMISSION FEEDBACK" and mention in your submission email that you
            requested it. Applicable only after payment is made.
          </p>
          <a
            href="https://ko-fi.com/littleredbirdpublishing"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-md bg-amber-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 transition-colors uppercase tracking-widest"
          >
            Apply for Feedback via Ko-fi
          </a>
        </div>
      </section>

      {/* 8. Inspiration & Video */}
      <section className="py-24 px-6 lg:px-8 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-serif font-bold text-slate-200 mb-4">
            Need Inspiration?
          </h3>
          <p className="text-sm text-slate-500 mb-10">
            Check out our prompt video on how to unlock your mind to write dark
            speculative fiction.
          </p>

          <div className="aspect-video w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative max-w-3xl mx-auto">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/mULNPCW7rgs"
              title="Dark Speculations Prompt Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
