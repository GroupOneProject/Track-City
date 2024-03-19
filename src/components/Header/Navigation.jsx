import React from "react";
import './Navigation.css'
import Designer from '../../assets/Track-city-logo.png'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light icon-large">
      <div className="container-fluid justify-content-between">
        
        <a className="navbar-brand mx-auto" href="#">
          <img src={Designer} alt="Logo" width="90" height="90" />

        </a>

        <div className="d-flex">
          <a href="#" className="nav-link">
            <i className="bi bi-bar-chart-fill icon-large"></i> 
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;