import { Link } from "react-router-dom";

// Import all portfolio images
import ftgGroupImg from "./assets/copywriting/ftg-group.jpg";
import breadCompanyImg from "./assets/copywriting/bread-company.jpg";
import ibmImg from "./assets/copywriting/ibm.jpg";
import thePatternImg from "./assets/copywriting/the-pattern.jpg";
import cosmicFusionImg from "./assets/copywriting/cosmic-fusion.png";
import relaxedGiraffeImg from "./assets/copywriting/relaxed-giraffe.jpg";
import cosmicFusion2Img from "./assets/copywriting/cosmic-fusion-2.png";
import jasperCertImg from "./assets/copywriting/jasper-ai-certificate.jpg";
// Note: Ensure this filename exactly matches what is in your folder, including the extension (.jpg vs .png)
import blackfordBadgeImg from "./assets/copywriting/blackford-centre-copywriter-badge.png";

export default function Copywriting() {
  return (
    <div className="flex flex-col grow bg-slate-50">
      {/* 1. Hero Section */}
      <section className="bg-slate-950 text-slate-100 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-32 px-6 lg:px-8 text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080?text=Dark+Texture')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl mb-6">
            Professional Copywriting & Business Marketing
          </h1>
          <p className="text-xl text-slate-400 mb-10 font-serif italic">
            Boost your readership and your sales.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-md bg-red-800 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors uppercase tracking-widest"
          >
            Get a Free Quote
          </a>

          {/* Icons row */}
          <div className="flex justify-center gap-12 mt-16 text-slate-400">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl text-emerald-500">$</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Boost Profits
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl text-purple-500">💬</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Engage
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl text-amber-500">📈</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Increase Growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Card Section */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background watermark */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[15rem] font-serif font-black text-slate-100 select-none z-0 tracking-tighter leading-none">
          CS
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Copywriting Services
          </h2>
          <p className="text-slate-500 mb-12 text-sm uppercase tracking-widest font-semibold">
            Writing words that convince people to take action.
          </p>

          <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-8 md:p-12">
            <div className="text-red-800 text-4xl mb-4">✍️</div>
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-2">
              Copywriting Services
            </h3>
            <p className="text-sm text-slate-600 mb-8 italic">
              Do you need a copywriter? Let us take care of your business needs.
            </p>

            <h4 className="text-lg font-serif font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
              Services We Offer:
            </h4>
            <ul className="space-y-3 text-sm text-slate-700 font-medium max-w-md mx-auto mb-10">
              <li className="bg-slate-50 py-2 px-4 rounded">
                Copywriting & SEO copy for your website
              </li>
              <li className="bg-slate-50 py-2 px-4 rounded">Press releases</li>
              <li className="bg-slate-50 py-2 px-4 rounded">Newsletters</li>
              <li className="bg-slate-50 py-2 px-4 rounded">
                Manuals / eBooks
              </li>
              <li className="bg-slate-50 py-2 px-4 rounded">
                Brochure authorities
              </li>
              <li className="bg-slate-50 py-2 px-4 rounded">
                Branding (including business names & taglines)
              </li>
              <li className="bg-slate-50 py-2 px-4 rounded">
                Merchandise desc/scripts
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-slate-100">
              <p className="text-sm font-semibold text-slate-600">
                Ready to start a project?
              </p>
              <Link
                to="/contact"
                className="rounded-md bg-red-800 px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-red-700 transition-colors uppercase tracking-widest"
              >
                Get In Touch &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Need a Copywriter? Grid */}
      <section className="py-24 px-6 lg:px-8 bg-white border-y border-slate-200 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[15rem] font-serif font-black text-slate-50 select-none z-0 tracking-tighter leading-none">
          CS
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Need A Copywriter?
          </h2>
          <p className="text-slate-500 mb-16 text-sm uppercase tracking-widest font-semibold">
            Check out some of our past work and see what we can do for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Portfolio Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4 shadow-md flex items-center justify-center p-4">
                <img
                  src={ftgGroupImg}
                  alt="FTG Group"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-xs text-slate-600 mb-4 font-semibold text-center h-10">
                Website Content & Copy
              </p>
              <a
                href="https://ftg-group.ca/"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-slate-800 px-6 py-2 text-xs font-bold text-white hover:bg-slate-700 uppercase tracking-widest"
              >
                View
              </a>
            </div>
            {/* Portfolio Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4 shadow-md flex items-center justify-center p-4">
                <img
                  src={breadCompanyImg}
                  alt="Bread Company Ad Sketches"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-xs text-slate-600 mb-4 font-semibold text-center h-10">
                SEO Content Writing
              </p>
              <a
                href="https://robinnemesszeghy.medium.com/14-ad-concept-sketches-for-a-bread-company-27de7cd491d1?sk=e4cb2bbce5ba9eace3c0fccb01097780"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-red-800 px-6 py-2 text-xs font-bold text-white hover:bg-red-700 uppercase tracking-widest"
              >
                View
              </a>
            </div>
            {/* Portfolio Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4 shadow-md flex items-center justify-center p-4">
                <img
                  src={ibmImg}
                  alt="IBM Blog Posts"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-xs text-slate-600 mb-4 font-semibold text-center h-10">
                Blog Posts
              </p>
              <a
                href="https://drive.google.com/file/d/1Cf8NGT-Sa2UAbUpzCb8nnNtEmE4P2bcZ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-blue-800 px-6 py-2 text-xs font-bold text-white hover:bg-blue-700 uppercase tracking-widest"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Article & Blog Post Writing */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
            Article & Blog Post Writing:
          </h2>
          <p className="text-slate-600 mb-16 text-sm">
            We write an article about your product or service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {/* Blog Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4 shadow-md flex items-center justify-center p-2">
                <img
                  src={thePatternImg}
                  alt="The Pattern"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 font-serif">
                The Pattern
              </h3>
              <p className="text-xs text-slate-500 mb-4 text-center leading-relaxed h-16">
                The App That Will Lead You To Question Whether You Are Truly In
                Control of Your Own Life.
              </p>
              <a
                href="https://robinnemesszeghy.medium.com/the-pattern-the-app-that-will-lead-you-to-question-whether-you-are-truly-in-control-of-your-own-d5e0a6d18049?sk=e915442f1fa29dbd6e53cd6a4fa1aadc"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-blue-800 px-6 py-2 text-xs font-bold text-white hover:bg-blue-700 uppercase tracking-widest"
              >
                View Post
              </a>
            </div>
            {/* Blog Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4 shadow-md flex items-center justify-center p-2">
                <img
                  src={cosmicFusionImg}
                  alt="Cosmic Fusion I"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 font-serif">
                Cosmic Fusion I
              </h3>
              <p className="text-xs text-slate-500 mb-4 text-center leading-relaxed h-16">
                CF Fuses Together Chinese Zodiac With Western Astrology to Give
                You the Most Comprehensive Version of Your Type.
              </p>
              <a
                href="https://robinnemesszeghy.medium.com/cosmic-fusion-fuses-together-chinese-zodiac-with-western-astrology-to-give-you-the-most-5cc97e13a137?sk=6992efd28cff078724e9b31676b44ee9"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-red-800 px-6 py-2 text-xs font-bold text-white hover:bg-red-700 uppercase tracking-widest"
              >
                View Post
              </a>
            </div>
            {/* Blog Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4 shadow-md flex items-center justify-center p-2">
                <img
                  src={relaxedGiraffeImg}
                  alt="The Relaxed Giraffe"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 font-serif">
                The Relaxed Giraffe
              </h3>
              <p className="text-xs text-slate-500 mb-4 text-center leading-relaxed h-16">
                Lush Lavender Skincare: If you love lavender and love to relax,
                definitely check out this line of self-care skincare.
              </p>
              <a
                href="https://blog.healthmanagement.in/the-relaxed-giraffe-lush-lavender-skincare-c2df70f8fdcb?sk=c61845492dd46a16cde0c58c2e079a9b"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-purple-800 px-6 py-2 text-xs font-bold text-white hover:bg-purple-700 uppercase tracking-widest"
              >
                View Post
              </a>
            </div>
            {/* Blog Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4 shadow-md flex items-center justify-center p-2">
                <img
                  src={cosmicFusion2Img}
                  alt="Cosmic Fusion II"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 font-serif">
                Cosmic Fusion II
              </h3>
              <p className="text-xs text-slate-500 mb-4 text-center leading-relaxed h-16">
                CF's New Feature Update is Kicking up an Astrological Storm in
                the Cosmos While rivaling The Pattern's offerings.
              </p>
              <a
                href="https://robinnemesszeghy.medium.com/cosmic-fusions-new-feature-update-is-kicking-up-an-astrological-storm-in-the-cosmos-7760b22784c1?sk=0d378c55bcd4148a11dd120748af59fa"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-amber-500 px-6 py-2 text-xs font-bold text-white hover:bg-amber-400 uppercase tracking-widest"
              >
                View Post
              </a>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-slate-700 font-medium mb-12 italic">
              Not to mention, the website you are currently viewing! <br />
              That's right, we built this entire website ourselves and wrote all
              the content you see on these pages.
            </p>

            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">
              More samples:
            </h4>

            <ul className="space-y-4 text-sm text-slate-600 flex flex-col items-center">
              <li>
                Creating copy for sales letters &rarr;{" "}
                <a
                  href="https://medium.datadriveninvestor.com/how-i-use-jasper-ai-to-write-a-personally-written-direct-mail-letter-7015a5b5e38c?sk=f4a3de9404d19e402ec66f295b67b7b5"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-700 font-bold hover:underline"
                >
                  How I Use Jasper AI to Write A Personally Written Direct Mail
                  Letter
                </a>
              </li>
              <li>
                Creating ads &rarr;{" "}
                <a
                  href="https://robinnemesszeghy.medium.com/14-ad-concept-sketches-for-a-bread-company-27de7cd491d1?sk=e4cb2bbce5ba9eace3c0fccb01097780"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-700 font-bold hover:underline"
                >
                  14 Ad Concept Sketches for a Bread Company
                </a>
              </li>
              <li>
                Writing website content &rarr;{" "}
                <a
                  href="https://robinnemesszeghy.medium.com/website-home-page-sample-f0696a953f02?sk=47467fea6630c03a7763f117b60cffe6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-700 font-bold hover:underline"
                >
                  Website Home Page Sample
                </a>
              </li>
              <li>
                Writing microcopy &rarr;{" "}
                <a
                  href="https://robinnemesszeghy.medium.com/writing-microcopy-with-jasper-ai-14c409196101?sk=631cd9bf89ce2042803f02f3962081ed"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-700 font-bold hover:underline"
                >
                  Writing Microcopy With Jasper AI
                </a>
              </li>
              <li>
                Writing blog posts &rarr;{" "}
                <a
                  href="https://robinnemesszeghy.medium.com/why-your-post-belongs-to-your-readers-8c8847a5e93d?sk=7d776ea682e168086b02bb0f7790458f"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-700 font-bold hover:underline"
                >
                  Why Your Post Belongs To Your Readers
                </a>
              </li>
            </ul>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <p className="font-serif font-bold text-slate-900 text-lg">
                Like what you see?
              </p>
              <Link
                to="/contact"
                className="rounded-md bg-red-800 px-8 py-3.5 text-xs font-bold text-white shadow-sm hover:bg-red-700 transition-colors uppercase tracking-widest"
              >
                Find out how we can help you
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Certifications / Badges */}
      <section className="py-24 px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-12">
          {/* Blackford PDF Link */}
          <a
            href="/certificates/blackford-certificate.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <div className="h-auto w-64 flex items-center justify-center rounded">
              <img
                src={blackfordBadgeImg}
                alt="Approved Copywriter Blackford Centre"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </a>

          <a
            href="https://www.jasper.ai/?fpr=robin89"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <div className="h-auto w-64 flex items-center justify-center rounded shadow-lg border border-slate-200">
              <img
                src={jasperCertImg}
                alt="Jasper AI Certificate"
                className="max-w-full max-h-full object-contain rounded"
              />
            </div>
          </a>
        </div>
      </section>

      {/* 6. Bottom CTA Footer */}
      <section
        id="contact"
        className="py-32 px-6 lg:px-8 bg-slate-900 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-white mb-10">
            Speak to your people, boost your sales.
          </h2>
          <Link
            to="/contact"
            className="inline-block rounded-md bg-red-800 px-10 py-4 text-sm font-bold text-white shadow-xl hover:bg-red-700 transition-colors uppercase tracking-widest mb-12"
          >
            Find Out How
          </Link>

          <div className="pt-12 border-t border-slate-800">
            <Link
              to="/"
              className="text-slate-500 hover:text-slate-300 text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              &larr; Return to Little Red Bird Publishing Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
