---
title: "Case Study: Portfolio Website 2024"
slug: /case-study-portfolio-website-2024
date: 21 Aug 2024
description: "My personal portfolio website built with React and Vite."
tags: productdesign webdevelopment casestudy
imageUrl: "/assets/entryAssets/portfolio-website-2024-thumbnail.png"
---

[[toc]]

---

## Introduction
I’ve always wanted my own portfolio website, and now I’ve finally brought it to life. The best part? Complete freedom to do what feels just right. This website isn’t just a portfolio. It’s my internet home, where I can showcase my work and share what I’m up to.

## Conceptual Design
I envisioned a space that feels warm, cozy, and personal. Here’s a look at the images from my original moodboard.

<figure>
  <img src="../assets/entryAssets/portfolio-website-2024-1.png" alt="four images that evoke a different segment of what I want the portfolio to feel">
  <em>Moodboard / Image compilation</em>
</figure>

I started with sketches on paper to map out the structure. The website would be straightforward: a homepage for showcasing my recent activities, a work section for hiring managers, and a simple about me section.

<figure>
  <img src="../assets/entryAssets/portfolio-website-2024-2.jpg" alt="sketches on paper">
  <em>Original sketches</em>
</figure>

After many more sketches, I felt ready to move onto Figma and mock up a page reference. Experimenting with various UI elements, I found a combination that worked for me and started coding.

<figure>
  <img src="../assets/entryAssets/portfolio-website-2024-4.png" alt="Mock reference">
  <em>Mock reference of website</em>
</figure>

## Executing the idea
Building this website from scratch using the skills I gained through The Odin Project (TOP) was a natural step. It allows me to apply what I've learned and bring my ideas of life.

I used React with Vite bceause this is what I'm most comfortable with right now. I set up routing with `react-router-dom`. A quick look at my configuration:


```
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/global.css";

import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import WorkEntryPage from "./pages/WorkEntryPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/work", element: <WorkPage /> },
  { path: "work/:slug", element: <WorkEntryPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "*", element: <h1>Error Page</h1> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

Next I added some dummy pages and now I have a working base to build my sections on. Let's keep going.

### Work Entry Page
I went with writing my content in markdown because it was easy to write with and saves me from wrestling with HTML everytime I wrote a new entry for my website. I thought I could just slap my markdown file into the project and everything would work perfectly. Spoiler alert: it didn't quite turn out that way. 

By default, react doesn't handle `.md` files on its own, so I added a line that tells Vite to treat markdown files as assets in `vite.config.js`:

```
export default defineConfig({
  plugins: 
  ...,
  assetsInclude: ["**/*.md"],
});
```

Next up, to extract front matter metadata like titles and dates from my markdown files, I used a package called [gray-matter](https://www.npmjs.com/package/gray-matter). This helps me split my front matter and content from a markdown file.

When that was done, I met my next challenge: handling the table of content (TOC). I did not want to hard-code a TOC everytime I wrote a new markdown entry. After some digging, I settled on a set of packages: [markdown-it](https://www.npmjs.com/package/markdown-it), [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor), and [markdown-it-toc-done-right](https://www.npmjs.com/package/markdown-it-toc-done-right). Here's how they work together:

- `markdown-it` turns markdown into HTML.
- `markdown-it-anchor` adds unique ID to headers.
- `markdown-it-toc-done-right` uses these added IDs to create a TOC dynamically.

Here's a snippet which generates a table of content if `[[toc]]` is included in my markdown. I ran into an issue trying to get just the TOC, so I wrote a function to extract that:

```
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

  const contentWithToc = md.render(markdown);
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = contentWithToc;
  const navElement = tempDiv.querySelector("nav.toc");
  const toc = navElement ? navElement.outerHTML : "";

  return { toc, contentWithToc };
};
```

And here's how I fetched and processed a markdown entry to get its frontmatter and content:

```
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
```

Yay, no need to waste time on manual TOC updates. Here's how it looked like when I was experimenting it with test data.

<figure>
  <img src="../assets/entryAssets/portfolio-website-2024-7.png" alt="Insert alt text here">
  <em>Insert caption here</em>
</figure>

### An experiment with sprites
For the homepage, I wanted to add a personal and fun touch, so I threw together some quick pixel art featuring my late family cat. It was meant to be just a placeholder, but as I worked on the site, the art grew on me, so I decided to keep it.

<figure>
  <img src="../assets/hero-section-animation.gif" alt="Insert alt text here">
  <em>Insert caption here</em>
</figure>

I explored sprite animations and learned that sprites are basically a sequence of images with some CSS magic to make them move. Initially, I tried scaling the art to fit the div, which involved a lot of fiddling like setting padding-top based on aspect ratio and blending edges with a gradient. It worked largely okay, but had issues like blurriness and an odd behavour of disappearing at the end of each cycle. I wasn't able to work out some of these issues so I ended up converting the sprite into a GIF and it worked like a charm.

<figure>
  <img src="../assets/entryAssets/portfolio-website-2024-9.png" alt="Insert alt text here">
  <em>Sprite sheet I was experimenting with</em>
</figure>

I'd like to explore sprites further, but next time, I plan to use SVG format instead. It seems like a better option for managing scale, which was the biggest challenge I faced with this part of the project.


### Mastodon
To showcase an active update of what I'm up to on my homepage, I originally intended to create a Twitter/X account so that I can embed my feed. But given the direction it was going, I wasn't very keen and started looking for alternatives instead. The concept of fediverse appeals to me and I decided to create an account on Mastodon instead. I appreciate having data ownership and being able to curate what I see.

To embed my feed, I found [Mastodon Embed Timeline](https://gitlab.com/idotj/mastodon-embed-timeline) which allowed me to freely customise its CSS. I spent some time here experimenting with the styles, with the end result looking something like this:

<figure>
  <img src="../assets/entryAssets/portfolio-website-2024-8.png" alt="Insert alt text here">
  <em>Insert caption here</em>
</figure>

## Awaiting feedback
At this point, I decided to press on and wrap up my case studies. I've been working on this solo for a while, and now I’m at the stage where I’m ready to get feedback from trusted peers. I’m eager to hear their thoughts and refine everything further.

Stay tuned! This section will be updated as I continue to work on it.

## Reflection
Dream come true. Excited. Looking forward to what else to come.