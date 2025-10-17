import { useState } from 'react';
import heroGraphic from '../../assets/images/hero-graphic.jpg';
import { components } from '../../data/components';
import Card from '../../components/Card/Card';
import './homePage-styles.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const categories = ["All", "UI", "Forms", "Navigation"];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredComponents = activeCategory === "All" 
    ? components 
    : components.filter(c => c.category === activeCategory);

  return (
    <div className="home-page">
      <Header />

      {/* Hero Section */}
      <section className="home-page-hero">
        <div className="home-page-container">
          <div className="home-page-hero-content">
            <div className="home-page-hero-text">
              <h1 className="home-page-hero-title">Build Beautiful UIs, Faster</h1>
              <p className="home-page-hero-description">
                Beautifully designed, accessible, and easy-to-use React components for modern web applications.
              </p>
              <div className="home-page-hero-buttons">
                <button onClick={() => window.location.href = "#explore"} className="home-page-btn-primary home-page-btn-lg">Explore Components</button>
              </div>
            </div>
            
            <div className="home-page-hero-image">
              <div className="home-page-hero-image-wrapper">
                <img src={heroGraphic} alt="Abstract gradient shapes" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Components Section */}
      <section className="home-page-explore-section" id='explore'>
        <div className="home-page-container">
          <div className="home-page-section-header">
            <h2 className="home-page-section-title">Explore Components</h2>
            <p className="home-page-section-description">
              Browse our library of pre-built components, ready to be used in your projects.
            </p>
          </div>

          <div className="home-page-category-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`home-page-category-btn ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="home-page-cards-grid">
            {filteredComponents.map((component) => (
              <Card
                key={component.id}
                image={component.image}
                title={component.title}
                description={component.description}
                clickHandler={()=> navigate(`/component/${component.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="home-page-features-section">
        <div className="home-page-container">
          <div className="home-page-section-header">
            <h2 className="home-page-section-title">Core Features</h2>
            <p className="home-page-section-description">
              Our library is packed with features to make your development process smoother and more efficient.
            </p>
            <button className="home-page-btn-primary">Learn More</button>
          </div>

          <div className="home-page-features-grid">
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

      <Footer />
    </div>
  );
};

export default HomePage;
