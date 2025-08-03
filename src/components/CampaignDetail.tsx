import React, { useState, useEffect } from 'react';
import { getCampaigns } from '../data/campaigns';

interface CampaignDetailProps {
  campaignId: string;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  previousCampaignName?: string;
  nextCampaignName?: string;
}

// Full-screen image modal component
const ImageModal: React.FC<{
  image: string;
  alt: string;
  onClose: () => void;
}> = ({ image, alt, onClose }) => {
  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>
        <img 
          src={image} 
          alt={alt}
          className="modal-image"
        />
      </div>
    </div>
  );
};

const CampaignDetail: React.FC<CampaignDetailProps> = ({ 
  campaignId, 
  onNext, 
  onPrevious, 
  hasNext, 
  hasPrevious,
  previousCampaignName,
  nextCampaignName
}) => {
  const campaign = getCampaigns().find(c => c.id === campaignId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [campaignId]);

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="campaign-detail">
      {/* Header */}
      <div className="campaign-header">
        <div className="campaign-title">
          <h2>{campaign.name}</h2>
          <p className="campaign-date">{campaign.date}</p>
        </div>
      </div>

      {/* Campaign Images */}
      <div className="campaign-images">
        {campaign.images.map((image, index) => (
          <div key={index} className="campaign-image-container">
            <img 
              src={image} 
              alt={`${campaign.name} - Image ${index + 1}`}
              className="campaign-image"
              loading="lazy"
              onClick={() => handleImageClick(image)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="campaign-bottom-navigation">
        {hasPrevious && (
          <button className="nav-button" onClick={() => { onPrevious(); window.scrollTo(0, 0); }}>
            ← {previousCampaignName || 'Previous'}
          </button>
        )}
        {hasNext && (
          <button className="nav-button" onClick={() => { onNext(); window.scrollTo(0, 0); }}>
            {nextCampaignName || 'Next'} →
          </button>
        )}
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          alt={`${campaign.name} - Full Screen`}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default CampaignDetail; 