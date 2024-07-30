import { StandardContainer } from "../components/Layout";

import { AllWorkSection } from "../components/AllWorkSection";
import { FeaturedWorkSection } from "../components/FeaturedWorkSection";

function WorkPage() {
  return (
    <StandardContainer
      leftColumnSection={[AllWorkSection]}
      rightColumnSection={[FeaturedWorkSection]}
    />
  );
}

export default WorkPage;