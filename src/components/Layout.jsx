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
      <div className="column-grid">
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
        <button id="mode-toggle">MODE</button>
      </ul>
    </nav>
  );
}

export { FullScreenContainer, StandardContainer };

// Defining prop types for validation

FullScreenContainer.propTypes = {
  children: PropTypes.element,
};

StandardContainer.propTypes = {
  children: PropTypes.element,
};
