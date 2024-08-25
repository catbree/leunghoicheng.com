import { Helmet } from "react-helmet";

import { useState, useEffect } from "react";

import { StandardContainer } from "../components/Layout";
import HeaderLabelSection from "../components/HeaderLabelSection";
import AllWorkSection from "../components/AllWorkSection";
import FeaturedWorkSection from "../components/FeaturedWorkSection";

import {
  fetchAllMarkdownEntries,
  fetchFeaturedWorkEntry,
} from "../utils/markdownUtils.js";

function WorkPage() {
  const [workList, setWorkList] = useState([]);
  const [featuredWorkFrontMatter, setFeaturedWorkFrontMatter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllMarkdownEntries()
      .then((entries) => {
        setWorkList(entries);
      })
      .catch((err) => {
        console.error("Error loading work entries:", err);
        setError("Error loading work entries.");
      });
  }, []);

  useEffect(() => {
    fetchFeaturedWorkEntry()
      .then((entry) => {
        setFeaturedWorkFrontMatter(entry.frontMatter);
      })
      .catch((err) => {
        console.error("Error loading featured work entry:", err);
        setError("Error loading featured work entry.");
      });
  }, []);

  if (error) return <div>{error}</div>;
  return (
    <>
      <Helmet>
        <title>Work | Leung Hoi Cheng</title>
        <meta
          name="description"
          content="A collection of my recent work, primarily around product design and web development."
        />
        <meta
          property="og:description"
          content="A collection of my recent work, primarily around product design and web development."
        />
        <meta
          property="og:image"
          content="https://leunghoicheng.com/assets/hero-section-animation.gif"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <StandardContainer
        leftColumn={
          <>
            <AllWorkSection workList={workList} />
          </>
        }
        rightColumn={
          <>
            <HeaderLabelSection title="Featured" />
            <FeaturedWorkSection
              featuredWorkFrontMatter={featuredWorkFrontMatter}
            />
          </>
        }
      />
    </>
  );
}

export default WorkPage;
