import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { campaigns } from '../data/campaigns';
import { AdminConfig, loadAdminConfig, saveAdminConfig } from '../data/admin';
import Menu from './Menu';
import Footer from './Footer';

const Admin: React.FC = () => {
  const [config, setConfig] = useState<AdminConfig>(loadAdminConfig());
  const [activeTab, setActiveTab] = useState<'about' | 'contact' | 'campaigns'>('about');
  const [saved, setSaved] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize campaigns data if not present
    if (Object.keys(config.campaigns).length === 0) {
      const campaignsData: { [id: string]: any } = {};
      campaigns.forEach(campaign => {
        campaignsData[campaign.id] = {
          name: campaign.name,
          date: campaign.date,
          description: campaign.description || '',
          images: campaign.images
        };
      });
      setConfig((prev: AdminConfig) => ({
        ...prev,
        campaigns: campaignsData
      }));
    }
  }, []);

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

  const handleSave = () => {
    saveAdminConfig(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleAboutChange = (field: keyof AdminConfig['about'], value: string) => {
    setConfig((prev: AdminConfig) => ({
      ...prev,
      about: {
        ...prev.about,
        [field]: value
      }
    }));
  };

  const handleContactChange = (field: keyof AdminConfig['contact'], value: string) => {
    setConfig((prev: AdminConfig) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };

  const handleCampaignChange = (campaignId: string, field: string, value: string | string[]) => {
    setConfig((prev: AdminConfig) => ({
      ...prev,
      campaigns: {
        ...prev.campaigns,
        [campaignId]: {
          ...prev.campaigns[campaignId],
          [field]: value
        }
      }
    }));
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
          <div className="admin-container">
            <div className="admin-header">
              <h1>Admin Center</h1>
              <button 
                className="save-button" 
                onClick={handleSave}
                disabled={saved}
              >
                {saved ? 'Saved!' : 'Save Changes'}
              </button>
            </div>

            <div className="admin-tabs">
              <button 
                className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button 
                className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveTab('contact')}
              >
                Contact
              </button>
              <button 
                className={`tab-button ${activeTab === 'campaigns' ? 'active' : ''}`}
                onClick={() => setActiveTab('campaigns')}
              >
                Campaigns
              </button>
            </div>

            <div className="admin-content">
              {activeTab === 'about' && (
                <div className="admin-section">
                  <h2>About Section</h2>
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      value={config.about.title}
                      onChange={(e) => handleAboutChange('title', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <textarea
                      value={config.about.description}
                      onChange={(e) => handleAboutChange('description', e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div className="form-group">
                    <label>Experience:</label>
                    <input
                      type="text"
                      value={config.about.experience}
                      onChange={(e) => handleAboutChange('experience', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Specialties:</label>
                    <input
                      type="text"
                      value={config.about.specialties}
                      onChange={(e) => handleAboutChange('specialties', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Location:</label>
                    <input
                      type="text"
                      value={config.about.location}
                      onChange={(e) => handleAboutChange('location', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="admin-section">
                  <h2>Contact Section</h2>
                  <div className="form-group">
                    <label>Description:</label>
                    <textarea
                      value={config.contact.description}
                      onChange={(e) => handleContactChange('description', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={config.contact.email}
                      onChange={(e) => handleContactChange('email', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone:</label>
                    <input
                      type="tel"
                      value={config.contact.phone}
                      onChange={(e) => handleContactChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>LinkedIn URL:</label>
                    <input
                      type="url"
                      value={config.contact.linkedin}
                      onChange={(e) => handleContactChange('linkedin', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Instagram URL:</label>
                    <input
                      type="url"
                      value={config.contact.instagram}
                      onChange={(e) => handleContactChange('instagram', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'campaigns' && (
                <div className="admin-section">
                  <h2>Campaigns</h2>
                  {Object.keys(config.campaigns).map(campaignId => {
                    const campaign = config.campaigns[campaignId];
                    return (
                      <div key={campaignId} className="campaign-edit">
                        <h3>{campaign.name}</h3>
                        <div className="form-group">
                          <label>Name:</label>
                          <input
                            type="text"
                            value={campaign.name}
                            onChange={(e) => handleCampaignChange(campaignId, 'name', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Date:</label>
                          <input
                            type="text"
                            value={campaign.date}
                            onChange={(e) => handleCampaignChange(campaignId, 'date', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Description:</label>
                          <textarea
                            value={campaign.description}
                            onChange={(e) => handleCampaignChange(campaignId, 'description', e.target.value)}
                            rows={3}
                          />
                        </div>
                        <div className="form-group">
                          <label>Images (one per line):</label>
                          <textarea
                            value={campaign.images.join('\n')}
                            onChange={(e) => handleCampaignChange(campaignId, 'images', e.target.value.split('\n').filter(img => img.trim()))}
                            rows={5}
                            placeholder="Enter image URLs, one per line"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Admin; 