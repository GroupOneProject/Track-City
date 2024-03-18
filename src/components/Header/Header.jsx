import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '/Designer-1.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="header-container">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="site-title">
          <h1>Track City</h1>
        </div>
        <div className="nav-container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul>
            <li>
              <Link to="/home">Home</Link> 
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
  );
}

export default Header;
