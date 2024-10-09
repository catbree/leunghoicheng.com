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
          currently looking for new job opportunities!
        </p>
      </div>
      <div className="hero-image">
        <img
          src="assets/hero-section-animation.gif"
          alt="A pixel animation featuring a black cat with a waving tail sitting on grass. The black cat has yellow eyes and is wearing a red collar with a gold bell."
        ></img>
      </div>
    </div>
  );
}
