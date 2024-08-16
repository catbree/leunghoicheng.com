import PropTypes from "prop-types";
import "../styles/Layout.css";

function FullScreenContainer({ leftColumn, rightColumn }) {
  return (
    <div className="container full-screen">
      <Header />
      <div className="column-grid">
        <div className="left-column">{leftColumn}</div>
        <div className="right-column">{rightColumn}</div>
      </div>
    </div>
  );
}

function StandardContainer({ leftColumn, rightColumn }) {
  return (
    <div className="container standard">
      <Header />
      <div className="column-grid reversed-grid">
        <div className="left-column">{leftColumn}</div>
        <div className="right-column">{rightColumn}</div>
      </div>
    </div>
  );
}

function ContentContainer({ leftColumn, rightColumn }) {
  return (
    <div className="container standard">
      <Header />
      <div className="column-grid content-heavy-grid">
        <div className="left-column">{leftColumn}</div>
        <div className="right-column">{rightColumn}</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="/">LHC</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <ul className="mode-options">
        <li>
          <a id="mode-toggle">Mode</a>
        </li>
      </ul>
    </nav>
  );
}

export { FullScreenContainer, StandardContainer, ContentContainer };

// Defining prop types for validation

FullScreenContainer.propTypes = {
  children: PropTypes.element,
};

StandardContainer.propTypes = {
  children: PropTypes.element,
};
