// ============================================================
//  EVERYTHING YOU WILL EDIT MOST OFTEN IS IN THIS ONE FILE.
//  Change the text here and the whole site updates.
// ============================================================

export const WEB3FORMS_KEY = "b7b38818-21d3-46c9-b3f7-66384a955031";

export const SITE = {
  name: "Lavanya Memories",
  role: "Photographer",
  city: "Surat",
  region: "Gujarat, India",
  email: "lavanyamemories14@gmail.com",
  phone: "+91 8140392806",
  instagram:
    "https://www.instagram.com/lavanya_memories_?stkn=Zmk0MHRscjZ6aHdp",
  youtube: "https://www.youtube.com/@lavanyamemories14",
  year: 2026,
};

// Photo files live in /public/images/. The `img` value is the file name
// without .jpg — for example 'cloud-line' means /images/cloud-line.jpg
export const PHOTOS = [
  {
    img: "vishal01",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "LAVANYA_33_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "LAVANYA_70_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "LAVANYA_333_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "LAVANYA_61_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "LAVANYA_81_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "LAVANYA_67_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "LAVANYA_7_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "LAVANYA_220_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "LAVANYA_215_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "kedarnath-night",
    title: "Night at the shrine",
    place: "Kedarnath",
  },
  {
    img: "blue-hour-ridge",
    title: "Blue hour on the ridge",
    place: "Kedarnath",
  },
  {
    img: "cloud-line",
    title: "The cloud line",
    place: "Garhwal",
  },
  {
    img: "above-the-treeline",
    title: "Above the treeline",
    place: "Chopta",
  },
  {
    img: "fire-and-stone",
    title: "Fire and stone",
    place: "Kedarnath",
  },
  {
    img: "road-that-bends",
    title: "The road that bends",
    place: "Chopta",
  },
  {
    img: "camp-below-peaks",
    title: "Camp below the peaks",
    place: "Kedarnath",
  },
  {
    img: "sitting-with-it",
    title: "Sitting with it",
    place: "Chopta",
  },
  {
    img: "snow-behind",
    title: "Snow behind the roof",
    place: "Kedarnath",
  },
  {
    img: "prayer-flags",
    title: "Prayer flags, no hurry",
    place: "Garhwal",
  },
  {
    img: "one-walker",
    title: "One walker, whole valley",
    place: "Chopta",
  },
  {
    img: "stone-on-ridge",
    title: "Stone on the ridge",
    place: "Tungnath",
  },
  {
    img: "rest-in-pahad",
    title: "Rest in pahad",
    place: "Chopta",
  },
  {
    img: "small-shrine",
    title: "The small shrine",
    place: "Kedarnath",
  },
  {
    img: "waiting-outside",
    title: "Waiting outside",
    place: "Kedarnath",
  },
  {
    img: "tungnath",
    title: "Tungnath, before the rain",
    place: "Tungnath",
  },
  {
    img: "the-stop",
    title: "The stop on the way",
    place: "On the road",
  },
];

// ============================================================
//  CLOUDINARY
//  Paste your Cloud name below (from your Cloudinary dashboard).
// ============================================================

const CLOUD_NAME = "p4bs69b5";
const CLOUD_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// Photos — auto WebP, auto quality, capped at 1600px wide
export function photoSrc(name) {
  return `${CLOUD_BASE}/q_auto,f_auto,w_1600/${name}.jpg`;
}

// Assets (logos, icons) — auto WebP, auto quality, original size
export function assetSrc(name) {
  return `${CLOUD_BASE}/q_auto,f_auto/${name}`;
}

export const PORTRAIT = "small-shrine"; // photo used in the About section

// Full write-ups shown on /photography, /editorial and each /project/<slug>
// page. Reuses the same photos already in PHOTOS above, grouped into stories.
export const PROJECTS = [
  {
    slug: "Vishal-Trupti",
    type: "Photography",
    title: "Vishal&Trupti",
    location: "Surat",
    year: 2024,
    cover: "vishal01",
    description:
      "The temple after the crowd thins out - lit by fire, not floodlight, for the last few hours before the gates close.",
    photos: [
      "LAVANYA_33_copy",
      "LAVANYA_70_copy",
      "LAVANYA_333_copy",
      "LAVANYA_61_copy",
      "LAVANYA_81_copy",
      "LAVANYA_67_copy",
      "LAVANYA_7_copy",
      "LAVANYA_220_copy",
      "LAVANYA_215_copy",
    ],
  },
  {
    slug: "sunil-vaishali",
    type: "Photography",
    title: "Sunil&Vaishali",
    location: "Surat",
    year: 2025,
    cover: "sunil01",
    description:
      "The temple after the crowd thins out - lit by fire, not floodlight, for the last few hours before the gates close.",
    photos: [
      "kedarnath-night",
      "fire-and-stone",
      "snow-behind",
      "small-shrine",
    ],
  },
  {
    slug: "the-ridge-above-chopta",
    type: "Photography",
    title: "The ridge above Chopta",
    location: "Chopta",
    year: 2025,
    cover: "blue-hour-ridge",
    description:
      "Four hours above the treeline, where the valley opens up and the only sound left is wind.",
    photos: ["blue-hour-ridge", "cloud-line", "one-walker", "camp-below-peaks"],
  },
  {
    slug: "tungnath-before-the-rain",
    type: "Photography",
    title: "Tungnath, before the rain",
    location: "Tungnath",
    year: 2025,
    cover: "tungnath",
    description:
      "A short window of clear sky at the highest Shiva temple in the world, before the cloud came back in.",
    photos: ["tungnath", "stone-on-ridge"],
  },
  {
    slug: "rest-in-pahad",
    type: "Editorial",
    title: "Rest in pahad",
    location: "Chopta",
    year: 2025,
    cover: "rest-in-pahad",
    description:
      "Portraits shot between the walking, not during it - the ten minutes people actually sit still.",
    photos: ["rest-in-pahad", "sitting-with-it", "waiting-outside"],
  },
  {
    slug: "the-road-that-bends",
    type: "Editorial",
    title: "The road that bends",
    location: "On the road",
    year: 2025,
    cover: "road-that-bends",
    description:
      "The drive counts as part of the trip. This is what it looked like.",
    photos: ["road-that-bends", "the-stop", "prayer-flags"],
  },
];

// ============================================================
//  YOUTUBE VIDEOS – shown on the home page Films section
//  Replace id with your actual YouTube video IDs.
//  Example: for https://www.youtube.com/watch?v=abc123, id = "abc123"
// ============================================================
export const YOUTUBE_VIDEOS = [
  {
    id: "VWZynbpZuAc", // placeholder – replace with your video ID
    title: "PIYUSH & HIRAL",
  },
  {
    id: "6jrNHEhnd1c",
    title: "Kishan x Jyoti",
  },
  {
    id: "OB3EPjnSMhQ",
    title: "PIYUSH & HIRAL",
  },
  {
    id: "rn-kLdfsFpg",
    title: "Kishan x Jyoti",
  },
  {
    id: "cK3IanMkN5w",
    title: "PIYUSH & HIRAL",
  },
];

// ============================================================
//  TESTIMONIALS – shown on the home page just above About
// ============================================================
export const TESTIMONIALS = [
  {
    name: "Piyush & Hiral",
    image: "KU_04760_copy",
    projectSlug: "rest-in-pahad",
    text: `We cannot thank the team at Lavanya Memories enough for capturing our engagement so beautifully. From the very first click, they made us feel incredibly comfortable, allowing our true chemistry to shine through effortlessly. The photos and the teaser film are absolute magic—they perfectly encapsulate the excitement, love, and anticipation of this new chapter in our lives. Every single frame feels so authentic and true to who we are as a couple. If this is how our engagement turned out, we simply cannot wait for the wedding! Thank you for giving us the most beautiful start to our forever.`,
    signature: "Piyush Jikadara"
  },
  {
    name: "Vishal & Trupti",
    image: "vishal01", // Replace with your actual image file name
    projectSlug: "Vishal-Trupti",
    text: `Booking Lavanya Memories for our engagement was simply the best decision we made to kick off our wedding journey. We were initially a little camera-shy, but the team’s calm and friendly energy instantly put us at ease. They didn't force us into stiff poses; instead, they let us just be ourselves and somehow captured the exact magic of our relationship. The photos and the short film are filled with genuine laughter, quiet glances, and so much love. Looking at the final gallery feels like reliving that beautiful day all over again. Thank you, Lavanya Memories, for giving us the most perfect memories to hold onto forever!`,
    signature: "Vishal Ghoghari"
  },
  {
    name: "Sunil & Vaishali",
    image: "sunil01",
    projectSlug: "kedarnath-in-the-dark",
    text: `We are endlessly grateful to Lavanya Memories for capturing our baby shower with so much tenderness and care. As we prepare to welcome our little one, this milestone meant the world to us, and the team documented it perfectly. They focused on the raw emotions, the happy tears, and the overwhelming love radiating from our family and friends. None of the photos feel staged or forced; they just reflect pure, genuine anticipation. We will cherish these beautiful memories forever as we step into this new chapter of parenthood. Thank you for giving us a treasure we can one day share with our baby!`,
    signature: "Sunil Kachariya"
  },
  {
    name: "Dharmesh & Kirti",
    image: "kdk01", // Replace with your actual image
    projectSlug: "the-road-that-bends",
    text: `We couldn't be happier with how Lavanya Memories captured our baby shower. This is such a monumental milestone for us as we prepare to welcome our little one, and the team managed to document every ounce of love, anticipation, and joy in the room. They perfectly caught the intimate, candid moments with our family and friends without making anything feel posed or unnatural. Looking at these beautiful photos brings back all the happy tears and excitement we felt that day. Thank you for giving us such precious memories that we will one day share with our baby!`,
    signature: "Dharmesh Kalsariya"
  },
  {
    name: "Kishan & Jyoti",
    image: "kishan01",
    projectSlug: "Vishal-Trupti",
    text: `Choosing Lavanya Memories for our engagement was an absolute blessing. We wanted our photos to reflect our true bond without looking overly staged, and the team delivered exactly that. They created such a relaxed and fun atmosphere that we completely forgot the cameras were even there. From our nervous smiles before the ring exchange to the joyous celebrations with our families, every moment was captured with such incredible warmth and authenticity. We are so in love with our gallery and cannot thank you enough for preserving our first step toward forever so beautifully.`,
    signature: "Kishan Pandav"
  }
];

// ============================================================
//  INSTAGRAM SECTION – shown on the home page below Testimonials
//  Replace `img` with your actual Instagram image filenames.
//  Set `isVideo: true` if the post has a video (adds a play icon).
// ============================================================
export const INSTAGRAM_PROFILE = {
  username: "lavanya_memories_",
  bio: "create memories • love the details",
  avatar: "webicon.png", // Put your avatar in /public/images/ with this name
};

// ============================================================
//  INSTAGRAM FEED URL
//  Get a free JSON feed URL from https://behold.so/ or https://rss.app/
//  Paste it here. The feed MUST return an array of objects with
//  `media_url`, `permalink`, and `media_type` (e.g., "IMAGE", "VIDEO").
//  If left empty (""), the site will fall back to your manual list below.
// ============================================================
export const INSTAGRAM_FEED_URL = "https://feeds.behold.so/Fu4YEJheRXSbBWuBroiO"; // <-- Paste your feed URL here

export const INSTAGRAM_POSTS = [
  { img: "vishal01", isVideo: true },
  { img: "vishal02", isVideo: false },
  { img: "vishal03", isVideo: false },
  { img: "vishal04", isVideo: false },
  { img: "vishal05", isVideo: false },
  { img: "vishal06", isVideo: false },
  { img: "vishal07", isVideo: false },
  { img: "kedarnath-night", isVideo: false },
  { img: "blue-hour-ridge", isVideo: false },
  { img: "cloud-line", isVideo: false },
  { img: "above-the-treeline", isVideo: false },
  { img: "fire-and-stone", isVideo: false },
];

// ============================================================
//  EDITORIAL MOSAIC — full-bleed grid shown on /editorial
//  Order matters: it flows left-to-right, top-to-bottom.
//  Mix portrait (tall) and landscape (wide) for the best look.
// ============================================================
export const EDITORIAL_MOSAIC = [
  "vishal01", "kedarnath-night", "blue-hour-ridge", "vishal02",
  "fire-and-stone", "one-walker", "vishal03", "cloud-line",
  "vishal04", "tungnath", "sitting-with-it", "road-that-bends",
  "vishal05", "snow-behind", "camp-below-peaks", "vishal06",
  "vishal07", "small-shrine", "waiting-outside", "the-stop",
  "above-the-treeline", "prayer-flags", "rest-in-pahad", "stone-on-ridge",
];

// Shown on the /faq page as an accordion. Edit the wording freely -
// these are placeholder answers written to match the rest of the
// placeholder text already in SERVICES above.
export const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "For a trek or a multi-day trip, 3-4 weeks ahead is safest, especially in peak season (April-June and September-November). Portrait sessions can usually be arranged within a week.",
  },
  {
    q: "Do you travel outside Gujarat?",
    a: "Yes. Most of the work on this page is from Uttarakhand. Travel and stay are billed separately from the day rate - tell me the dates and location and I will quote both together.",
  },
  {
    q: "How many edited photos do I get?",
    a: "It depends on the length of the shoot, not a fixed number. A single portrait session is usually 20-30 edited frames; a multi-day trip is usually 200+. We agree a rough number before the day.",
  },
  {
    q: "How long does editing take?",
    a: "Portraits: about a week. Travel and trek coverage: 10-14 days, since there is simply more to go through.",
  },
  {
    q: "Can I get the raw, unedited files?",
    a: "On request, for an additional fee. Most people find the edited set is what they actually wanted.",
  },
  {
    q: "Do you sell prints?",
    a: "Yes, of any frame shown on this site. See the Prints service above for paper and size options.",
  },
];
