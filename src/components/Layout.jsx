import PropTypes from "prop-types";
import "../styles/Layout.css";

function PageContainer({ body }) {
  return (
    <div className="page-container">
      <Header />
      <div className="body">{body}</div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="/" id="home">hoi cheng</a>
        </li>
      </ul>
      <ul className="nav-links">
        <li>
          <a href="/">Work</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Designed and coded by Hoi Cheng &copy; 2024</p>
      </div>
      <div className="footer-right">
        <a
          href="https://www.linkedin.com/in/leunghoicheng"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/icons/linkedin-in-brands-solid.svg"
            alt="LinkedIn"
            className="footer-icon"
          />
        </a>
        <a href="mailto:hoichengleung@gmail.com">
          <img src="/assets/icons/envelope-regular.svg" alt="Email" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export { PageContainer };

// Defining prop types for validation

PageContainer.propTypes = {
  body: PropTypes.element,
};
