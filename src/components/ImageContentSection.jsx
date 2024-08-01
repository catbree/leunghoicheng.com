import "../styles/ImageContentSection.css";

export default function ImageContentSection( {imageUrl} ) {
    return (
      <div className="image-content-section">
        <img className="image-container" src={imageUrl}></img>
      </div>
    );
  }