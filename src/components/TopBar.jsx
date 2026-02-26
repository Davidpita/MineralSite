import React from 'react';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-info">
          <span><i className="fas fa-phone"></i>  71 99254-3427</span>
          <span><i className="fas fa-envelope"></i> contatomineralemineracao@gmail.com</span>
          <span><i className="fas fa-map-marker-alt"></i> Salvador, BA</span>
        </div>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;