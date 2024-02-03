import React from 'react';
import '../index.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="faded-text">Atul Kumar</div>
    
    <div className="hero-section-left">
        <div className="hero-section-heading">Hi! Atul Kumar</div>
        
        <div className="hero-section-heading hero-section-sub-heading">
            I am a Software Engineer
        </div>

        <div className="hero-section-description">
            I’m a software developer and here is my portfolio website. Here you’ll
            learn about my journey as a software developer.
        </div>
        
        <div className="btn-pink" id="btn">Hire me</div>

    </div>

    <div className="hero-section-right">
      
          <div className="user-image"> 
            <img src="./images/userAsset/UserImage.jpg" alt="" />
          </div>
    </div>
    </div>
  );
};

export default HeroSection;
