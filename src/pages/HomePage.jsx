import { FullScreenContainer } from "../components/Layout";
import HeroSection from "../components/HeroSection";
import MastodonSection from "../components/MastodonSection";

function HomePage() {
  return (
    <FullScreenContainer
      leftColumn={<HeroSection />}
      rightColumn={<MastodonSection />}
    />
  );
}

export default HomePage;
