import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '/src/assets/Designer-1.png';
import './Header.css';
import { Button } from 'react-bootstrap';
import { FaChartBar, FaInfoCircle } from 'react-icons/fa';
import MultiAxisLineChart from '../Chart/MultiAxisLineChart';

const Header = () => {
  const [chartVisible, setChartVisible] = useState(false); 

  const toggleChartVisibility = () => {
    setChartVisible(!chartVisible); 
  };

  return (
    <div className='header-container'>
      <header className='header'>
        <div className="nav-container">
          <nav className="navbar">
            <ul>
              <li>
                <Button className="header-button" variant="info" as={Link} to="/how-to-use">
                  <FaInfoCircle /> How to Use
                </Button>
              </li>
            </ul>
          </nav>
          <div className="logo">
            <Link to="/"><img src={logo} alt="Logo" width="70"/></Link>
            <div className="site-title">
              <h1><span>Track City</span></h1>
            </div>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Button className="header-button" variant="info" onClick={toggleChartVisibility}>
                  <FaChartBar /> Charts
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="chart-container">
        {chartVisible && <MultiAxisLineChart visible={chartVisible} width="100%" height="300px" margin="30px" />}
      </div>
    </div>
  );
}

export default Header;
