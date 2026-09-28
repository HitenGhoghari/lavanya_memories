# Kaushik Unagar — photographer portfolio

A dark, type-led portfolio site built with React and Vite.
No animation libraries. Every effect is plain JavaScript you can read and change.

**What works right now**

- Loading counter (0 → 100%)
- Mobile menu that opens and closes
- Filter the gallery by category
- Click any photo to open a full-screen viewer
  (arrow keys, Escape, and swipe on phones all work)
- Services list that opens and closes on click
- Contact form with validation that opens your mail app
- Fade-in as you scroll
- All motion switches off for anyone who turned on "reduce motion"

---

## 1. Run it on your computer

You need Node.js 18 or newer. Check with `node -v`.

```bash
npm install     # downloads React and Vite (one time, needs internet)
npm run dev     # opens at http://localhost:5173
```

Press `Ctrl + C` in the terminal to stop.

To make the files for hosting:

```bash
npm run build   # creates a dist/ folder
npm run preview # check the built version before you upload
```

---

## 2. Change the text

Open **`src/data.js`**. Nearly everything is there:

| What | Where in the file |
|---|---|
| Name, city, email, phone, links | `SITE` |
| Words under the big name | `HERO_TAGS` |
| Scrolling word strip | `MARQUEE` |
| The three numbers in About | `FACTS` |
| Services list | `SERVICES` |
| Filter buttons | `CATEGORIES` |
| Every photo, its title and category | `PHOTOS` |

**Put your real email and phone in `SITE` before you show this to anyone.**
They are placeholders right now.

The longer About paragraphs are in `src/components/About.jsx`.

---

## 3. Change the photos

1. Put your JPGs in `public/images/`
2. Add a line to `PHOTOS` in `src/data.js`:

```js
{ img: 'my-new-photo', title: 'What it is', cat: 'Himalaya', place: 'Kedarnath' },
```

`img` is the file name **without** `.jpg`. So `my-new-photo` loads
`/images/my-new-photo.jpg`.

`cat` must be one of the words in `CATEGORIES`, or it will never show up
under any filter.

**Shrink photos before you add them.** A camera JPG is often 8 MB. The ones
here are about 300 KB each, with the long edge at 1400 px, saved at quality 78.
A portfolio that takes 20 seconds to load loses the client.

---

## 4. Change the colours and fonts

Open `src/styles.css`. The first block is a list of variables:

```css
--cream: #F1ECE4;   /* hero background */
--ink:   #080808;   /* everything dark  */
--sand:  #C2A06B;   /* the gold accent  */
```

Change a value there and it updates everywhere.

Fonts load in `index.html` from Google Fonts:
**Anton** for the big display type, **Archivo** for everything else.

---

## 5. Make the contact form collect enquiries automatically

Right now `send()` in `src/components/Contact.jsx` builds a `mailto:` link.
That works with no server, but it opens the visitor's mail app — some people
will not finish.

To receive messages directly:

1. Sign up free at **web3forms.com** and copy your access key
2. Replace the `window.location.href = 'mailto:...'` block with:

```js
const res = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'YOUR-KEY-HERE',
    name: form.name,
    email: form.email,
    when: form.when,
    message: form.msg,
  }),
})
```

3. Mark the function `async` and show a message based on `res.ok`

---

## 6. Put it online, free

1. Push this folder to a GitHub repository
2. Go to netlify.com or vercel.com and connect that repository
3. Build command: `npm run build` — publish directory: `dist`

---

## File map

```
index.html                page shell + Google Fonts
src/main.jsx              starts React
src/App.jsx               puts the sections in order
src/data.js               ALL your text and photos      <- edit this
src/styles.css            ALL the styling               <- edit this
src/hooks/useReveal.js    fade-in-on-scroll logic
src/components/           one file per piece of the page
public/images/            your photos
```

---

## How each effect works

| Effect | File | Idea in one line |
|---|---|---|
| Loading counter | `Preloader.jsx` | `setInterval` adds a random amount until it hits 100 |
| Stretching name | `Hero.jsx` | scroll position → CSS `scale(x, y)` |
| Fade in on scroll | `useReveal.js` | `IntersectionObserver` adds a class when an element appears |
| Word strip | `Marquee.jsx` + CSS | the list is printed twice, then slid `-50%` forever |
| Rotating badge | `Stamp.jsx` + CSS | SVG `textPath` bends text around a circle |
| Custom cursor | `Cursor.jsx` | a dot eases toward the mouse on every animation frame |
| Gallery filter | `Gallery.jsx` | `useMemo` rebuilds the list when the category changes |
| Photo viewer | `Lightbox.jsx` | keyboard listener + touch start/end to detect a swipe |

---

## Things to fix before this is a real client site

- Real email and phone in `src/data.js`
- Real social links in `SITE`
- Your own domain
- A `favicon`
- Replace the placeholder About text with your own words
