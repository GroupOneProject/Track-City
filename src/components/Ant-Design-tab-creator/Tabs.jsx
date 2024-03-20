import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EditableInput from './EditTabs';
import DynamicTable from '../TabsContent/Tabs content';


const addButtonStyle = {
  background: "#5bc0de",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft: "15px",
};

const deleteButtonStyle = {
  background: "gray",
  color: "white",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  marginLeft: "5px",
  width: "20px",
  height: "20px",
  display: "inline-block",
  textAlign: "center",
  lineHeight: "18px",
  fontSize: "12px",
};

const TabApp = () => {
  const [tabs, setTabs] = useState([
    { title: 'Tab 1', content: <DynamicTable storageKey="dynamicTable_1" /> },
  ]);
  const [tabIndex, setTabIndex] = useState(0);

  const addNewTab = () => {
    const newTabId = tabs.length + 1;
    const newTab = {
      title: `New Tab ${newTabId}`,
      content: <DynamicTable storageKey={`dynamicTable_${newTabId}`} />,
    };
    setTabs([...tabs, newTab]);
    setTabIndex(tabs.length);
    // setTabIndex(newTabId - 1); 
    // Replace the "setTabIndex(tabs.length);" with the commented code. 
  };

  const removeTab = (index) => {
   
    const newTabs = tabs.filter((_, i) => i !== index);
    setTabs(newTabs);
    if (tabIndex >= newTabs.length) {
      setTabIndex(newTabs.length - 1);
    }
  };

  const updateTabTitle = (index, newTitle) => {
    const newTabs = tabs.map((tab, i) => {
      if (i === index) {
        return { ...tab, title: newTitle };
      }
      return tab;
    });
    setTabs(newTabs);
  };

  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <EditableInput
                  initialValue={tab.title}
                  onSave={(newTitle) => updateTabTitle(index, newTitle)}
                />
                <button onClick={() => removeTab(index)} style={deleteButtonStyle}>×</button>
              </div>
            </Tab>
          ))}
          <button onClick={addNewTab} style={addButtonStyle}><i class="bi bi-calendar-plus"></i></button>
        </TabList>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>
            {tab.content}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabApp;