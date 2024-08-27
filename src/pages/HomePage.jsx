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
