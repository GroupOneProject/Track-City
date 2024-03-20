import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '/src/assets/Designer-1.png';
import './Header.css';

const Header = () => {
 return (
    <header className='header'>
      <div className="header-container">
        <div className="nav-container">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/how-to-use">How to Use</Link>
              </li>
            </ul>
          </nav>
          <div className="logo">
            <Link to="/"><img src={logo} alt="Logo" width="70"/></Link>
          </div>
          <nav className="navbar">
            <ul>
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
