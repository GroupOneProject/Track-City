import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header/Header";
import HeroComponent from "./components/Header/HeroComponent";
import TabApp from "./components/Ant-Design-tab-creator/Tabs";


function App() {
  return (
    <Router> 
      <div>
        <Header />
        <HeroComponent></HeroComponent>
        <TabApp />
      </div>
    </Router>
  );
}

export default App;
