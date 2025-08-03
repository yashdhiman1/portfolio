import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadAdminConfig } from '../data/admin';
import Menu from './Menu';
import Footer from './Footer';

const Contact: React.FC = () => {
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
            <h2 className="screen-title">Contact</h2>
            <div className="contact-content">
              <p className="contact-text">
                {config.contact.description}
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <h3>Email</h3>
                  <a href={`mailto:${config.contact.email}`} className="contact-link">{config.contact.email}</a>
                </div>
                <div className="contact-item">
                  <h3>Phone</h3>
                  <a href={`tel:${config.contact.phone}`} className="contact-link">{config.contact.phone}</a>
                </div>
                <div className="contact-item">
                  <h3>LinkedIn</h3>
                  <a href={config.contact.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/beejlakhani</a>
                </div>
                <div className="contact-item">
                  <h3>Instagram</h3>
                  <a href={config.contact.instagram} className="contact-link" target="_blank" rel="noopener noreferrer">@beejlakhani</a>
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

export default Contact; 