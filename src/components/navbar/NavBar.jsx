import React from "react";
import { Link } from "react-router-dom";
import './nav.css'


const NavBar = () => {
  return (
    <div className="nav bg-white text-black">
      <div className="logo">
        <Link className="nav-link" to={'/'}>logo</Link>
      </div>
      <div className="nav-links">
          <div className="nav-item">
               <Link className="nav-link" to={'/'}>Home</Link>
          </div>
          <div className="nav-item">
               <Link className="nav-link" to={'/about'}>About</Link>
          </div>
          <div className="nav-item">
               <Link className="nav-link" to={'/contact'}>Contact</Link>
          </div>
          <div className="menu">
            <div className="nav-container">
              <div className="navbar">
                <div className="menu-toggle">
                  <div className="hambox">
                    <span className="linetop"></span>
                    <span className="linebottom"></span>
                  </div>
                </div>
              </div>
              <div className="nav-overlay">
                
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default NavBar;
