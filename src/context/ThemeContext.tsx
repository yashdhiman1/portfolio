import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
   
    return 'light';
  });

  useEffect(() => {
    // Update document data attribute
    document.documentElement.setAttribute('data-theme', theme);
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const createSplashAnimation = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
    const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
    
    // Create splash element
    const splash = document.createElement('div');
    splash.className = 'splash-animation';
    
    // Set CSS variables for the animation
    splash.style.setProperty('--splash-x', `${x}%`);
    splash.style.setProperty('--splash-y', `${y}%`);
    splash.style.setProperty('--splash-color', theme === 'light' ? '#1a1a1a' : '#ffffff');
    
    // Add to document
    document.body.appendChild(splash);
    
    // Remove after animation
    setTimeout(() => {
      document.body.removeChild(splash);
    }, 800);
  };

  const toggleTheme = (event?: React.MouseEvent) => {
    if (event) {
      createSplashAnimation(event);
    }
    
    // Delay theme change to sync with splash animation
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }, 100);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 