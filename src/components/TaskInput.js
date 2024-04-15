// src/components/TaskInput.js
// Importing necessary modules from React library
import React, { useState } from 'react';
// Importing useDispatch hook from react-redux for dispatching actions
import { useDispatch } from 'react-redux';
// Importing addTask action creator from '../actions' file
import { addTask } from '../actions';
// Importing CSS file for styling
import task from '../task.css';

// Function component TaskInput to render input form for adding tasks
function TaskInput() {
  // Initializing state variable taskText with empty string using useState hook
  const [taskText, setTaskText] = useState('');
  // Initializing dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Event handler to update taskText state when input value changes
  const handleChange = (event) => {
    setTaskText(event.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = (event) => {
    // Preventing default form submission behavior
    event.preventDefault();
    // Checking if taskText is empty or contains only whitespace characters, if true, return
    if (!taskText.trim()) return;
    // Dispatching addTask action with taskText as payload to add the task to Redux store
    dispatch(addTask(taskText));
    // Clearing the input field by setting taskText state to empty string
    setTaskText('');
  };

  // Rendering input form for adding tasks
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field to enter task text */}
      <input
        type="text"
        placeholder="Enter task"
        // Binding input value to taskText state
        value={taskText}
        // Handling input change event
        onChange={handleChange}
      />
      {/* Button to submit the form */}
      <button type="submit">Add Task</button>
    </form>
  );
}

// Exporting TaskInput component as default
export default TaskInput;
