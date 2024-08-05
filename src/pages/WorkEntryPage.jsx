import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { StandardContainer } from "../components/Layout";
import ContentNavSection from "../components/ContentNavSection";
import MainContentSection from "../components/MainContentSection";
import ImageContentSection from "../components/ImageContentSection";

import { fetchMarkdownEntry } from "../utils/markdownUtils.js";

function WorkEntryPage() {
  const { slug } = useParams();
  const [frontMatter, setFrontMatter] = useState();
  const [contentwithToc, setContentWithToc] = useState(null);
  const [toc, setToc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMarkdownEntry(slug)
      .then(({ contentWithToc, frontMatter, toc }) => {
        setContentWithToc(contentWithToc);
        setFrontMatter(frontMatter);
        setToc(toc);
      })
      .catch((err) => {
        console.log(`Error loading content: ${err}`);
        setError("Error loading content");
      });
  }, [slug]);

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
