# Lavanya Memories

A premium, type-led portfolio site built with React and Vite. The site features a cinematic home page, an infinite-scroll editorial gallery, and a seamless enquiry flow.

---

## ✨ What works right now

- Custom preloader with a fading logo animation.
- Mobile-friendly navigation drawer.
- Auto-scrolling photo carousel on the home page.
- Infinite-scroll masonry gallery for the Editorial page.
- Cinematic background video for the Films page.
- Integrated YouTube video players for wedding films.
- Fully validated enquiry form using Web3Forms (sends directly to your email).
- Cloudinary integration for fast, optimized, and permanent image/video hosting.
- Smooth fade-in animations as you scroll.
- All motion switches off for anyone who turned on "reduce motion".

---

## 1. Run it on your computer

You need **Node.js 18 or newer**. Check with `node -v`.

```bash
npm install     # downloads React and Vite (one time, needs internet)
npm run dev     # opens at http://localhost:5173
```

Press `Ctrl + C` in the terminal to stop.

**To make the files for hosting:**

```bash
npm run build   # creates a dist/ folder
npm run preview # check the built version before you upload
```

---

## 2. Configuration (`src/data.js`)

Open `src/data.js`. Nearly everything you need to edit is in this single file:

| What | Where in the file |
|---|---|
| Name, city, email, phone, social links | `SITE` |
| Cloudinary setup | `CLOUD_NAME` |
| Email form setup | `WEB3FORMS_KEY` |
| Photography & Editorial projects | `PROJECTS` |
| YouTube video IDs for the Films page | `YOUTUBE_VIDEOS` |
| Client testimonials | `TESTIMONIALS` |
| Editorial infinite-scroll photos | `EDITORIAL_MOSAIC` |
| FAQ questions and answers | `FAQS` |

---

## 3. Managing Media

We use **Cloudinary** to serve images and videos. This ensures they load fast and never expire.

### To add a new photo:
1. Upload the image to your Cloudinary Media Library.
2. Note the file name.
3. Add that file name to the `PROJECTS` or `EDITORIAL_MOSAIC` arrays in `src/data.js`. The `photoSrc()` function will automatically build the correct URL.

### To change the Films page background video:
1. Upload the video to Cloudinary.
2. Update the URL in `src/pages/Films.jsx`.

### To add a new film:
1. Upload the video to YouTube.
2. Copy the YouTube Video ID (e.g., `dQw4w9WgXcQ`).
3. Add the ID and title to the `YOUTUBE_VIDEOS` array in `src/data.js`.

---

## 4. Colours and Fonts

Open `src/styles.css`. The first block is a list of variables:

```css
--cream: #f4f4ec;   /* main background */
--ink:   #131313;   /* text and dark areas */
--sand:  #C2A06B;   /* the gold accent */
```

Change a value there and it updates everywhere.

Fonts are loaded locally from the `src/assets/fonts/` folder (*Sayonara*, *Lemosty*, *Signature*) and from Google Fonts (*Archivo*) in `index.html`.

---

## 5. The Contact Form

The enquiry form uses **Web3Forms** to send submissions directly to your email without opening the user's mail app.

1. Sign up free at [web3forms.com](https://web3forms.com).
2. Copy your **Access Key**.
3. Paste it into `src/data.js` under `WEB3FORMS_KEY`.
4. All form submissions will now arrive in your inbox.

---

## 6. Deployment

This site is deployed on **Vercel**.

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. **Build command:** `npm run build` — **Publish directory:** `dist`.

> **Important:** Because this is a Single Page Application (SPA), you must have a `vercel.json` file in the root folder. This ensures that refreshing a page like `/photography` doesn't result in a 404 error.

---

## 📁 File map

```text
index.html                Page shell + Google Fonts
src/main.jsx              Starts React
src/App.jsx               Handles routing and scroll restoration
src/data.js               ALL text, links, and media references  <- edit this
src/styles.css            ALL the styling                         <- edit this
src/utils/protection.js   Disables right-click and drag on images
src/hooks/useReveal.js    Fade-in-on-scroll logic
src/components/           Nav, Hero, Footer, Gallery, etc.
src/pages/                Photography, Editorial, Films, FAQ, Enquiry, Project
vercel.json               Fixes page refresh 404 errors on Vercel
```

---

## ⚙️ How each effect works

| Effect | File | Idea in one line |
|---|---|---|
| **Loading counter** | `Preloader.jsx` | `setInterval` adds a random amount until it hits 100. |
| **Infinite Scroll** | `Editorial.jsx` | Native CSS scroll with `scrollTop` resetting to create an endless loop. |
| **Fade in on scroll** | `useReveal.js` | `IntersectionObserver` adds an `"in"` class when an element appears. |
| **Auto Carousel** | `Gallery.jsx` | `setInterval` shifts the track left every 2 seconds. |
| **Form Delivery** | `Enquiry.jsx` | `fetch` posts the data to Web3Forms, which emails you. |