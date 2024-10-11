import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

import { PageContainer } from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AllWorkSection from "../components/AllWorkSection";

import {
  fetchAllMarkdownEntries,
} from "../utils/markdownUtils.js";

function HomePage() {
  const [workList, setWorkList] = useState([]);
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

  if (error) return <div>{error}</div>;
  return (
    <>
      <Helmet>
        <title>Leung Hoi Cheng</title>
        <meta name="title" content="Leung Hoi Cheng" />
        <meta
          name="description"
          content="The internet home of Leung Hoi Cheng, a Product Designer from Singapore."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leunghoicheng.com/" />
        <meta property="og:title" content="Leung Hoi Cheng" />
        <meta
          property="og:description"
          content="The internet home of Leung Hoi Cheng, a Product Designer from Singapore."
        />
        <meta
          property="og:image"
          content="https://leunghoicheng.com/assets/hero-section-animation.gif"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://leunghoicheng.com/" />
        <meta property="twitter:title" content="Leung Hoi Cheng" />
        <meta
          property="twitter:description"
          content="The internet home of Leung Hoi Cheng, a Product Designer from Singapore."
        />
        <meta
          property="twitter:image"
          content="https://leunghoicheng.com/assets/hero-section-animation.gif"
        />
      </Helmet>
      <PageContainer
        body={
          <div>
            <HeroSection />
            <AllWorkSection workList={workList} />
          </div>
        }
      />
    </>
  );
}

export default HomePage;
