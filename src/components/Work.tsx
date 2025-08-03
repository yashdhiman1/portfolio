import React from 'react';
import { getCampaigns } from '../data/campaigns';

interface WorkProps {
  onCampaignClick: (campaignId: string) => void;
}

const Work: React.FC<WorkProps> = ({ onCampaignClick }) => {
  const campaigns = getCampaigns();
  
  return (
    <div className="portfolio-grid">
      {campaigns.map((campaign) => (
        <div 
          key={campaign.id} 
          className="portfolio-item campaign-item"
          onClick={() => onCampaignClick(campaign.id)}
        >
          <img 
            src={campaign.featuredImage} 
            alt={campaign.name}
            className="portfolio-image"
            loading="lazy"
          />
          <div className="campaign-overlay">
            <div className="campaign-info">
              <h3 className="campaign-name">{campaign.name}</h3>
              <p className="campaign-date">{campaign.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work; 