import React from "react"
import './App.css'
import DownloadTasks from "./components/WritetoPDF/UserObject";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header/Header'
import TabApp from "./components/Ant-Design-tab-creator/Tabs"
import CreateCertificate from "./components/Certificate/Certificate";

function App() {
  return (
    <div>
      <Header/>
      <div className='tabs'><TabApp /></div>
      <DownloadTasks />
    
    </div>

  )
}

export default App
