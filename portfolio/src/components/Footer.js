import React from 'react';
import '../index.css';


const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="footer-wrapper">
              <div className="footer-faded-text">Atul Kumar</div>

              <div className="link-wrapper">
                <div>
                  <a href="#projects">Projects</a>
                </div>
                <div>
                  <a href="#skills">Skills</a>
                </div>
                <div>
                  <a href="#contactme">Contact Me</a>
                </div>
              </div>

              <div className="icon-wrapper">
                <i className="fa-brands fa-linkedin icon"></i>
                <i className="fa-brands fa-github icon"></i>
                <i className="fa-brands fa-twitter icon"></i>
                <i className="fa-brands fa-instagram icon"></i>
                <i className="fa-regular fa-envelope icon"></i>
              </div>

            </div>
      </div>
    </footer>
  );
};

export default Footer;
