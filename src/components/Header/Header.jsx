import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header-styles.css';

const Header = ({ availableComponents }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredComponents, setFilteredComponents] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  function clickHandler() {
    const val = inputValue.trim().toLowerCase();

    const foundComponent = availableComponents.find(
      (comp) => comp.title.toLowerCase() === val
    );

    if (foundComponent) {
      navigate(`/component/${foundComponent.title}`);
    } else {
      navigate('/componentNotFound');
    }

    setInputValue('');
    setFilteredComponents([]);
    setShowDropdown(false);
  }

  function handleInputChange(e) {
    const val = e.target.value;
    setInputValue(val);

    if (val.trim() === '') {
      setFilteredComponents([]);
      setShowDropdown(false);
      return;
    }

    const matches = availableComponents.filter((comp) =>
      comp.title.toLowerCase().includes(val.toLowerCase())
    );

    setFilteredComponents(matches);
    setShowDropdown(true);
  }

  function handleSelect(componentName) {
    setInputValue(componentName);
}

  return (
    <header className="header-header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-left">
            <div className="header-logo-container">
              <div className="header-logo-icon">
                <div className="header-logo-grid">
                  <div className="header-logo-square"></div>
                  <div className="header-logo-square"></div>
                  <div className="header-logo-square"></div>
                  <div className="header-logo-square"></div>
                </div>
              </div>
              <span className="header-logo-text">Component Library</span>
            </div>
          </div>

          <div className="header-right">
            <div className="header-search-box">
              <svg
                className="header-search-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>

              <input
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => inputValue && setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') clickHandler();
                }}
              />

              {showDropdown && filteredComponents.length > 0 && (
                <ul className="header-dropdown">
                  {filteredComponents.map((comp) => (
                    <li
                      key={comp.id}
                      className="header-dropdown-item"
                      onClick={() => handleSelect(comp.title)}
                    >
                      {comp.title.charAt(0).toUpperCase() + comp.title.slice(1)}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button className="header-btn-primary" onClick={clickHandler}>
              Get Component
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
