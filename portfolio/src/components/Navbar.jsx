import React from 'react';
import '../index.css';

const Navbar = () => {
  return (
    
    <div className="navbar">
                <div className="logo-container">
                     {/* <img src="./images/userAsset/NavLogo.jpg" class="logo"/>  */}
                    <div className="logo-text">Atul Kumar</div>
                </div>
                
                <div className="nav-items">
                    <div><a href="#projects">Projects</a></div>
                    <div><a href="#skills">Skills</a></div>
                    <div><a href="#contactme">Contact Me</a></div>
                </div>
    </div>
  );
};

export default Navbar;
