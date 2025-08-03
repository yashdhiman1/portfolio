import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p className="footer-text">&copy; 2024 Beej Lakhani. All rights reserved.</p>
          </div>
          <div className="footer-section">
            <div className="footer-links">
              <a href="mailto:beej@example.com" className="footer-link">Email</a>
              <a href="https://linkedin.com/in/beejlakhani" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com/beejlakhani" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 