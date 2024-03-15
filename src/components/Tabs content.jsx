// TaskTab.jsx

import React, { useState } from 'react';
import { Button, Tab, Tabs, Box, Typography } from '@mui/material';
import DynamicTable from './DynamicTable';

const TaskTab = () => {
  const [tabCount, setTabCount] = useState(1);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNewTask = () => {
    setTabCount(tabCount + 1);
    setValue(tabCount);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="task tabs">
        {[...Array(tabCount)].map((_, index) => (
          <Tab key={index} label={`Task ${index + 1}`} />
        ))}
      </Tabs>
      {[...Array(tabCount)].map((_, index) => (
        <TabPanel key={index} value={value} index={index}>
          <DynamicTable />
        </TabPanel>
      ))}
      <Button onClick={handleNewTask} variant="contained" color="primary">New Task</Button>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default TaskTab;

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
