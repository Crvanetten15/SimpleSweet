import React ,{ Component } from "react";
import { Link } from "react-router-dom";
// import { motion } from framer-motion;
import './Nav.css';


function Nav() {
  return (
  <div id="nav-bar">
    <div id="container">
      <div className="nav-item links">
        <Link to="/menu" className="nav-links">Menu</Link>
      </div>
      <div className="nav-item links">
        <Link to="/gallery" className="nav-links">Gallery</Link>
      </div>
      <div className="nav-item" id="img-item">
      <Link to="/" className="nav-links" ><img src={require('../images/logo.png')} id="logo_middle"/></Link>
      </div>
      <div className="nav-item links">
        <Link to="/events" className="nav-links">Events</Link>
      </div>
      <div className="nav-item links">
        <Link to="/about" className="nav-links">About Us</Link>
      </div>
    </div>
  </div>
  
  );
  
}

export default Nav;
