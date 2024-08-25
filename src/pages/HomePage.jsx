import { FullScreenContainer } from "../components/Layout";
import HeroSection from "../components/HeroSection";
import HeaderLabelSection from "../components/HeaderLabelSection";
import MastodonSection from "../components/MastodonSection";

function HomePage() {
  return (
    <FullScreenContainer
      leftColumn={<HeroSection />}
      rightColumn={
        <>
          <HeaderLabelSection title="What I've been up to" />
          <MastodonSection />
        </>
      }
    />
  );
}

export default HomePage;
