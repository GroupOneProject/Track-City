import React from "react"
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header/Header'
import TabApp from "./components/Ant-Design-tab-creator/Tabs"

function App() {
  return (
    <div>
      <Header/>
      <TabApp />
    </div>

  )
}

export default App
