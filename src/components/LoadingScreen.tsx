import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">BEEJ LAKHANI</h1>
      </div>
    </div>
  );
};

export default LoadingScreen; 