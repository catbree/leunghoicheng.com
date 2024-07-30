import PropTypes from "prop-types";
import "../styles/Layout.css";

function FullScreenContainer({ leftColumnSection, rightColumnSection }) {
  return (
    <div className="container full-screen">
      <Header />
      <div className="column-grid">
        <LeftColumn>{leftColumnSection}</LeftColumn>
        <RightColumn>{rightColumnSection}</RightColumn>
      </div>
    </div>
  );
}

function StandardContainer({ leftColumnSection, rightColumnSection }) {
  return (
    <div className="container standard">
      <Header />
      <div className="column-grid">
        <LeftColumn>{leftColumnSection}</LeftColumn>
        <RightColumn>{rightColumnSection}</RightColumn>
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

function LeftColumn({ children }) {
  return (
    <div className="left-column">
      {children.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}

function RightColumn({ children }) {
  return (
    <div className="right-column">
      {children.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
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
