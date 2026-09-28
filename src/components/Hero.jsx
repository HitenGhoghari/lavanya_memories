import { SITE } from "../data";
import { AppLink } from "../router";
import { motion } from "framer-motion";

const MotionLink = motion.create(AppLink);

const LINKS = [
  {
    href: "/photography",
    label: "Photography",
  },
  {
    href: "/editorial",
    label: "Editorial",

  },
  { href: "/films", label: "Films" },
  { href: "/faq", label: "FAQ" },
];

export default function Hero() {
  return (
    <header className="hero" id="top">
      {/* VIDEO - DO NOT CHANGE */}
      <div className="starter-video" onContextMenu={(e) => e.preventDefault()}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          draggable={false}
        >
          <source src="/videos/starter.mp4" type="video/mp4" />
        </video>

        <button
          className="video-sound"
          type="button"
          aria-label="Turn sound on"
          onClick={(e) => {
            e.stopPropagation();
            const video = e.currentTarget
              .closest(".starter-video")
              ?.querySelector("video");
            if (!video) return;
            video.muted = !video.muted;
            e.currentTarget.setAttribute(
              "aria-label",
              video.muted ? "Turn sound on" : "Mute sound",
            );
            e.currentTarget.innerHTML = video.muted ? "🔇" : "🔊";
          }}
        >
          🔇
        </button>

        <div className="video-title">{SITE.name}</div>
      </div>

      {/* HERO TAGS - AFTER VIDEO */}
      <div className="hero-type">
        <div className="hero-kick">
          {LINKS.map((l) => (
            <MotionLink
              key={l.href}
              to={l.href}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass-card hero-card"
            >
              {l.label}
            </MotionLink>
          ))}
        </div>
      </div>
    </header>
  );
}
