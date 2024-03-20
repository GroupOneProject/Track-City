import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '/src/assets/Designer-1.png';
import './Header.css';
import { Button } from 'react-bootstrap';
import { FaChartBar, FaInfoCircle } from 'react-icons/fa'; // Import icons

const Header = () => {
 return (
    <header className='header'>
      <div className="header-container">
        <div className="nav-container">
          <nav className="navbar">
            <ul>
              <li>
                <Button variant="info" as={Link} to="/how-to-use">
                 <FaInfoCircle /> How to Use
                </Button>
              </li>
            </ul>
          </nav>
          <div className="logo">
            <Link to="/"><img src={logo} alt="Logo" width="70"/></Link>
            <div className="site-title">
              <h1>Track City</h1>
            </div>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Button variant="warning" as={Link} to="/charts">
                 <FaChartBar /> Charts
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
 );
}

export default Header;
