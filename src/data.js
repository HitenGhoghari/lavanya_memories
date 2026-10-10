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
    img: "KU_05031",
    title: "Piyush-Hiral",
    place: "Surat",
  },
  {
    img: "vishal01",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "KU_06356",
    title: "Dharmesh-Kirti",
    place: "Surat",
  },
  {
    img: "KU_04609_copy",
    title: "Kishan-Jyoti",
    place: "Surat",
  },
  {
    img: "KU_03400_copy",
    title: "Sunil-Vaishali",
    place: "Surat",
  },

  {
    img: "KU_04869",
    title: "Piyush-Hiral",
    place: "Surat",
  },
  {
    img: "LAVANYA_67_copy",
    title: "Vishal-Trupti",
    place: "Surat",
  },
  {
    img: "KU_06344",
    title: "Dharmesh-Kirti",
    place: "Surat",
  },
  {
    img: "KU_04864_copy",
    title: "Kishan-Jyoti",
    place: "Surat",
  },
  {
    img: "KU_03361_copy",
    title: "Sunil-Vaishali",
    place: "Surat",
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
  // return `${CLOUD_BASE}/${name}.jpg`;
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
    slug: "Piyush-Hiral",
    type: "Photography",
    title: "Piyush&Hiral",
    location: "Surat",
    year: 2025,
    cover: "piyush_cover",
    description:
      "",
    story: [
      "At Lavanya Memories, we believe that the most profound love stories are often told in the quietest moments. In this beautifully captured frame, bathed in the soft, glowing light of the evening, time seems to stand entirely still for these two souls. The intricate, sparkling details of her flowing cape gown and the elegant embroidery of his dark attire are illuminated perfectly, yet it is their shared, unbroken gaze and the gentle, reassuring grasp of their hands that truly anchor the photograph. We don't just take pictures; we meticulously preserve the raw emotion, the unspoken promises, and the undeniable chemistry that makes your journey uniquely yours. This is the art of bottling up a fleeting second of pure adoration and transforming it into a timeless heirloom, ensuring that years from now, you can look back and feel the exact warmth and breathtaking magic of that very day all over again."
    ],
    photos: [
      "KU_04917",
      "PH_15",
      "PH_1",
      "jp_ai",
      "PH_14",
      "KU_02972_copy",
      "PH_6",
      "PH_16",
      "PH_5",
      "PH_10",
      "PH_3",
      "KU_02863_copy",






      "IMG_8680ai",
      "PH_7",
      "PH_4",
      "PH_2",
      "KU_02848_copy",
      "PH_13",
      "KU_04836",
      "KU_04875_copy",
      "PH_8",
      "KU_04839_copy",
      "KU_02910_copy",
      "KU_02904_copy",
      "KU_02753_copy",
      "KU_04863_copy",
      "KU_02727_copy",
      "KU_04860_copy",
      "KU_02891_copy",
      "PH_11",
      "KU_05060_copy",
      "KU_04839",
      "KU_04771_copy",
      "KU_05115",
      "KU_02732_copy",
      "KU_04863",
      "KU_04926_copy",
      "KU_02786_copy",







      "KU_02725_copy",
      "KU_02783_copy",
      "KU_02722_copy",
      "PH_12",
      "KU_02811_copy",
      "KU_04884",
      "KU_02782_copy",
      "KU_02719_copy",
      "KU_02734_copy",
      "KU_02699_copy",
      "KU_04891",
      "KU_04876",
      "KU_02724_copy",
      "KU_02815_copy",
      "KU_04878",
      "KU_04910",
      "KU_05057",
      "KU_04873",
      "KU_04893",
      "KU_04902",
      "KU_02825_copy",
      "KU_02731_copy",
      "PH_9",
      "KU_04850_copy",
      "KU_04770",
      "KU_05053",
      "KU_04765",
      "KU_04895",
      "KU_02747_copy",
      "KU_02771_copy",
      "KU_05087_copy",
      "KU_02808_copy",
      "KU_04869",
      "KU_02703_copy",
      "KU_02776_copy",
      "KU_04767",
      "KU_04947",
      "KU_05058",
      "KU_02790_copy",
      "KU_02838_copy",
      "KU_02765_copy",
      "KU_04751",
      "KU_05112",
      "KU_05094",






      "KU_04899",
      "KU_05075",
      "KU_04923",
      "KU_05031",
      "KU_05087",
      "KU_04758_copy",
      "KU_04919",
      "KU_04896",
      "KU_02823_copy",
      "KU_04913",
      "KU_04915",
      "KU_04730",
      "KU_04758",
      "KU_04749_copy",
      "KU_04760",
      "KU_04972",
      "KU_04752",
      "KU_02845_copy",
      "KU_05011_copy",
      "KU_04742",
      "KU_04736",
      "KU_04738",
      "22",
      "23",
      "18",






      "19",
      "KU_05061",
      "KU_05056",
      "KU_04948",
      "KU_04920",
      "KU_04908",
      "KU_04898",
      "KU_04872",
      "KU_04857",
      "KU_04937",
    ],
  },
  {
    slug: "Vishal-Trupti",
    type: "Photography",
    title: "Vishal&Trupti",
    location: "Surat",
    year: 2022,
    cover: "lavanya_01",
    description:
      "",
    story: [
      "At Lavanya Memories, we cherish the unscripted moments of pure, radiant joy that define a couple's unique bond. In this vibrant and heartwarming frame, the couple is captured in a beautiful, candid exchange of laughter, surrounded by the lush, natural canopy of the outdoors. Dressed in stunning, coordinated deep blue attire adorned with exquisite silver and white detailing, their vibrant energy is the undeniable focal point of the image. It is the gentle, protective embrace, the beaming smiles, and the absolute comfort they find in one another that truly brings this photograph to life. We strive to document these effortless, fleeting seconds of absolute happiness, transforming them into a timeless visual narrative so that every time you look back, you can feel the exact warmth and resounding laughter of your love story."
    ],
    photos: [
      "vishal01",
      "LAVANYA_33_copy",
      "LAVANYA_70_copy",
      "LAVANYA_333_copy",
      "LAVANYA_61_copy",
      "LAVANYA_81_copy",
      "LAVANYA_67_copy",
      "LAVANYA_7_copy",
      "LAVANYA_80_copy",
      "lavanya_004",





      "LAVANYA_220_copy",
      "LAVANYA_346_copy",
      "lavanya_08",
      "LAVANYA_195_copy",
      "lavanya_06",
      "lavanya_04",
      "lavanya_02",
      "LAVANYA_215_copy",
      "lavanya_01",
      "LAVANYA_15_copy",
      "LAVANYA_116_copy",
      "lavanya_006",




      "lavanya_005",
      "lavanya_002",
      "LAVANYA_73_copy",
      "LAVANYA_340_copy",
      "LAVANYA_294_copy",
      "LAVANYA_162_copy",
      "LAVANYA_188_copy",
      "LAVANYA_324_copy",
      "LAVANYA_229_copy",
      "LAVANYA_311_copy",
      "FINAL_02_jpg",
      "FINAL_01_jpg",
      "LAVANYA_895_copy",
    ],
  },
  {
    slug: "Sunil-Vaishali",
    type: "Photography",
    title: "Sunil&Vaishali",
    location: "Surat",
    year: 2024,
    cover: "05sunil",
    description:
      "",
    story: [
      "At Lavanya Memories, we believe there is no chapter quite as profound or beautiful as the quiet anticipation of welcoming a new life. In this tender, sunlit portrait, the gentle promise of tomorrow is captured with breathtaking serenity. Surrounded by the natural elegance of lush greenery, the couple shares an intimate, breathless moment of profound connection as they gently cradle the very center of their growing world. The vibrant, flowing textures of her stunning, ruffled pink gown beautifully complement the crisp, understated sophistication of his light shirt, while the intricate henna adorning her hands adds a deeply personal, traditional touch to this modern love story. It is the protective warmth of his embrace from behind and their shared, loving gaze downward that truly elevate this image from a simple photograph to a deeply felt emotional heirloom. We are honored to preserve these fleeting, sacred moments of pure joy and tender expectation, crafting a timeless visual legacy that allows you to revisit the overwhelming love you felt just before your greatest adventure began."
    ],
    photos: [
      "KU_03408_copy",
      "KU_03411_copy",
      "KU_03422_copy",
      "KU_03436_copy",
      "KU_03402_copy",
      "KU_03352_copy",
      "KU_03384_copy",
      "KU_03394_copy",
      "KU_03355_copy",
      "KU_03400_copy",





      "KU_03387_copy",
      "KU_03361_copy",
      "KU_03363_copy",
      "KU_03372_copy",
      "KU_04295_copy",
      "KU_03356_copy",
      "KU_04342_copy",
      "KU_04228_copy",
      "KU_03353_copy",
      "KU_04303_copy",
      "KU_04356_copy",
      "KU_04345_copy",
      "KU_04350_copy",
      "KU_04336_copy",
      "KU_04220_copy",
      "KU_04320_copy",
      "KU_04311_copy",






      "KU_04281_copy",
      "KU_04275_copy",
      "KU_04273_copy",
      "KU_04213_copy",
      "KU_04202_copy",
      "KU_04210_copy_2",
      "KU_04222_copy",
      "KU_03623_copy",
      "KU_03635_copy",
      "KU_03665_copy",
      "KU_04209_copy",
      "KU_03640_copy",
      "KU_03592_copy",
      "KU_03584_copy",
      "KU_03538_copy",
      "KU_03573_copy",
      "KU_03529_copy",





      "KU_03562_copy",
      "KU_03545_copy",
      "KU_03515_copy",
      "KU_03493_copy",
      "KU_03480_copy",
      "KU_03465_copy",
      "KU_03475_copy",
      "KU_03471_copy",
      "KU_03462_copy",
      "KU_03350_copy",
      "KU_03348_copy",
      "KU_03642_copy",
      "KU_03661_copy",
      "KU_03359_copy",
      "KU_03430_copy",
      "KU_03434_copy",





      "KU_03454_copy",
      "KU_04205_copy",
      "KU_04333_copy",
      "KU_04224_copy",
      "KU_04196_copy",
      "KU_03648_copy",
      "KU_03521_copy",
      "06",
      "KU_03489_copy",
      "21sunil",
      "17sunil",
      "23sunil",
      "20sunil",
      "18sunil",
      "22sunil",
      "13sunil",
      "02sunil",





      "16sunil",
      "08sunil",
      "15sunil",
      "12sunil",
      "04sunil",
      "09sunil",
      "KU_03542_copysunil",
      "19sunil",
      "KU_03506_copysunil",
      "KU_03503_copysunil",
      "07sunil",
      "11sunil",
      "01sunil",
      "03sunil",
      "14sunil",
      "10sunil",
      "05sunil",
      "02_storysunil",
      "01_storysunil",
    ],
  },
  {
    slug: "Dharmesh-Kirti",
    type: "Photography",
    title: "Dharmesh&Kirti",
    location: "Surat",
    year: 2024,
    cover: "KU_06428",
    description:
      "",
    story: [
      "There is a spectacular vibrancy to a love story that is just on the cusp of expanding, and capturing that bright, blossoming energy is what we do best. This stunning maternity portrait is a testament to the beauty of thoughtful, artistic framing, where a sweeping canopy of bright, sun-drenched greenery serves as a natural curtain unveiling the couple's private joy. Set along a tranquil garden pathway, the vivid, rich hues of her beautifully detailed pink and navy ensemble pop brilliantly against the lush, earthy backdrop, beautifully complemented by the refined, sophisticated charm of his white attire. Yet, what truly makes this cinematic composition sing is the effortless, comfortable stride they share and the tender, affectionate glances exchanged as they hold onto each other and their growing miracle. At Lavanya Memories, our artistic approach intertwines breathtaking natural scenery with the raw, heartfelt emotions of our couples, delivering a visually striking narrative that immortalizes the brilliant, colorful reality of your most cherished milestones."
    ],
    photos: [
      "KU_06503",
      "KU_06497",
      "KU_06501",
      "KU_06493",
      "KU_06491",
      "KU_06490",
      "KU_06488",
      "KU_06484",
      "KU_06481",
      "KU_06480",
      "KU_06467",
      "KU_06449",
      "KU_06434",





      "KU_06433",
      "KU_06428",
      "KU_06426",
      "KU_06424",
      "KU_06423",
      "KU_06418",
      "KU_06408",
      "KU_06416",
      "KU_06409",
      "KU_06407",
      "KU_06404",
      "KU_06398",
      "KU_06394",
      "KU_06384",







      "KU_06393",
      "KU_06383",
      "KU_06386",
      "KU_06381",
      "KU_06380",
      "KU_06378",
      "KU_06377",
      "KU_06373",
      "KU_06372",
      "KU_06367",
      "KU_06370",
      "KU_06368",
      "KU_06365",
      "KU_06363",
      "KU_06362",
      "KU_06361",
      "KU_06358",









      "KU_06356",
      "KU_06355",
      "KU_06347",
      "KU_06351",
      "KU_06346",
      "KU_06348",
      "KU_06344",
      "KU_06341",
      "KU_07017",
      "KU_07062",
      "KU_07048",
      "KU_07052",
      "KU_07001",
      "KU_07016",
      "KU_07009",
      "KU_07053",
      "KU_07008",
      "KU_07013",
      "KU_07047",
      "KU_07044",
      "KU_07038",
      "KU_07031",
      "KU_07021",
      "KU_07043",
      "KU_07024",
      "KU_07002",
      "KU_06998",








      "KU_07034",
      "KU_07007",
      "KU_07041",
      "KU_07023",
      "KU_07037",
      "KU_07006",
      "KU_07022",
      "KU_07042",
      "KU_07020",
      "KU_06992",
      "KU_07019",
      "post14",
      "post09",
      "KU_06990",
      "post05",
      "post17",






      "post16",
      "post13",
      "post10",
      "post08",
      "post06",
      "post04",
      "post12",
      "post02",
      "post15",
      "post07",
      "post03",
      "post01",
      "KU_06567",
      "KU_06565",
      "KU_06564",
      "KU_06562",
      "KU_06556",
      "KU_06554",







      "KU_06552",
      "KU_06550",
      "KU_06543",
      "KU_06542",
      "KU_06541",
      "KU_06539",
      "KU_06535",
      "KU_06516",
      "KU_06532",
      "KU_06531",
      "KU_06521",
      "KU_06512",
      "KU_06514",
      "KU_06510",
      "KU_06502",
      "KU_06509",
      "KU_06507",
    ],
  },
  {
    slug: "Kishan-Jyoti",
    type: "Photography",
    title: "Kishan&Jyoti",
    location: "Surat",
    year: 2025,
    cover: "KU_04696_copy",
    description:
      "",
    story: [
      "At Lavanya Memories, we believe that true romance deserves to be framed with the breathtaking grandeur of a fairy tale. In this magnificent composition, nature itself seems to bow in reverence, providing a dramatic, vibrant canopy of sweeping palm leaves to elegantly unveil the couple's private moment. Standing amidst a lush, intricately layered garden of rich greens and warm, earthy foliage, the couple is anchored entirely by their shared, loving gaze and the tender, outstretched connection of their hands. The striking contrast of their attire—her ethereal, flowing light ensemble cascading beautifully against the verdant backdrop, perfectly balanced by his sharp, regal dark silhouette—creates a visual harmony that is nothing short of cinematic. It is in these quiet, majestic moments of stillness that we find the true essence of a love story. We are devoted to capturing not just the stunning aesthetic of your celebration, but the profound, breathless emotion of standing on the edge of forever with the one you love, ensuring your legacy is preserved with the epic romance it commands."
    ],
    photos: [
      "01",
      "03",
      "KU_04713_copy",
      "KU_04646_copy",
      "KU_04647_copy",
      "KU_04710_copy",
      "KU_04627_copy",
      "KU_04639_copy",
      "KU_04895_copy",
      "KU_04660_copy",
      "KU_04694_copy",
      "KU_04903_copy",











      "KU_04788_copy",
      "KU_04788_copy",
      "KU_04897_copy",
      "KU_04599_copy",
      "KU_04925_copy",
      "KU_04950_copy",
      "KU_04692_copy",
      "KU_04696_copy",
      "KU_04855_copy",
      "KU_04691_copy",
      "KU_04602_copy",
      "KU_04841_copy",
      "KU_04951_copy",
      "KU_04609_copy",
      "KU_04785_copy",
      "02",
      "KU_04918_copy",








      "KU_04780_copy",
      "KU_04864_copy",
      "KU_04834_copy",
      "KU_04810_copy",
      "KU_04797_copy",
      "KU_04779_copy",
      "03_copy",
      "04",
      "11",
      "13",
      "12",
      "08",
      "16",
      "10",
      "09",
      "14",
      "15",
      "07",
    ],
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
    image: "piyush_cover",
    projectSlug: "Piyush-Hiral",
    text: `We cannot thank the team at Lavanya Memories enough for capturing our engagement so beautifully. From the very first click, they made us feel incredibly comfortable, allowing our true chemistry to shine through effortlessly. The photos and the teaser film are absolute magic—they perfectly encapsulate the excitement, love, and anticipation of this new chapter in our lives. Every single frame feels so authentic and true to who we are as a couple. If this is how our engagement turned out, we simply cannot wait for the wedding! Thank you for giving us the most beautiful start to our forever.`,
    signature: "Piyush Jikadara"
  },
  {
    name: "Vishal & Trupti",
    image: "lavanya_01",
    projectSlug: "Vishal-Trupti",
    text: `Booking Lavanya Memories for our engagement was simply the best decision we made to kick off our wedding journey. We were initially a little camera-shy, but the team’s calm and friendly energy instantly put us at ease. They didn't force us into stiff poses; instead, they let us just be ourselves and somehow captured the exact magic of our relationship. The photos and the short film are filled with genuine laughter, quiet glances, and so much love. Looking at the final gallery feels like reliving that beautiful day all over again. Thank you, Lavanya Memories, for giving us the most perfect memories to hold onto forever!`,
    signature: "Vishal Ghoghari"
  },
  {
    name: "Sunil & Vaishali",
    image: "05sunil",
    projectSlug: "Sunil-Vaishali",
    text: `We are endlessly grateful to Lavanya Memories for capturing our baby shower with so much tenderness and care. As we prepare to welcome our little one, this milestone meant the world to us, and the team documented it perfectly. They focused on the raw emotions, the happy tears, and the overwhelming love radiating from our family and friends. None of the photos feel staged or forced; they just reflect pure, genuine anticipation. We will cherish these beautiful memories forever as we step into this new chapter of parenthood. Thank you for giving us a treasure we can one day share with our baby!`,
    signature: "Sunil Kachariya"
  },
  {
    name: "Dharmesh & Kirti",
    image: "KU_06428",
    projectSlug: "Dharmesh-Kirti",
    text: `We couldn't be happier with how Lavanya Memories captured our baby shower. This is such a monumental milestone for us as we prepare to welcome our little one, and the team managed to document every ounce of love, anticipation, and joy in the room. They perfectly caught the intimate, candid moments with our family and friends without making anything feel posed or unnatural. Looking at these beautiful photos brings back all the happy tears and excitement we felt that day. Thank you for giving us such precious memories that we will one day share with our baby!`,
    signature: "Dharmesh Kalsariya"
  },
  {
    name: "Kishan & Jyoti",
    image: "KU_04696_copy",
    projectSlug: "Kishan-Jyoti",
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
  "KU_04917",
  "PH_15",
  "PH_1",
  "jp_ai",
  "PH_14",
  "KU_02972_copy",
  "PH_6",
  "PH_16",
  "PH_5",
  "PH_10",
  "PH_3",
  "KU_02863_copy",


  "vishal01",
  "LAVANYA_33_copy",
  "LAVANYA_70_copy",
  "LAVANYA_333_copy",
  "LAVANYA_61_copy",
  "LAVANYA_81_copy",
  "LAVANYA_67_copy",
  "LAVANYA_7_copy",
  "LAVANYA_80_copy",
  "lavanya_004",


  "KU_03408_copy",
  "KU_03411_copy",
  "KU_03422_copy",
  "KU_03436_copy",
  "KU_03402_copy",
  "KU_03352_copy",
  "KU_03384_copy",
  "KU_03394_copy",
  "KU_03355_copy",
  "KU_03400_copy",


  "KU_06503",
  "KU_06497",
  "KU_06501",
  "KU_06493",
  "KU_06491",
  "KU_06490",
  "KU_06488",
  "KU_06484",
  "KU_06481",
  "KU_06480",
  "KU_06467",
  "KU_06449",
  "KU_06434",


  "01",
  "03",
  "KU_04713_copy",
  "KU_04646_copy",
  "KU_04647_copy",
  "KU_04710_copy",
  "KU_04627_copy",
  "KU_04639_copy",
  "KU_04895_copy",
  "KU_04660_copy",
  "KU_04694_copy",
  "KU_04903_copy",


  "IMG_8680ai",
  "PH_7",
  "PH_4",
  "PH_2",
  "KU_02848_copy",
  "PH_13",
  "KU_04836",
  "KU_04875_copy",
  "PH_8",
  "KU_04839_copy",
  "KU_02910_copy",
  "KU_02904_copy",
  "KU_02753_copy",
  "KU_04863_copy",
  "KU_02727_copy",
  "KU_04860_copy",
  "KU_02891_copy",
  "PH_11",
  "KU_05060_copy",
  "KU_04839",
  "KU_04771_copy",
  "KU_05115",
  "KU_02732_copy",
  "KU_04863",
  "KU_04926_copy",
  "KU_02786_copy",


  "LAVANYA_220_copy",
  "LAVANYA_346_copy",
  "lavanya_08",
  "LAVANYA_195_copy",
  "lavanya_06",
  "lavanya_04",
  "lavanya_02",
  "LAVANYA_215_copy",
  "lavanya_01",
  "LAVANYA_15_copy",
  "LAVANYA_116_copy",
  "lavanya_006",


  "KU_03387_copy",
  "KU_03361_copy",
  "KU_03363_copy",
  "KU_03372_copy",
  "KU_04295_copy",
  "KU_03356_copy",
  "KU_04342_copy",
  "KU_04228_copy",
  "KU_03353_copy",
  "KU_04303_copy",
  "KU_04356_copy",
  "KU_04345_copy",
  "KU_04350_copy",
  "KU_04336_copy",
  "KU_04220_copy",
  "KU_04320_copy",
  "KU_04311_copy",


  "KU_06433",
  "KU_06428",
  "KU_06426",
  "KU_06424",
  "KU_06423",
  "KU_06418",
  "KU_06408",
  "KU_06416",
  "KU_06409",
  "KU_06407",
  "KU_06404",
  "KU_06398",
  "KU_06394",
  "KU_06384",


  "KU_04788_copy",
  "KU_04788_copy",
  "KU_04897_copy",
  "KU_04599_copy",
  "KU_04925_copy",
  "KU_04950_copy",
  "KU_04692_copy",
  "KU_04696_copy",
  "KU_04855_copy",
  "KU_04691_copy",
  "KU_04602_copy",
  "KU_04841_copy",
  "KU_04951_copy",
  "KU_04609_copy",
  "KU_04785_copy",
  "02",
  "KU_04918_copy",


  "19",
  "KU_05061",
  "KU_05056",
  "KU_04948",
  "KU_04920",
  "KU_04908",
  "KU_04898",
  "KU_04872",
  "KU_04857",
  "KU_04937",


  "lavanya_005",
  "lavanya_002",
  "LAVANYA_73_copy",
  "LAVANYA_340_copy",
  "LAVANYA_294_copy",
  "LAVANYA_162_copy",
  "LAVANYA_188_copy",
  "LAVANYA_324_copy",
  "LAVANYA_229_copy",
  "LAVANYA_311_copy",
  "FINAL_02_jpg",
  "FINAL_01_jpg",
  "LAVANYA_895_copy",


  "16sunil",
  "08sunil",
  "15sunil",
  "12sunil",
  "04sunil",
  "09sunil",
  "KU_03542_copysunil",
  "19sunil",
  "KU_03506_copysunil",
  "KU_03503_copysunil",
  "07sunil",
  "11sunil",
  "01sunil",
  "03sunil",
  "14sunil",
  "10sunil",
  "05sunil",
  "02_storysunil",
  "01_storysunil",


  "KU_06552",
  "KU_06550",
  "KU_06543",
  "KU_06542",
  "KU_06541",
  "KU_06539",
  "KU_06535",
  "KU_06516",
  "KU_06532",
  "KU_06531",
  "KU_06521",
  "KU_06512",
  "KU_06514",
  "KU_06510",
  "KU_06502",
  "KU_06509",
  "KU_06507",


  "KU_04780_copy",
  "KU_04864_copy",
  "KU_04834_copy",
  "KU_04810_copy",
  "KU_04797_copy",
  "KU_04779_copy",
  "03_copy",
  "04",
  "11",
  "13",
  "12",
  "08",
  "16",
  "10",
  "09",
  "14",
  "15",
  "07",
];

// Shown on the /faq page as an accordion. Edit the wording freely -
// these are placeholder answers written to match the rest of the
// placeholder text already in SERVICES above.
export const FAQS = [
  {
    q: "Where are you based and how far can you travel?",
    a: "We're based in Surat & Mumbai, but our passion for capturing beautiful moments knows no boundaries. We're delighted to travel anywhere around the globe to help you create memories that you'll cherish for a lifetime.",
  },
  {
    q: "How can we book you?",
    a: "Booking us is simple! Just click \"Enquiry\" and share a few details about your event dates / event flow / guest count, and we’ll guide you from there. To secure your dates, we recommend reserving 8-12 months in advance.",
  },
  {
    q: "How many edited photos do I get?",
    a: "It depends on the length of the shoot, not a fixed number. A single portrait session is usually 20-30 edited frames; a multi-day trip is usually 200+. We agree a rough number before the day.",
  },
  {
    q: "What are your deliverables?",
    a: "PHOTOS:- We capture candid and contemporary photographs throughout the ceremony, focusing on the genuine emotions and precious moments shared by the Bride, Groom, and their immediate family, friends & guests. accessible through a face recognition link where guests can upload selfies and download all their photos. FILMS:- We create a stunning 3-5 minute cinematic trailer & 1 reel for each event. Additionally, you’ll receive a complete highlight film upto 60 minutes and sangeet & other event performances(if any)",
  },
  {
    q: "How much do you charge and what are the payment terms?",
    a: `Every wedding we capture is truly unique, so the cost of your photography and films is tailored to fit the scope of work. We offer customized packages to suit your needs, and to create the perfect package, we’d love to learn more about your story, your vision for the wedding, and details like the event flow and guest count.

      Our payment terms is as below.

      30% at the time of the booking.

      60% on the first day of the event.

      10% during delivery.`,
  },
  {
    q: "What are the delivery timelines?",
    a: `PHOTOS:-

You will receive the row set of images within 30 days from the last day of the shoot.

FILMS:-

Wedding films typically take up to 90 days to deliver. This time allows us to carefully handcraft your film, including curating, processing, and editing, ensuring we tell your story in the most captivating way. At the end of this process, you'll receive a hard drive delivered right to your doorstep, containing all your HD images and videos.`,
  },
  {
    q: "How do you guys work?",
    a: `Our process begins well before the event.

We dedicate time to ideation, getting to know your photography style, your favorite poses, and your music preferences.

We create event-specific mood boards to visualize your vision and establish a collaborative space on Instagram where you can share any references you love.`,
  },
];
