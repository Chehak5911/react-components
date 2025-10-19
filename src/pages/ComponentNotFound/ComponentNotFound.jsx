import { useNavigate } from 'react-router-dom';
import './componentNotFound-styles.css';

const ComponentNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="component-not-found">
      <div className="component-not-found-content-wrapper">
        <div className="component-not-found-icon-wrapper">
          <svg 
            className="component-not-found-search-icon" 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Magnifying glass circle */}
            <circle 
              cx="40" 
              cy="40" 
              r="25" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            {/* Magnifying glass handle */}
            <line 
              x1="58" 
              y1="58" 
              x2="75" 
              y2="75" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            {/* X symbol */}
            <line 
              x1="30" 
              y1="30" 
              x2="50" 
              y2="50" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            <line 
              x1="50" 
              y1="30" 
              x2="30" 
              y2="50" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="component-not-found-title">Component Not Found</h1>
        
        <p className="component-not-found-description">
          We couldn't find the component you were looking for.
        </p>

        <button 
          className="component-not-found-return-button"
          onClick={() => navigate('/')}
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default ComponentNotFound;
