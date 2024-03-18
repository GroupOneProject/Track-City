import React from 'react'
import './HeroComponent.css'

const HeroComponent = () => {
    return (
      <div className="container-fluid mt-5 hero">
        <div className="row">
          <div className="col-md-6 align-middle">
            <h4>Welcome to</h4>
            <h1>TRACK CITY</h1>
          </div>
          <div className="col-md-5">
            <p>Track City is a versatile application designed to help users track various aspects of their lives, interests, and activities effortlessly. Whether you're monitoring your fitness progress, managing personal finances, or tracking daily habits, Track City empowers you to gather and analyze data in a simple and intuitive way.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default HeroComponent;
