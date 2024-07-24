import React from 'react';
import './Navbr.scss'; 

function Navbr(){
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/A_simple_white_star_icon.svg/1024px-A_simple_white_star_icon.svg.png" alt="Logo" />
        <span>RA REMIT2ANY</span>
      </div>
      <div className="navbar__right">
        <div className="navbar__cta">
          <span className="navbar__cta-text">Refer a friend!</span>
          <span className="navbar__cta-info">You'll both earn a 1000 rupees bonus*</span>
        </div>
        <button className="navbar__button">Login</button>
        <div className="navbar__menu">
          <span className="navbar__menu-line"></span>
          <span className="navbar__menu-line"></span>
          <span className="navbar__menu-line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbr;