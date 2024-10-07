import { Link } from "react-router-dom";
import "../styles/AllWorkSection.css";

export default function AllWorkSection({ workList }) {
  return (
    <div className="work-list">
      {workList.map((work) => (
        <Link
          className="work-item-card"
          key={work.slug}
          to={`/work${work.slug}`}
        >
          <div className="card-image">
            <img src={work.imageUrl} alt={work.title}></img>
            <div className="card-overlay">
              <h3>{work.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
