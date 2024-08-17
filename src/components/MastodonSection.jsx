import "../styles/MastodonSection.css";
import * as MastodonTimeline from "@idotj/mastodon-embed-timeline";
import "@idotj/mastodon-embed-timeline/dist/mastodon-timeline.min.css";

export default function MastodonSection() {
  const myTimeline = new MastodonTimeline.Init({
    instanceUrl: "https://sunny.garden",
    timelineType: "profile",
    userId: "112896994477197480",
    profileName: "@catbree",
    insistSearchContainer: true,
    maxNbPostFetch: "5",
    maxNbPostShow: "5",
    btnSeeMore: "",
    btnReload: "",
    defaultTheme: "light",
    hideReplies: true,
  });

  return (
    <div className="mastodon-section">
      <div id="mt-container" className="mt-container">
        <div className="mt-body" role="feed">
          <div className="mt-loading-spinner"></div>
        </div>
      </div>
    </div>
  );
}
