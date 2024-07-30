import { FullScreenContainer } from '../components/Layout';
import { HeroSection } from "../components/HeroSection";
import { TweetSection } from "../components/TweetSection";
import { GuestBoardSection } from "../components/GuestBoardSection";


function HomePage() {
  return (
    <FullScreenContainer leftColumnSection={[HeroSection]} rightColumnSection={[TweetSection, GuestBoardSection]} />
  );
}

export default HomePage;