import "../styles/ImageContentSection.css";

export default function ImageContentSection({ imageUrl }) {
  // Function to determine if the file is a video or an image based on its extension
  const isVideoFile = (url) => {
    const videoExtensions = [".mp4", ".webm", ".ogg"];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  return (
    <div className="image-content-section">
      {isVideoFile(imageUrl) ? (
        <video className="image-container" autoPlay loop muted playsInline>
          <source src={imageUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img className="image-container" src={imageUrl} alt="Content" />
      )}
    </div>
  );
}
