import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import Toc from "markdown-it-toc-done-right";

import { StandardContainer } from "../components/Layout";
import ContentNavSection from "../components/ContentNavSection";
import MainContentSection from "../components/MainContentSection";
import ImageContentSection from "../components/ImageContentSection";

// Generates TOC
const generateTOC = (markdown) => {
  const md = new MarkdownIt()
    .use(anchor, {
      level: [1, 2],
      permalink: false,
    })
    .use(Toc, {
      listType: "ul",
      containerClass: "toc",
    });

  // Render the markdown to HTML, needs a [[TOC]] placeholder for it to work
  const contentWithToc = md.render(`[[toc]]${markdown}`);
  // Create a temporary DOM element and set its innerHTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = contentWithToc;
  // Select the nav element
  const navElement = tempDiv.querySelector("nav.toc");
  // Return the outerHTML of the nav element or an empty string if not found
  const toc = navElement ? navElement.outerHTML : "";

  return { toc, contentWithToc };
};

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
  const [frontMatter, setFrontMatter] = useState();
  const [contentwithToc, setContentWithToc] = useState(null);
  const [toc, setToc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (workEntries[slug]) {
      workEntries[slug]()
        .then((module) => {
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
          //gray-matter extracts front matter from content
          const { content, data } = matter(text);
          console.log(matter(text));
          //use content to generate toc
          const { toc, contentWithToc } = generateTOC(content);
          //set 
          setContentWithToc(contentWithToc);
          setFrontMatter(data);
          console.log(frontMatter);
          setToc(toc);
        })
        .catch((err) => {
          console.error("Error loading content:", err);
          setError("Error loading content.");
        });
    } else {
      setError("Content not found.");
    }
  }, [slug, frontMatter]);

  if (error) return <div>{error}</div>;

  return (
    <StandardContainer
      leftColumn={
        <MainContentSection
          content={contentwithToc}
          date={frontMatter?.date || ""}
          title={frontMatter?.title || ""}
        />
      }
      rightColumn={
        <>
          <ImageContentSection imageUrl={frontMatter?.imageUrl || ""} />
          <ContentNavSection>
            <div dangerouslySetInnerHTML={{ __html: toc }} />
          </ContentNavSection>
        </>
      }
    />
  );
}

export default WorkEntryPage;
