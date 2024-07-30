import PropTypes from 'prop-types';
import '../styles/Layout.css'

function FullScreenContainer({ children }) {
    return (
        <div className='container full-screen'>
            {children}
        </div>
    );
}

function StandardContainer({ children }) {
    return (
        <div className='container standard'>
            {children}
        </div>
    );
}

export { FullScreenContainer, StandardContainer}


// Defining prop types for validation

FullScreenContainer.propTypes = {
    children: PropTypes.element
}

StandardContainer.propTypes = {
    children: PropTypes.element
}