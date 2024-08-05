import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import Toc from "markdown-it-toc-done-right";

const workEntries = {
  "a-fake-case-study-greenview": () =>
    import("../entries/a-fake-case-study-greenview.md"),
  "case-study-portfolio-website-2024": () =>
    import("../entries/case-study-portfolio-website-2024.md"),
  "message-board-project": () => import("../entries/message-board-project.md"),
  "upcoming-passion-project": () =>
    import("../entries/upcoming-passion-project.md"),
};

//Process a single markdown entry to get its frontmatter and content
export const fetchMarkdownEntry = (slug) => {
  return workEntries[slug]()
    .then((module) => fetch(module.default))
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.text();
    })
    .then((text) => {
      const { content, data } = matter(text);
      const { toc, contentWithToc } = generateToc(content);
      return { contentWithToc, frontMatter: data, toc };
    });
};

//Fetch all markdown entries
export const fetchAllMarkdownEntries = () => {
    const entries = Object.keys(workEntries);
    return Promise.all(
      entries.map((slug) =>
        fetchMarkdownEntry(slug).then(({ frontMatter }) => ({
          slug,
          ...frontMatter,
        }))
      )
    );
  };


//Generate table of content if [[toc]] available in md
const generateToc = (markdown) => {
  const md = new MarkdownIt()
    .use(anchor, {
      level: [1, 2],
      permalink: false,
    })
    .use(Toc, {
      listType: "ul",
      containerClass: "toc",
    });

  //Render markdown into HTML
  const contentWithToc = md.render(markdown);
  // Create a temporary DOM element and set its innerHTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = contentWithToc;
  // Select the nav element
  const navElement = tempDiv.querySelector("nav.toc");
  // Return the outerHTML of the nav element or an empty string if not found
  const toc = navElement ? navElement.outerHTML : "";

  return { toc, contentWithToc };
};
