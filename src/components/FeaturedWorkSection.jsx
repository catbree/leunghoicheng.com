import { Link } from "react-router-dom";
import "../styles/FeaturedWorkSection.css";

export default function FeaturedWorkSection({ featuredWorkFrontMatter }) {
  if (!featuredWorkFrontMatter) {
    return <p>Loading...</p>; // or any other placeholder you prefer
  }

  return (
    <Link
      className="featured-work-section"
      to={`/work${featuredWorkFrontMatter.slug}`}
    >
      <div className="featured-work-container">
        <div className="featured-work-image-container">
          <img src={featuredWorkFrontMatter.imageUrl}></img>
        </div>
        <div className="featured-work-content-container">
          <h2>{featuredWorkFrontMatter.title}</h2>
          <p>Not sure where to start? I'd like to recommend this one.</p>
        </div>
      </div>
    </Link>
  );
}
