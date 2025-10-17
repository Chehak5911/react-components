import './header-styles.css';

const Header = () => {
    return (
    <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="header-left">
              <div className="logo-container">
                <div className="logo-icon">
                  <div className="logo-grid">
                    <div className="logo-square"></div>
                    <div className="logo-square"></div>
                    <div className="logo-square"></div>
                    <div className="logo-square"></div>
                  </div>
                </div>
                <span className="logo-text">Component Library</span>
              </div>
            </div>
            
            <div className="header-right">
              <div className="search-box">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input type="text" placeholder="Search" />
              </div>
              <button className="btn-primary">Get Component</button>
            </div>
          </div>
        </div>
    </header>
    )
}

export default Header;