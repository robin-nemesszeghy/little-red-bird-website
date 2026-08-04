// IMPORT ALL IMAGES FROM THE COVERS FOLDER
import badBloodCyoa from "../assets/covers/bad-blood-cyoa.png";
import badBlood from "../assets/covers/bad-blood.jpg";
import beTheInstrument from "../assets/covers/be-the-instrument.jpg";
import behindTheFirewall from "../assets/covers/behind-the-firewall.jpg";
import bennysStory from "../assets/covers/bennys-story.jpg";
import convergencePoint from "../assets/covers/convergence-point.jpg";
import darkSpeculationsVol1 from "../assets/covers/dark-speculations-vol-1.jpg";
import darkSpeculationsVol2 from "../assets/covers/dark-speculations-vol-2.jpg";
import fWordFaith from "../assets/covers/f-word-faith.jpg";
import fWordForgiveness from "../assets/covers/f-word-forgiveness.jpg";
import followTheFirstborn from "../assets/covers/follow-the-firstborn.jpg";
import fracturedCode from "../assets/covers/fractured-code.jpg";
import humanNature from "../assets/covers/human-nature.jpg";
import itsReallyColdMa from "../assets/covers/its-really-cold-ma.jpg";
import killingJar from "../assets/covers/killing-jar.jpg";
import lifeGoesOn from "../assets/covers/life-goes-on.png";
import lifeStory from "../assets/covers/life-story.jpg"; // <-- Newly added image import
import myGodIsSoBig from "../assets/covers/my-god-is-so-big.png";
import myTailoredJourney from "../assets/covers/my-tailored-journey.jpg";
import outOfTheDarkness from "../assets/covers/out-of-the-darkness.jpg";
import shadowsOfJustice from "../assets/covers/shadows-of-justice.jpg";
import shatteredRealities from "../assets/covers/shattered-realities.jpg";
import theBoathouse1 from "../assets/covers/the-boathouse-1.png";
import theBoathouse2 from "../assets/covers/the-boathouse-2.png";
import toPurrWithLove from "../assets/covers/to-purr-with-love.jpg";

export const booksData = [
  // --- SCIENTIST & GIRL SERIES ---
  {
    id: 1,
    title: "Bad Blood (Choose Your Own Story)",
    author: "Robin Nemesszeghy",
    image: badBloodCyoa,
    amazonLink: "https://mybook.to/BadBloodCYOA",
    genre: "YA / Fantasy",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Benny's Story",
    author: "Robin Nemesszeghy",
    image: bennysStory,
    amazonLink: "https://mybook.to/BennyStory",
    genre: "YA / Fantasy",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Bad Blood",
    author: "Robin Nemesszeghy",
    image: badBlood,
    amazonLink: "https://mybook.to/BadBloodAdventure",
    genre: "YA / Fantasy",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Killing Jar",
    author: "Robin Nemesszeghy",
    image: killingJar,
    amazonLink: "https://mybook.to/KillingJar",
    genre: "YA / Fantasy",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Human Nature",
    author: "Robin Nemesszeghy",
    image: humanNature,
    amazonLink: "https://mybook.to/HumanNatureAdventure",
    genre: "YA / Fantasy",
    isFeatured: true,
  },

  // --- THRILLER / SUSPENSE ---
  {
    id: 6,
    title: "The Boathouse (Original)",
    author: "Robin Nemesszeghy",
    image: theBoathouse1,
    amazonLink: "https://mybook.to/TheBoathouse",
    genre: "Thriller / Suspense",
    isFeatured: false,
  },
  {
    id: 7,
    title: "The Boathouse",
    author: "Robin Nemesszeghy",
    image: theBoathouse2,
    amazonLink: "https://mybook.to/TheBoathouseBook",
    genre: "Thriller / Suspense",
    isFeatured: true,
  },

  // --- MEMOIRS / BIOGRAPHIES ---
  {
    id: 8,
    title: "My Tailored Journey",
    author: "Rebekah Heishman",
    image: myTailoredJourney,
    amazonLink: "https://mybook.to/MyTailoredJourney",
    genre: "Memoir",
    isFeatured: true,
  },
  {
    id: 9,
    title: "Out of the Darkness",
    author: "Laura West",
    image: outOfTheDarkness,
    amazonLink: "https://mybook.to/MalekaWestStory",
    genre: "Memoir",
    isFeatured: true,
  },
  {
    id: 10,
    title: "My God Is So Big",
    author: "Brianna Wolfe",
    image: myGodIsSoBig,
    amazonLink: "https://mybook.to/MyGodIsBig",
    genre: "Memoir",
    isFeatured: false,
  },
  {
    id: 11,
    title: "It's Cold, Ma, It's Really Cold",
    author: "Attila Vágó",
    image: itsReallyColdMa,
    amazonLink: "https://mybook.to/ItsColdMa",
    genre: "Memoir",
    isFeatured: true,
  },
  {
    id: 12,
    title: "Life Goes On",
    author: "Holly Crichton",
    image: lifeGoesOn,
    amazonLink: "https://mybook.to/LifeGoesOn",
    genre: "Memoir",
    isFeatured: true,
  },
  {
    id: 26,
    title: "A Piece of My Life Story",
    author: "Blessing Johansson",
    image: lifeStory,
    amazonLink: "https://mybook.to/LifeStory",
    genre: "Memoir",
    isFeatured: false,
  },

  // --- ANTHOLOGIES / HORROR ---
  {
    id: 13,
    title: "Dark Speculations: Volume I",
    author: "Little Red Bird Publishing",
    image: darkSpeculationsVol1,
    amazonLink: "https://mybook.to/DarkSpeculationsV1",
    genre: "Anthology / Horror",
    isFeatured: true,
  },
  {
    id: 14,
    title: "Dark Speculations: Volume II",
    author: "Little Red Bird Publishing",
    image: darkSpeculationsVol2,
    amazonLink: "https://mybook.to/DarkSpeculationsV2",
    genre: "Anthology / Horror",
    isFeatured: false,
  },
  {
    id: 25,
    title: "Dark Speculations: Volume III",
    author: "Little Red Bird Publishing",
    image: "https://via.placeholder.com/400x600/000000/FFFFFF?text=Coming+Soon",
    amazonLink: "#",
    genre: "Anthology / Horror",
    isFeatured: false,
    isComingSoon: true,
  },

  // --- SCI-FI / TECHNOTHRILLER (ECHO PROTOCOL SERIES) ---
  {
    id: 15,
    title: "Convergence Point",
    author: "Robin Nemesszeghy",
    image: convergencePoint,
    amazonLink: "https://mybook.to/ConvergencePoint",
    genre: "Sci-Fi / Technothriller",
    isFeatured: true,
  },
  {
    id: 16,
    title: "Shadows of Justice",
    author: "Robin Nemesszeghy",
    image: shadowsOfJustice,
    amazonLink: "https://mybook.to/ShadowsOfJustice",
    genre: "Sci-Fi / Technothriller",
    isFeatured: false,
  },
  {
    id: 17,
    title: "Fractured Code",
    author: "Robin Nemesszeghy",
    image: fracturedCode,
    amazonLink: "https://mybook.to/FracturedCode",
    genre: "Sci-Fi / Technothriller",
    isFeatured: false,
  },
  {
    id: 18,
    title: "Shattered Realities",
    author: "Robin Nemesszeghy",
    image: shatteredRealities,
    amazonLink: "https://mybook.to/ShatteredRealities",
    genre: "Sci-Fi / Technothriller",
    isFeatured: false,
  },
  {
    id: 19,
    title: "Behind the Firewall",
    author: "Robin Nemesszeghy",
    image: behindTheFirewall,
    amazonLink: "https://mybook.to/BehindTheFirewall",
    genre: "Sci-Fi / Technothriller",
    isFeatured: false,
  },

  // --- NON-FICTION / SELF-HELP / SPIRITUAL ---
  {
    id: 20,
    title: "Be the Instrument",
    author: "Doug Giesler",
    image: beTheInstrument,
    amazonLink: "https://mybook.to/BeTheInstrument",
    genre: "Non-Fiction",
    isFeatured: true,
  },
  {
    id: 21,
    title: "The F Word: Faith",
    author: "Doug Giesler",
    image: fWordFaith,
    amazonLink: "https://mybook.to/TheFWordFaith",
    genre: "Spiritual",
    isFeatured: false,
  },
  {
    id: 22,
    title: "The F Word: Forgiveness",
    author: "Doug Giesler",
    image: fWordForgiveness,
    amazonLink: "https://mybook.to/TheFWordForgiveness",
    genre: "Spiritual",
    isFeatured: false,
  },
  {
    id: 23,
    title: "Follow the Firstborn",
    author: "Jon Farmer",
    image: followTheFirstborn,
    amazonLink: "https://mybook.to/FollowTheFirstborn",
    genre: "Spiritual",
    isFeatured: false,
  },

  // --- CHILDREN'S BOOKS ---
  {
    id: 24,
    title: "To Purr, with Love",
    author: "Tom Candela",
    image: toPurrWithLove,
    amazonLink: "https://mybook.to/ToPurrWithLove",
    genre: "Children's",
    isFeatured: true,
  },
];
