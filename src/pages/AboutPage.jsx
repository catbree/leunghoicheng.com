import { StandardContainer } from "../components/Layout";

import { ContentNavSection } from "../components/ContentNavSection";
import { MainContentSection } from "../components/MainContentSection";
import { ImageContentSection } from "../components/ImageContentSection";


function AboutPage() {
  return (
    <StandardContainer
      leftColumnSection={[MainContentSection]}
      rightColumnSection={[ImageContentSection, ContentNavSection]}
    />
  );
}

export default AboutPage;
