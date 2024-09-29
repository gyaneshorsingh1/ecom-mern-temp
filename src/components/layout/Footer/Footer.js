import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest className="social-icon" />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; 2024 BabyBloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
