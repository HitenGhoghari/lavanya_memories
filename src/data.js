// ============================================================
//  EVERYTHING YOU WILL EDIT MOST OFTEN IS IN THIS ONE FILE.
//  Change the text here and the whole site updates.
// ============================================================

export const SITE = {
  name: "Lavanya Memories",
  role: "Photographer",
  city: "Surat",
  region: "Gujarat, India",
  email: "lavanyamemories@gmail.com",
  phone: "+91 7391826450",
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
    img: "vishal02",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "vishal03",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "vishal04",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "vishal05",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "vishal06",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "vishal07",
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

// Turns 'cloud-line' into the path the browser should load.
export function photoSrc(name) {
  return "/images/" + name + ".jpg";
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
      "vishal01",
      "vishal02",
      "vishal03",
      "vishal04",
      "vishal05",
      "vishal06",
      "vishal07",
    ],
  },
  {
    slug: "kedarnath-in-the-dark",
    type: "Photography",
    title: "Kedarnath, in the dark",
    location: "Kedarnath",
    year: 2025,
    cover: "kedarnath-night",
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
  // {
  //   id: "OB3EPjnSMhQ",
  //   title: "PIYUSH & HIRAL",
  // },
  // {
  //   id: "rn-kLdfsFpg",
  //   title: "Kishan x Jyoti",
  // },
  // {
  //   id: "cK3IanMkN5w",
  //   title: "PIYUSH & HIRAL",
  // },
];

// ============================================================
//  TESTIMONIALS – shown on the home page just above About
// ============================================================
export const TESTIMONIALS = [
  {
    name: "Aakash & Laveena",
    image: "vishal01", // Replace with your actual image file name
    projectSlug: "Vishal-Trupti",
    text: `A Heartfelt Thank You to Raveeraj & Moonlight Pictures

I happened to discover Raveeraj on Instagram while I was searching for a wedding photographer. I was in touch with a few others at the time, but something about his work and energy stood out. After a few chats on IG, we got on a call - and what was meant to be a quick conversation quickly turned into a lengthy conversation filled with creative ideas and shared excitement. A few months later, when we met again, it felt like meeting an old friend. That's the kind of warmth and generosity Raveeraj brings with him. His creativity, calm energy instantly clicked with me.

Fast forward to today—he's not just my wedding photographer, he's a wonderful friend. We still connect once or twice a month, and I genuinely hope this bond continues for life.

As for the experience itself—it was outstanding. Raveeraj and his incredible team covered multiple events for us, and each one was executed with perfection and attention to the smallest detail. I never felt there was a gap in their work; everything was seamless, professional, and more importantly, full of heart.

Thank you, Moonlight Pictures, for delivering a masterpiece that I'll cherish for the rest of my life. These aren't just photos or videos—they're memories I'll hold onto forever.

With all my heart,`,
    signature: "Aakash Singh"
  },
  {
    name: "Kalrav & Urvi",
    image: "vishal02", // Replace with your actual image
    projectSlug: "the-road-that-bends",
    text: `To,
The artists who see love through a lens and capture it with amaze!!! How do you guys manage to be so precise in capturing every couple exactly as they are; their love and their unspoken understanding? It's truly magical. The way you portrayed us, not just as a couple, but as two people who deeply know and feel each other is something we will treasure forever.
You didn't just document our wedding; you told our story. Every smile, your slice, you patte me, ent you no pted. ee. ad morpust est yoor dee. That make you stand out
You don't just take pictures, you see people. You see emotions. You see love in its purest form and turn it into timeless art.
We feel so lucky to have had you be a part of our most special day. Thank you for not just doing your job, but pouring your heart into it. You truly have a rare vision, and we appreciate it.
With all our gratitude.`,
    signature: "Kalrav Patel"
  },
  {
    name: "Vijay & Nidhi",
    image: "vishal03",
    projectSlug: "Vishal-Trupti",
    text: `Moonlight Pictures absolutely nailed it!!!!

The pre-wedding film still gives us goosebumps, it felt like a real movie, but somehow still us. The way they captured the emotions, the vibe, the fun... everything was just perfect. Every frame felt personal, every shot felt like it had a heartbeat. We've watched it so many times and still can't get over it!! It's not just a video, it's a memory machine we keep going back to.

The photography was stunning too, every shot felt alive, nothing felt forced. From stolen glances to random laughs, they caught it all without ever making us feel like we were posing. Just pure moments, exactly how we'd want to remember them.

And the wedding film... emotional, raw, real. It felt like reliving those days all over again! Not just the big moments, but the small ones we didn't even realize mattered so much! they're all in there. It felt like watching our story through the eyes of someone who really understood us.

Big love to Raveeraj bhai, Nijuni bhai, and Manish bhai you guys didn't just shoot a wedding, you told our story. With so much heart, so much creativity, and so much honesty.

Couldn't have asked for a better team.`,
    signature: "Vijay Joshi"
  },
  {
    name: "Aishwarya & Srikrishnan",
    image: "vishal04",
    projectSlug: "kedarnath-in-the-dark",
    text: `YOU HAVE GOT TO HIRE THEM FOR ALL YOUR SPECIAL OCCASIONS. The kind of work they've done is unbelievable. They've created a magic out of the pictures and videos from my wedding day. Just hire them already. Thank you to the team of moonlight pictures for doing this for us. Truly appreciate you guys.`,
    signature: "Aishwarya Srikrishnan"
  },
  {
    name: "Devanshi & Prag",
    image: "vishal05",
    projectSlug: "the-ridge-above-chopta",
    text: `You guys have captured our stories so beautifully. It's surreal how you have been able to pick the right words to describe our wedding journey and show our happiness, you guys are so good at your job. All our wedding pictures look straight out of a fairytale because our romance "with the camera" clearly sucked (haha). Thank you to each one of you for making our special moment extra special!`,
    signature: "Devanshi Patel"
  },
  {
    name: "Rithwik & Tejasree",
    image: "vishal06",
    projectSlug: "tungnath-before-the-rain",
    text: `The best in town and out there. We had our wedding in Melbourne, Victoria and they flew there, handled everything so beautifully at the wedding. Their understanding of our needs, the planning, execution and efforts are a certain highlight of this team. Do not hesitate to choose Moonlight for your special occasions. Thank you for the memories guys!!!!!`,
    signature: "Rithwik Goud"
  },
  {
    name: "Tejasree & Rithwik",
    image: "vishal07",
    projectSlug: "rest-in-pahad",
    text: `Firstly, a big big thank you to each and everyone who worked with us from Moonlight Pictures. We couldn't have asked for a more perfect photographer to capture our special day! From start to finish, they were incredibly professional, attentive, and creative. Every moment—big and small—was captured beautifully, with so much attention to detail. Our sneak peeks were absolutely stunning, and looking at them brought us right back to all the emotions of our wedding day. We're beyond grateful for their talent and dedication. Highly recommend to anyone looking for wedding photography. They will not only meet but exceed your expectations!
P.S. The team is extremely kind, great listeners, and super easy to work with. The service is impeccable and we will definitely 100% be hiring them for our next events! Also check out their impeccable instagram page!`,
    signature: "Tejasree Rithwik"
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
