import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow, TextField, Checkbox, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { red, amber, green } from '@mui/material/colors';

const DynamicTable = () => {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: "",
      description: "",
      completed: false,
      points: 0, 
      startDate: new Date(), 
      endDate: null 
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskChange = (e, index, field) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][field] = e.target.value;
    setTasks(updatedTasks);
  };

  const handleCheckboxChange = (e, index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = e.target.checked;
   
    if (e.target.checked) {
      updatedTasks[index].points = 100;
    } else {
      updatedTasks[index].points = 0;
    }
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setOpenDialog(true);
  };

  const handleSaveEdit = (editedName, editedDescription) => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex].name = editedName;
    updatedTasks[editIndex].description = editedDescription;
    setTasks(updatedTasks);
    setOpenDialog(false);
  };

  const calculateTimeRemaining = (task) => {
    if (!task.completed && task.endDate) {
      const timeDifference = task.endDate - task.startDate;
      const remainingTime = Math.max(0, timeDifference - (Date.now() - task.startDate));

      
      const hours = Math.floor(remainingTime / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

      return `${hours}h ${minutes}m`;
    }
    return 'N/A'; 

  const getColorIndicator = (task) => {
    const remainingTime = calculateTimeRemaining(task);
    const timeThresholds = [2 * 60 * 60 * 1000, 6 * 60 * 60 * 1000]; // 2 hours, 6 hours
    if (remainingTime === 'N/A') {
      return green[500];
    } else if (remainingTime.includes('h')) {
      const [hours, _] = remainingTime.split('h');
      if (parseInt(hours) <= 2) {
        return red[500];
      } else if (parseInt(hours) <= 6) {
        return amber[500];
      } else {
        return green[500];
      }
    } else {
      return green[500];
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={addTask}>Add Task</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task Name</TableCell>
            <TableCell>Task Description</TableCell>
            <TableCell>Completed</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Remaining Time</TableCell>
            <TableCell>Points</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index} style={{ backgroundColor: getColorIndicator(task) }}>
              <TableCell>
                <TextField
                  value={task.name}
                  onChange={(e) => handleTaskChange(e, index, 'name')}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={task.description}
                  onChange={(e) => handleTaskChange(e, index, 'description')}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={task.completed}
                  onChange={(e) => handleCheckboxChange(e, index)}
                />
              </TableCell>
              <TableCell>{task.startDate.toLocaleString()}</TableCell>
              <TableCell>
                <TextField
                  type="datetime-local"
                  value={task.endDate ? task.endDate.toISOString().slice(0, -8) : ""}
                  onChange={(e) => {
                    const updatedTasks = [...tasks];
                    updatedTasks[index].endDate = new Date(e.target.value);
                    setTasks(updatedTasks);
                  }}
                />
              </TableCell>
              <TableCell>{calculateTimeRemaining(task)}</TableCell>
              <TableCell>{task.points}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleEditTask(index)}>Edit</Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => handleDeleteTask(index)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Task Name"
            value={editIndex !== null ? tasks[editIndex].name : ""}
            onChange={(e) => handleTaskChange(e, editIndex, 'name')}
          />
          <TextField
            label="Task Description"
            value={editIndex !== null ? tasks[editIndex].description : ""}
            onChange={(e) => handleTaskChange(e, editIndex, 'description')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={() => handleSaveEdit(tasks[editIndex].name, tasks[editIndex].description)} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DynamicTable;

