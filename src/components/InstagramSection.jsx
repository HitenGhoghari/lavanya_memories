import { useEffect } from "react";
import { SITE, FEEDFUSION_USERNAME, FEEDFUSION_PUBLIC_KEY, assetSrc } from "../data";
import { INSTAGRAM_PROFILE } from "../data";

export default function InstagramSection() {
  useEffect(() => {
    // This loads the FeedFusion script automatically when the page loads
    if (document.getElementById("feedfusion-script")) return;

    const script = document.createElement("script");
    script.id = "feedfusion-script";
    script.src = "https://www.feed-fusion.com/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="instagram-section" id="instagram">
      <div className="wrap">
        <h2 className="instagram-heading rv">Instagram</h2>

        {/* Profile Header */}
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="instagram-profile rv"
        >
          <div className="instagram-avatar-wrap">
            <img
              src={assetSrc(INSTAGRAM_PROFILE.avatar)}
              alt={INSTAGRAM_PROFILE.username}
              className="instagram-avatar"
            />
          </div>
          <div className="instagram-profile-info">
            <h3>{INSTAGRAM_PROFILE.username}</h3>
            <p>{INSTAGRAM_PROFILE.bio}</p>
          </div>
        </a>

        {/* FeedFusion Widget */}
        <div className="instagram-widget-wrapper rv">
          <div
            data-feedfusion-username={FEEDFUSION_USERNAME}
            data-feedfusion-public-key={FEEDFUSION_PUBLIC_KEY}
            data-feedfusion-columns="3"
            data-feedfusion-gap="10"
            data-feedfusion-limit="6"
          ></div>
        </div>
      </div>
    </section>
  );
}