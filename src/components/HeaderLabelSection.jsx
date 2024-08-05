import "../styles/HeaderLabelSection.css";

export default function HeaderLabelSection({ title }) {
  return (
    <div className="header-label-section">
      <h1 className="header-label-text">{title}</h1>
    </div>
  );
}
