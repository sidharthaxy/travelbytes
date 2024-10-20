// Footer.js
import React from "react";
import "./Footer.css"; // Add styles specific to Footer

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>About Us</li>
        <li>Contact Us</li>
        <li>NIT Rourkela</li>
      </ul>
      <div className="footer-image">
        <img src="path-to-your-image.jpg"></img> 
      </div>
    </footer>
  );
};

export default Footer;
