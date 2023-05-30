import React from 'react';
import './Footer.css';

function Footer() {
  return (
   <>
    <footer className="footer">
      <div className="container">
        <div className="social-links">
         
          
        </div>
        <p className="all-rights">&copy; 2023 Team Lords of the React. All rights reserved.</p>
        <div className="contact-us">
          <img className='img2' src="https://cdn-icons-png.flaticon.com/512/38/38401.png" alt="Contact" />
          <span>Contact us :  </span>
         
          <a id="FooterIcon"href="https://github.com/orgs/group-5-lords-of-the-react/dashboard" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
    </>)
   
 
}

export default Footer;
