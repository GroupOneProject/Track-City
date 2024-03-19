import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EditableInput from './EditTabs';



const addButtonStyle = {
  background: "#007bff",
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
    { title: 'Tab 1', content: 'Content of Tab 1' },
  ]);
  const [tabIndex, setTabIndex] = useState(0);

  const addNewTab = () => {
    const newTabIndex = tabs.length;
    setTabs([...tabs, { title: `New Tab ${newTabIndex + 1}`, content: `Content of New Tab ${newTabIndex + 1}` }]);
    setTabIndex(newTabIndex);
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <EditableInput
                  initialValue={tab.title}
                  onSave={(newTitle) => updateTabTitle(index, newTitle)}
                />
                <button onClick={() => removeTab(index)} style={deleteButtonStyle}>×</button>
              </div>
            </Tab>
          ))}
        </TabList>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>{tab.content}</TabPanel>
        ))}
      </Tabs>
      <button onClick={addNewTab} style={addButtonStyle}>Add Tab</button>
    </div>
  );
};


export default TabApp;