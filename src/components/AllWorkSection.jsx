import { Link } from "react-router-dom";

export default function AllWorkSection({ workList }) {
  return (
    <div>
      {workList.map((work) => (
        <Link key={work.slug} to={`/work${work.slug}`}>
          <div>
            <h2>{work.title}</h2>
            <p>{work.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
