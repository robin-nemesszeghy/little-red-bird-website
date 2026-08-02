// Import your individual cropped affiliate images matching your exact file structure
import authorAcceleratorImg from "./assets/affiliates/author-accelerator.png";
import autocritImg from "./assets/affiliates/autocrit.jpg";
import ctaImg from "./assets/affiliates/cta.png";
import dabbleImg from "./assets/affiliates/dabble.png";
import firstEditingImg from "./assets/affiliates/first-editing.png";
import freewriteImg from "./assets/affiliates/freewrite.png";
import jasperImg from "./assets/affiliates/jasper.png";
import mediumImg from "./assets/affiliates/medium.png";
import mockupShotsImg from "./assets/affiliates/mockup-shots.png";
import nightmareFuelImg from "./assets/affiliates/nightmare-fuel.png";
import plottrImg from "./assets/affiliates/plottr.png";
import publisherRocketImg from "./assets/affiliates/publisher-rocket.png";
import quickwriteImg from "./assets/affiliates/quick-write.png";
import quillbotImg from "./assets/affiliates/quillbot.png";
import saunaspaceImg from "./assets/affiliates/sauna-space.jpg";
import scrivenerImg from "./assets/affiliates/scrivener.png";
import sitegroundImg from "./assets/affiliates/site-ground.jpg";
import transformationAcademyImg from "./assets/affiliates/transformation-academy.png";

export default function Affiliates() {
  const affiliates = [
    {
      id: 1,
      name: "Author Accelerator",
      description:
        "Author Accelerator is on a mission to raise the bar on book coaching—to help book coaches run successful, sustainable businesses helping writers do their best work. They have trained and certified more than 100 book coaches (including me!) through their Book Coach Certification program. If you're interested in doing this work yourself, you can use one of my links below to start your journey!",
      image: authorAcceleratorImg,
      links: [
        {
          label: "Fiction",
          url: "https://authoraccelerator.teachable.com/courses/certification-fiction?affcode=27214_kgd9mbva",
        },
        {
          label: "Nonfiction",
          url: "https://authoraccelerator.teachable.com/courses/certification-nonfiction?affcode=27214_kgd9mbva",
        },
        {
          label: "Memoir",
          url: "https://authoraccelerator.teachable.com/courses/certification-memoir?affcode=27214_kgd9mbva",
        },
        {
          label: "Fiction + Nonfiction Bundle",
          url: "https://authoraccelerator.teachable.com/bundles/book-coach-certification-fiction-nonfiction-bundle-upfront?affcode=27214_kgd9mbva",
        },
      ],
    },
    {
      id: 2,
      name: "Dabble",
      description:
        "Like Scrivener, minus the learning curve, and with the added bonus of rapid real-time, cross-platform syncing. Dabble is a beautiful word processing platform where you can plot, write, and export your novel or story. The interface is sleek and offers a distraction-free writing experience. Dabble is our favorite word processor and what we personally use for our manuscript drafting process.",
      image: dabbleImg,
      links: [
        {
          label: "Try Dabble Out For Free!",
          url: "https://www.dabblewriter.com/?via=robin-nemesszeghy",
        },
      ],
    },
    {
      id: 3,
      name: "AutoCrit",
      description:
        "Plan, write, and edit your next masterpiece from start to finish in a fully-featured writing platform packed with in-depth, interactive editing tools that build your confidence and let your stories shine. AutoCrit is like ProWritingAid Plus.",
      image: autocritImg,
      links: [
        {
          label: "Try AutoCrit For Free!",
          url: "https://autocrit.samcart.com/referral/RjUnsEmf/9OhjkqGFvfMbhluj",
        },
      ],
    },
    {
      id: 4,
      name: "AutoCrit's Nightmare Fuel",
      description:
        "Those who know us well know that we love a good dark tale (we have created an anthology collection full of them, after all!). If you share our admiration for the macabre, you will love AutoCrit's Nightmare Fuel Horror Writing Course. Writing the most effective kinds of horror can often involve trips to deep, dark places within yourself. We highly recommend it.",
      image: nightmareFuelImg,
      links: [
        {
          label: "Sign Up For Nightmare Fuel!",
          url: "https://autocrit.samcart.com/referral/vrLrMTLq/9OhjkqGFvfMbhluj",
        },
      ],
    },
    {
      id: 5,
      name: "Jasper AI",
      description:
        "Jasper is the generative AI platform for business that helps you create content tailored for your brand 10X faster, wherever you work online—for writers, this means helping you promote your work more efficiently.",
      image: jasperImg,
      links: [
        {
          label: "Try Jasper Out For Free!",
          url: "https://www.jasper.ai/?fpr=robin89",
        },
      ],
    },
    {
      id: 6,
      name: "SaunaSpace",
      description:
        "Incorporate more uninterrupted reading time into your daily routine while also practising self-care. Why do we love it? Because we can kill two birds with one stone: have health and wellness while furthering our writing and business. SaunaSpace products are all made from incredible quality materials.",
      image: saunaspaceImg,
      links: [
        {
          label: "Check Out SaunaSpace's Red Light Options",
          url: "https://sauna.space/?sca_ref=2176773.0lwwF356OS",
        },
      ],
    },
    {
      id: 7,
      name: "SiteGround",
      description:
        "Set up your author website with the fastest and most reliable website hosting server out there. This very website is hosted with SiteGround! Why do we love it? Because it's simple! Also, we can host multiple websites on the same server along with an unlimited number of subdomains. The customer service is phenomenal.",
      image: sitegroundImg,
      links: [
        {
          label: "View SiteGround's Plans",
          url: "https://www.siteground.com/web-hosting.htm?afimagecode=608d830ccbe49aa94e1e26160e824079",
        },
      ],
    },
    {
      id: 8,
      name: "Medium",
      description:
        "If you are a writer, we highly recommend building a following on Medium. We like to call it 'YouTube for writers', because it really is exactly that. The one difference is that if you are not a member, you can only view up to three articles per month. For less than a cup of coffee, you can become a member and read & write an unlimited number of posts, build a following, and get paid for it!",
      image: mediumImg,
      links: [
        {
          label: "Join Medium For Less Than A Coffee/Month",
          url: "https://robinnemesszeghy.medium.com/membership",
        },
      ],
    },
    {
      id: 9,
      name: "CTA (Coach Training Alliance)",
      description:
        "Now we know what you might be thinking: What does coaching have to do with writing? The answer is: More than you think! Coaching is a useful skill to have paired with any field you are in. It's a valuable skill to learn how to effectively coach people. CTA is a great one to start with if you don't have the funds yet for Author Accelerator or if you want a more broad approach.",
      image: ctaImg,
      links: [
        {
          label: "View The CTA Program",
          url: "https://www.coachtrainingalliance.com/",
        },
      ],
    },
    {
      id: 10,
      name: "Scrivener",
      description:
        "Scrivener is a staple for many. It's a word-processing program and outliner designed for writers of all kinds: novelists, screenwriters, non-fiction writers, students, academics, and more. Scrivener provides a management system for documents, notes, and metadata. This allows the user to organize notes, concepts, research, and whole documents for easy access and reference.",
      image: scrivenerImg,
      links: [
        {
          label: "30-Day Free Trial Of Scrivener!",
          url: "https://www.literatureandlatte.com/scrivener-affiliate.html?fpr=robin",
        },
      ],
    },
    {
      id: 11,
      name: "Freewrite",
      description:
        "The Freewrite series of devices are known as the best modern distraction-free devices on the market today. You can think of them like electronic typewriters (since that's essentially what they are).",
      image: freewriteImg,
      links: [
        {
          label: "Check Out Freewrite Devices",
          url: "https://getfreewrite.com/?rstr=12007",
        },
      ],
    },
    {
      id: 12,
      name: "Publisher Rocket",
      description:
        "Publisher Rocket helps you get your book in front of more Amazon shoppers by finding the best keywords for your book. It basically lets you see all the ways you can increase your sales. It gives you real data that shows you exactly what Amazon customers type into Amazon, as well as how many people search for those keywords every month.",
      image: publisherRocketImg,
      links: [
        {
          label: "Get Publisher Rocket",
          url: "https://robinnem--rocket.thrivecart.com/publisher-rocket/",
        },
      ],
    },
    {
      id: 13,
      name: "FirstEditing",
      description:
        "If you are looking for a professional human editor to take a look at your finished manuscript before pushing it out to public eyes, look no further. FirstEditing is a professional editing service based in Orlando, Florida. You can send them a short 5,000 word sample of your work and they will assign one editor to you.",
      image: firstEditingImg,
      links: [
        {
          label: "Get Your Free Quote",
          url: "https://affiliate.firstediting.com//idevaffiliate.php?id=165",
        },
      ],
    },
    {
      id: 14,
      name: "Plottr",
      description:
        "This is our favorite book plotting tool, and it's one of the best we've come across! We like to use this in conjunction with Fictionary, AutoCrit, and ProWritingAid, and it's the first step of our book planning and outlining process. This handy tool is relatively inexpensive and pretty straightforward to get started with.",
      image: plottrImg,
      links: [
        {
          label: "Try Plottr Out With A Free Trial!",
          url: "https://plottr.com/?ref=478",
        },
      ],
    },
    {
      id: 15,
      name: "QuickWrite",
      description:
        "This tool is the true AI assistant for writers! It has been created specifically for writers, both fiction and nonfiction. It's currently the cheapest option out there for AI writing tools, since they are allowing us to offer you lifetime access for less than $200! This is a real steal.",
      image: quickwriteImg,
      links: [
        {
          label: "Get Lifetime Access To QuickWrite!",
          url: "https://www.quickwrite.ai/what-do-you-write/?orid=777928&opid=67",
        },
      ],
    },
    {
      id: 16,
      name: "QuillBot",
      description:
        "We like to call this handy writing tool 'ProWritingAid Plus', since that's exactly what it is! It's great as an editor in itself—it can rewrite, expand, shorten, simplify, and even professionalize the text you've written. It can also write alongside you via the Co-Writer.",
      image: quillbotImg,
      links: [
        {
          label: "Write Easier With QuillBot",
          url: "https://try.quillbot.com/mrutjnrk4c7y",
        },
      ],
    },
    {
      id: 17,
      name: "MockupShots",
      description:
        "In one click and less than 10 seconds, MockupShots puts your book into over 1,200 amazing settings and themed images. Get unlimited lifetime access to the largest instant book mockup archive for under $100! MockupShots features a variety of styles of images to promote and sell your book on any platform or medium.",
      image: mockupShotsImg,
      links: [
        {
          label: "Get Lifetime Access To MockupShots",
          url: "https://www.mockupshots.com/special-deal/?orid=777928",
        },
      ],
    },
    {
      id: 18,
      name: "Transformation Academy",
      description:
        "This life coaching certification program is both the cheapest and the most comprehensive coaching certification out there today. It has anything you can imagine specializing in, and for a cheaper price than any other coaching program out there. This program is great when you pair it with another one that allows you to practice what you learn.",
      image: transformationAcademyImg,
      links: [
        {
          label: "Start Your Life Coaching Journey Today",
          url: "https://store.transformationacademy.com/robin",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col grow bg-white">
      {/* Hero Section - Now full height with bouncing arrow */}
      <section className="bg-slate-50 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-20 px-6 lg:px-8 border-b border-gray-200 text-center relative">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Recommended Resources
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Over the years, we have tested dozens of writing, editing, and
            business tools. Below is a curated list of the resources we
            personally use and highly recommend for authors looking to grow
            their platform.
          </p>

          {/* FTC Disclosure */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-2xl mx-auto shadow-sm mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">
              Affiliate Disclosure
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Some of the links below are affiliate links. This means that, at
              zero cost to you, Little Red Bird Publishing will earn an
              affiliate commission if you click through the link and finalize a
              purchase. We only recommend products or services that we believe
              will add value to our authors.
            </p>
          </div>
        </div>

        {/* Bouncing Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a
            href="#resources-grid"
            className="flex flex-col items-center text-gray-400 hover:text-red-800 transition-colors animate-bounce"
          >
            <span className="text-xs uppercase tracking-widest font-semibold mb-2">
              Explore Resources
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

      {/* Affiliates Grid */}
      <section
        id="resources-grid"
        className="py-24 px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {affiliates.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Banner Image */}
              <div className="bg-slate-100 aspect-[2/1] relative border-b border-gray-100 p-6 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 grow">
                  {item.description}
                </p>

                {/* Dynamically render multiple buttons if applicable */}
                <div className="flex flex-col gap-3">
                  {item.links.map((linkObj, idx) => (
                    <a
                      key={idx}
                      href={linkObj.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-center w-full rounded-md bg-slate-900 px-4 py-3 text-xs font-bold text-white shadow-sm hover:bg-red-800 transition-colors uppercase tracking-widest"
                    >
                      {linkObj.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
