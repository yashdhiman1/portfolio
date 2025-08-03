import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CampaignDetail from './components/CampaignDetail';
import Admin from './components/Admin';
import { ThemeProvider } from './context/ThemeContext';
import { getCampaigns } from './data/campaigns';

// Main App Content Component
const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCampaignId, setCurrentCampaignId] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time and check if it's first visit
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Reset campaign when navigating to different routes
  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentCampaignId(null);
    }
  }, [location.pathname]);

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
    setCurrentCampaignId(null); // Reset campaign when navigating
    closeMenu();
  };

  const handleCampaignClick = (campaignId: string) => {
    setCurrentCampaignId(campaignId);
  };

  const handleBackToWork = () => {
    setCurrentCampaignId(null);
    navigate('/');
    closeMenu();
  };

  const handleNextCampaign = () => {
    if (currentCampaignId) {
      const currentIndex = getCampaigns().findIndex(c => c.id === currentCampaignId);
      if (currentIndex < getCampaigns().length - 1) {
        setCurrentCampaignId(getCampaigns()[currentIndex + 1].id);
      }
    }
  };

  const handlePreviousCampaign = () => {
    if (currentCampaignId) {
      const currentIndex = getCampaigns().findIndex(c => c.id === currentCampaignId);
      if (currentIndex > 0) {
        setCurrentCampaignId(getCampaigns()[currentIndex - 1].id);
      }
    }
  };

  const renderContent = () => {
    if (currentCampaignId) {
      const currentIndex = getCampaigns().findIndex(c => c.id === currentCampaignId);
      const previousCampaign = currentIndex > 0 ? getCampaigns()[currentIndex - 1] : null;
      const nextCampaign = currentIndex < getCampaigns().length - 1 ? getCampaigns()[currentIndex + 1] : null;
      
      return (
        <CampaignDetail
          campaignId={currentCampaignId}
          onNext={handleNextCampaign}
          onPrevious={handlePreviousCampaign}
          hasNext={currentIndex < getCampaigns().length - 1}
          hasPrevious={currentIndex > 0}
          previousCampaignName={previousCampaign?.name}
          nextCampaignName={nextCampaign?.name}
        />
      );
    }

    return <Work onCampaignClick={handleCampaignClick} />;
  };

  return (
    <div className="App">
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

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
          {renderContent()}
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

// Main App Component with Router
function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<AppContent />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
