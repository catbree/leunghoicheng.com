import { StandardContainer } from "../components/Layout";

import { ContentNavSection } from "../components/ContentNavSection";
import { MainContentSection } from "../components/MainContentSection";
import { ImageContentSection } from "../components/ImageContentSection";

function AboutPage() {
  return (
    <StandardContainer
      leftColumn={<MainContentSection />}
      rightColumn={
        <>
          <ImageContentSection />
          <ContentNavSection />
        </>
      }
    />
  );
}

export default AboutPage;
