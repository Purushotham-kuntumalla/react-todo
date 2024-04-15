import React, { useState } from 'react'; // Import React and useState hook from React
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch hooks from react-redux for accessing Redux store
import { deleteTask } from '../actions'; // Import deleteTask action creator from '../actions'
import DeleteIcon from '@mui/icons-material/Delete'; // Import DeleteIcon from MUI icons
import DoneIcon from '@mui/icons-material/Done'; // Import DoneIcon from MUI icons
import TaskInput from '../taskInput.css'; // Import TaskInput styles (assuming this is a CSS file)
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast from react-toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

function TaskList() {
  const tasks = useSelector((state) => state.tasks); // Select tasks from Redux store using useSelector hook
  const dispatch = useDispatch(); // Get dispatch function from useDispatch hook for dispatching actions
  const notify = () => toast("Task Deleted! succesfully!"); // Define notify function for delete task notification
  const notification = () => toast('Task done'); // Define notification function for task done notification

  const handleDelete = (index) => { // Define handleDelete function to handle task deletion
    dispatch(deleteTask(index)); // Dispatch deleteTask action with index as parameter
    notify(); // Call notify function to show delete task notification
  };

  const handleDone = (index) => { // Define handleDone function to handle task completion
    const taskElements = document.getElementsByClassName('task-item'); // Get all elements with class 'task-item'
    const taskElement = taskElements[index]; // Get the specific task element at the given index
    taskElement.classList.toggle('done'); // Toggle the 'done' class on the task element to mark it as completed
  };
  
  return (
    <div className="task-list"> {/* Render the task list container */}
      <h2>Tasks</h2> {/* Render the heading */}
      <ToastContainer autoClose={1000} /> {/* Render the toast container for notifications with autoClose set to 1000 milliseconds */}
      <ul>
        {tasks.map((task, index) => ( // Map over tasks array to render each task item
          <li key={index} className="task-item"> {/* Render each task item with unique key and class name 'task-item' */}
            <span>{task}</span> {/* Render the task text */}
            <div className="buttons"> {/* Render buttons container */}
              <button className='btn' onClick={() => handleDone(index, notification()) }><DoneIcon /></button> {/* Render button to mark task as done */}
              <button className='btn' onClick={() => handleDelete(index)}><DeleteIcon/></button> {/* Render button to delete task */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList; // Export TaskList component as default
