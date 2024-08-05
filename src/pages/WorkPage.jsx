import { useState, useEffect } from 'react';

import { StandardContainer } from "../components/Layout";
import HeaderLabelSection from "../components/HeaderLabelSection";
import AllWorkSection from "../components/AllWorkSection";
import FeaturedWorkSection from "../components/FeaturedWorkSection";

import { fetchAllMarkdownEntries } from "../utils/markdownUtils.js";


function WorkPage() {

  const [workList, setWorkList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllMarkdownEntries()
      .then((entries) => setWorkList(entries))
      .catch((err) => {
        console.error("Error loading work entries:", err);
        setError("Error loading work entries.");
      });
  }, []);

  if (error) return <div>{error}</div>;
  return (
    <StandardContainer
      leftColumn={
        <>
          <HeaderLabelSection title="All Works" />
          <AllWorkSection workList={workList} />
        </>
      }
      rightColumn={
        <>
          <HeaderLabelSection title="Featured" />
          <FeaturedWorkSection />
        </>
      }
    />
  );
}

export default WorkPage;
