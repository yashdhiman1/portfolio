import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadAdminConfig } from '../data/admin';
import Menu from './Menu';
import Footer from './Footer';

const About: React.FC = () => {
  const config = loadAdminConfig();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigateTo = (screen: string) => {
    if (screen === 'work') {
      navigate('/');
    } else {
      navigate(`/${screen}`);
    }
    closeMenu();
  };

  const handleBackToWork = () => {
    navigate('/');
    closeMenu();
  };
  
  return (
    <div className="App">
      {/* Fixed Header */}
      <header className="fixed-header">
        <h1 className="name" onClick={handleBackToWork} style={{ cursor: 'pointer' }}>
          BEEJ LAKHANI
        </h1>
        
        {/* Hamburger Menu Button */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </header>

      {/* Menu Component */}
      <Menu 
        isOpen={isMenuOpen} 
        onClose={closeMenu} 
        onNavigate={navigateTo} 
      />

      <main className="main-content">
        <div className="container">
          <div className="screen-content">
            <h2 className="screen-title">{config.about.title}</h2>
            <div className="about-content">
              <p className="about-text">
                {config.about.description}
              </p>
              <div className="about-details">
                <div className="detail-item">
                  <h3>Experience</h3>
                  <p>{config.about.experience}</p>
                </div>
                <div className="detail-item">
                  <h3>Specialties</h3>
                  <p>{config.about.specialties}</p>
                </div>
                <div className="detail-item">
                  <h3>Location</h3>
                  <p>{config.about.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default About; 