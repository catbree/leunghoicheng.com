import "../styles/MastodonSection.css";
import { useEffect } from "react";

export default function MastodonSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sunny.garden/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mastodon-section">
      <iframe
        src="https://sunny.garden/@catbree/112897402407631711/embed"
        className="mastodon-embed"
        style={{ maxWidth: "100%", border: 0 }}
        width="400"
        allowFullScreen
      ></iframe>
    </div>
  );
}

