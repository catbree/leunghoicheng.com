import "../styles/MainContentSection.css";

export default function MainContentSection({ content, date, title }) {
  return (
    <div className="main-content-section">
      <div className="main-content-container">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
