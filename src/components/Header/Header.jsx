import './header-styles.css';

const Header = () => {
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
                <svg className="header-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input type="text" placeholder="Search" />
              </div>
              <button className="header-btn-primary">Get Component</button>
            </div>
          </div>
        </div>
    </header>
    )
}

export default Header;