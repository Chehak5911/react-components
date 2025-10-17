import { useState } from 'react';
import heroGraphic from '../../assets/images/hero-graphic.jpg';
import { components } from '../../data/components';
import Card from '../../components/Card/Card';
import './homePage-styles.css';

const categories = ["All", "UI", "Forms", "Navigation"];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredComponents = activeCategory === "All" 
    ? components 
    : components.filter(c => c.category === activeCategory);

  return (
    <div className="home-page">
      {/* Header Section */}
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

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Build Beautiful UIs, Faster</h1>
              <p className="hero-description">
                Beautifully designed, accessible, and easy-to-use React components for modern web applications.
              </p>
              <div className="hero-buttons">
                <button onClick={() => window.location.href = "#explore"} className="btn-primary btn-lg">Explore Components</button>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="hero-image-wrapper">
                <img src={heroGraphic} alt="Abstract gradient shapes" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Components Section */}
      <section className="explore-section" id='explore'>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Explore Components</h2>
            <p className="section-description">
              Browse our library of pre-built components, ready to be used in your projects.
            </p>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="cards-grid">
            {filteredComponents.map((component) => (
              <Card
                key={component.id}
                image={component.image}
                title={component.title}
                description={component.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Features</h2>
            <p className="section-description">
              Our library is packed with features to make your development process smoother and more efficient.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>

          <div className="features-grid">
            <Card
            type="svg"
            svg={
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            }
            title="TypeScript Support"
            description="Fully typed components for a better development experience."
            />

            <Card
            type="svg"
            svg={
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
            }
            title="Customizable"
            description="Easily customize the look and feel of components to match your brand."
            />

            <Card
            type="svg"
            svg={
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                <path d="m18 19 1-7-6 1"></path>
                <path d="m5 8 3-3 5.5 3-2.36 3.5"></path>
                <path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path>
                <path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path>
                </svg>
            }
            title="Accessible"
            description="Built with accessibility in mind to ensure your app is usable by everyone."
            />
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <nav className="footer-links">
              <a href="#">Documentation</a>
              <a href="#">GitHub</a>
              <a href="#">Contact Us</a>
            </nav>

            <div className="social-links">
              <a href="#" aria-label="Code">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>

            <p className="copyright">
              © 2025 Component Library. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
