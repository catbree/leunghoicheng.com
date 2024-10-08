import { Helmet } from "react-helmet-async";

import { useState, useEffect } from "react";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import Toc from "markdown-it-toc-done-right";

import { PageContainer } from "../components/Layout";
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
      .catch(() => {
        setError("Error loading content.");
        console.log(error);
      });
  });

  return (
    <>
      <Helmet>
        <title>About | Leung Hoi Cheng</title>
        <meta name="title" content="About" />
        <meta
          name="description"
          content="Hello, I'm Hoi Cheng, a Product Designer from Singapore."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leunghoicheng.com/about" />
        <meta property="og:title" content="About" />
        <meta
          property="og:description"
          content="Hello, I'm Hoi Cheng, a Product Designer from Singapore."
        />
        <meta
          property="og:image"
          content="https://leunghoicheng.com/assets/hero-section-animation.gif"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://leunghoicheng.com/about"
        />
        <meta property="twitter:title" content="About" />
        <meta
          property="twitter:description"
          content="Hello, I'm Hoi Cheng, a Product Designer from Singapore."
        />
        <meta
          property="twitter:image"
          content="https://leunghoicheng.com/assets/hero-section-animation.gif"
        />
      </Helmet>
      <PageContainer
        body={
          <div>
            <ImageContentSection imageUrl={frontMatter?.imageUrl || ""} />
            <MainContentSection
              content={contentwithToc}
              date={frontMatter?.date || ""}
              title={frontMatter?.title || ""}
            />
          </div>
        }
      />
    </>
  );
}

export default AboutPage;
