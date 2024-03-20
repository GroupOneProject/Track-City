import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '/src/assets/Designer-1.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="header-container">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" width="70"/></Link>
        </div>
        <div className="site-title">
          <h1>Track City</h1>
        </div>
        <div className="nav-container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul>
            <li>
              <Link to="/how-to-use">How to Use</Link>
            </li>
            <li>
              <Link to="/charts">Charts</Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
  );
}

export default Header;
