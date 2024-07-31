import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "../entries/a-fake-case-study-greenview.md";

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