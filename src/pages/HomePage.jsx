import { Helmet } from "react-helmet";

import { FullScreenContainer } from "../components/Layout";
import HeroSection from "../components/HeroSection";
import HeaderLabelSection from "../components/HeaderLabelSection";
import MastodonSection from "../components/MastodonSection";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Leung Hoi Cheng</title>
        <meta name="description" content="The internet home of Leung Hoi Cheng, a product designer from Singapore." />
      </Helmet>
      <FullScreenContainer
        leftColumn={<HeroSection />}
        rightColumn={
          <>
            <HeaderLabelSection title="What I've been up to" />
            <MastodonSection />
          </>
        }
      />
    </>
  );
}

export default HomePage;
