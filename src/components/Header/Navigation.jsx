import React from "react";
import './Navigation.css'


const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
     <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      
      <li>
        <a href="/contact">Contat</a>
      </li>
     </ul>
    </nav>
  );
};

export default Navigation;