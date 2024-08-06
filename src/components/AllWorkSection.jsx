import { Link } from "react-router-dom";
import "../styles/AllWorkSection.css";

export default function AllWorkSection({ workList }) {
  return (
    <div className="work-list">
      {workList.map((work) => (
        <Link
          className="work-item-container"
          key={work.slug}
          to={`/work${work.slug}`}
        >
          <div className="image-container">
            <img src={work.imageUrl}></img>
          </div>
          <div className="content-container">
            <h2>{work.title}</h2>
            <p>{work.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
