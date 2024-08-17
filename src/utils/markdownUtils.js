import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import Toc from "markdown-it-toc-done-right";

const workEntries = {
  "case-study-portfolio-website-2024": () =>
    import("../entries/case-study-portfolio-website-2024.md"),
  "case-study-greenview-portal": () =>
    import("../entries/case-study-greenview-portal.md"),
  "paw-haven": () => import("../entries/paw-haven.md"),
};

const featuredWorkEntry = "case-study-greenview-portal";

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
    })
    .catch((error) => {
      console.error(`Error fetching markdown entry for slug "${slug}":`, error);
      return null;
    });
};

//Fetch all markdown entries
export const fetchAllMarkdownEntries = () => {
  const entries = Object.keys(workEntries);
  return Promise.all(
    entries.map((slug) =>
      fetchMarkdownEntry(slug).then(({ frontMatter }) => ({
        ...frontMatter,
      }))
    )
  );
};

//Fetch featured entry
export const fetchFeaturedWorkEntry = () => {
  return fetchMarkdownEntry(featuredWorkEntry);
};

//Generate table of content if [[toc]] available in md
const generateToc = (markdown) => {
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
