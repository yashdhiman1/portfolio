import React from 'react';
import ThemeToggle from './ThemeToggle';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: string) => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <nav className="menu-nav">
          <button className="menu-item" onClick={() => onNavigate('work')}>Work</button>
          <button className="menu-item" onClick={() => onNavigate('about')}>About</button>
          <button className="menu-item" onClick={() => onNavigate('contact')}>Contact</button>
        </nav>
      </div>
      
      {/* Theme Toggle - Bottom Left */}
      <div className="menu-theme-toggle">
        <ThemeToggle />
      </div>
      
      {/* Social Icons */}
      <div className="menu-social">
        <a href="mailto:beej@example.com" className="social-link" aria-label="Email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/beejlakhani" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="https://instagram.com/beejlakhani" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Menu; 