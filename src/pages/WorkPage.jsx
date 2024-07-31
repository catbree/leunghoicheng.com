import { StandardContainer } from "../components/Layout";

import { AllWorkSection } from "../components/AllWorkSection";
import { FeaturedWorkSection } from "../components/FeaturedWorkSection";

function WorkPage() {
  return (
    <StandardContainer
      leftColumn={<AllWorkSection />}
      rightColumn={<FeaturedWorkSection />}
    />
  );
}

export default WorkPage;
