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
                clickHandler={()=> navigate('/component/component.title')}
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
      <Footer />
    </div>
  );
};

export default HomePage;
