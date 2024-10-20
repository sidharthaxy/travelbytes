import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css"; // Add styles specific to Navbar
import plane from './paper-plane.png'; // Import the plane image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo my-2 mx-2">
        <img 
          src={plane} // Use the imported image here
          alt="Logo" 
          className="planelogo" // Add a class for custom styling
        />
      </div>
      <ul className="nav-links">
        {/* Use Link for client-side routing to the main page ("/") */}
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/addplace">Add Place</Link></li>
        <li><Link to="/report">Report</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
