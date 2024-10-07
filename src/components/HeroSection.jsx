import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>hi, i’m hoi cheng</h1>
        <p>
          a product designer who creates comfortable experiences
          that help people make sense of things
        </p>
        <p>
          currently looking for new job opporunities!
        </p>
      </div>
      <div className="hero-image">
        <img
          src="assets/hero-section-animation.gif"
          alt="Animation featuring a large centered title that reads 'Hoi Cheng Product Designer,' with a black cat sitting on the letter G. The title is displayed above a pavement with grass. There are two clouds in the background."
        ></img>
      </div>
    </div>
  );
}
