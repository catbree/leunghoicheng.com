import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "../entries/case-study-greenview.md";

// export function HeroSection() {
//   // eslint-disable-next-line
//   return <ReactMarkdown children={Markdown} />;
// }

export function HeroSection() {
  const [text, setText] = useState(null);

  fetch(Markdown)
    .then((response) => response.text())
    .then((importedText) => {
      setText(importedText)
    });

  // eslint-disable-next-line
  return <ReactMarkdown children={text} />;
}