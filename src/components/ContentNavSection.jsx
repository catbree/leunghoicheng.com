import "../styles/ContentNavSection.css";

export default function ContentNavSection({ children }) {
  return (<div className="content-nav-section">
    <div className="nav-container">{children}</div></div>);
}
