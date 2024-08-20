import { useState, useEffect } from "react";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import Toc from "markdown-it-toc-done-right";

import { ContentContainer } from "../components/Layout";
import ContentNavSection from "../components/ContentNavSection";
import MainContentSection from "../components/MainContentSection";
import ImageContentSection from "../components/ImageContentSection";

const aboutMeEntry = () => import("../entries/about-me.md");

// Generate TOC
const generateTOC = (markdown) => {
  const md = new MarkdownIt({
    html: true,
  })
    .use(anchor, {
      level: [1, 2],
      permalink: false,
    })
    .use(Toc, {
      listType: "ul",
      level: [1, 2],
      containerClass: "toc",
    });

  // Render the markdown to HTML, needs a [[TOC]] placeholder for it to work
  const contentWithToc = md.render(`${markdown}`);
  // Create a temporary DOM element and set its innerHTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = contentWithToc;
  // Select the nav element
  const navElement = tempDiv.querySelector("nav.toc");
  // Return the outerHTML of the nav element or an empty string if not found
  const toc = navElement ? navElement.outerHTML : "";

  return { toc, contentWithToc };
};

function AboutPage() {
  const [frontMatter, setFrontMatter] = useState();
  const [contentwithToc, setContentWithToc] = useState(null);
  const [toc, setToc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    aboutMeEntry()
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
        const { content, data } = matter(text);
        const { toc, contentWithToc } = generateTOC(content);
        setContentWithToc(contentWithToc);
        setFrontMatter(data);
        setToc(toc);
      })
      .catch((err) => {
        setError("Error loading content.");
      });
  });

  return (
    <ContentContainer
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

export default AboutPage;
