import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";

import { StandardContainer } from "../components/Layout";
import { ContentNavSection } from "../components/ContentNavSection";
import { MainContentSection } from "../components/MainContentSection";
import { ImageContentSection } from "../components/ImageContentSection";

const workEntries = {
  "a-fake-case-study-greenview": () =>
    import("../entries/a-fake-case-study-greenview.md"),
  "case-study-portfolio-website-2024": () =>
    import("../entries/case-study-portfolio-website-2024.md"),
  "message-board-project": () => import("../entries/message-board-project.md"),
  "upcoming-passion-project": () =>
    import("../entries/upcoming-passion-project.md"),
};

function WorkEntryPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (workEntries[slug]) {
      workEntries[slug]()
        .then((module) => {
          console.log("Module loaded:", module);
          return fetch(module.default);
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.statusText}`
            );
          }
          return response.text();
        })
        .then((text) => {
          console.log("Markdown text loaded:", text);
          const { content } = matter(text);
          setContent(content);
        })
        .catch((err) => {
          console.error("Error loading content:", err);
          setError("Error loading content.");
        });
    } else {
      setError("Content not found.");
    }
  }, [slug]);

  if (error) return <div>{error}</div>;

  return (
    <StandardContainer
      leftColumn={<MainContentSection content={content} />}
      rightColumn={
        <>
          <ImageContentSection  />
          <ContentNavSection />
        </>
      }
    />
  );
}

export default WorkEntryPage;
