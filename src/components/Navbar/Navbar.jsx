// components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Apni Navbar styling yahan add karna

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <Link to="/">
          <img src="./lo.png" alt="Fokus Logo" className="logo-img" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-cta">
        <Link to="/login" className="login-btn">
          LogIn
        </Link>
      </div>
      {/* Agar Navbar ke liye koi divider animation chahiye, toh uska ref aur logic yahan aayega */}
      {/* <div className="divider"></div> */}
    </nav>
  );
};

export default Navbar;