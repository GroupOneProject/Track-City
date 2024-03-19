import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header/Header";
import HeroComponent from "./components/Header/HeroComponent";
import TabApp from "./components/Ant-Design-tab-creator/Tabs";
import DownloadTasks from "./components/WritetoPDF/UserObject";
import DynamicTable from "./components/TabsContent";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <Router> 
      <div>
        <Header />
        <HeroComponent></HeroComponent>
        <TabApp onTabClick={handleTabClick} />
        <DownloadTasks> </DownloadTasks>
        {selectedTab === "TabApp" && <DynamicTable />}
      </div>
    </Router>
  );
}

export default App;
