import { useState, useEffect } from "react";
import {
  SITE,
  INSTAGRAM_FEED_URL,
  INSTAGRAM_POSTS,
  INSTAGRAM_PROFILE,
  photoSrc,
} from "../data";

const InstagramIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FALLBACK_POSTS = INSTAGRAM_POSTS.map((p) => ({
  media_url: photoSrc(p.img),
  media_type: p.isVideo ? "VIDEO" : "IMAGE",
  permalink: SITE.instagram,
}));

// Turn whatever the feed gives us into the shape the grid needs.
function normaliseFeed(data) {
  // Find the array, wherever it is.
  let list = [];
  if (Array.isArray(data))                    list = data;
  else if (Array.isArray(data?.data))         list = data.data;
  else if (Array.isArray(data?.posts))        list = data.posts;
  else if (Array.isArray(data?.items))        list = data.items;
  else if (Array.isArray(data?.media))        list = data.media;

  // Map each entry's fields to the ones we render with.
  return list.map((item) => ({
    id:         item.id || item.pk || Math.random().toString(36),
    media_url:  item.media_url || item.mediaUrl || item.url || item.image || item.src,
    media_type: (item.media_type || item.mediaType || item.type || "IMAGE").toUpperCase(),
    permalink:  item.permalink || item.link || item.url || SITE.instagram,
  }));
}

export default function InstagramSection() {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState("");

  useEffect(() => {
    if (!INSTAGRAM_FEED_URL) {
      setPosts(FALLBACK_POSTS);
      setLoading(false);
      return;
    }

    let cancelled = false;

    fetch(INSTAGRAM_FEED_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status} from feed`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;

        console.log("[Instagram] raw feed response:", data);

        const feed = normaliseFeed(data);
        console.log("[Instagram] normalised posts:", feed);

        if (!feed.length) {
          setError("Feed returned no posts. Check the console for the raw response.");
          setPosts(FALLBACK_POSTS);
        } else {
          setPosts(feed);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("[Instagram] feed error:", err);
        setError(
          err.message.includes("Failed to fetch")
            ? "Could not reach the feed (likely CORS). Falling back to manual posts."
            : `Feed error: ${err.message}`
        );
        setPosts(FALLBACK_POSTS);
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return (
    <section className="instagram-section" id="instagram">
      <div className="wrap">
        <h2 className="instagram-heading rv">Instagram</h2>

        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="instagram-profile rv"
        >
          <div className="instagram-avatar-wrap">
            <img
              src={`/images/${INSTAGRAM_PROFILE.avatar}`}
              alt={INSTAGRAM_PROFILE.username}
              className="instagram-avatar"
            />
            <span className="instagram-avatar-overlay" aria-hidden="true">
              <InstagramIcon size={26} />
            </span>
          </div>

          <div className="instagram-profile-info">
            <h3>{INSTAGRAM_PROFILE.username}</h3>
            <p>{INSTAGRAM_PROFILE.bio}</p>
          </div>
        </a>

        {error && (
          <p style={{ textAlign: "center", color: "#c25a4a", fontSize: 13, marginBottom: 20 }}>
            {error}
          </p>
        )}

        {loading ? (
          <p style={{ textAlign: "center", color: "var(--mute)" }}>
            Loading feed…
          </p>
        ) : (
          <div className="instagram-grid">
            {posts.map((post, index) => (
              <a
                key={post.id || index}
                href={post.permalink || SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="instagram-post rv"
              >
                <img
                  src={post.media_url || post.thumbnail_url}
                  alt={`Instagram post ${index + 1}`}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />

                {post.media_type === "VIDEO" && (
                  <span className="instagram-play" aria-hidden="true">▶</span>
                )}

                <span className="instagram-corner" aria-hidden="true">
                  <InstagramIcon />
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 