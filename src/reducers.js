// src/reducers.js
// Importing action types ADD_TASK and DELETE_TASK from './actions'
import { ADD_TASK, DELETE_TASK } from './actions';

// Define initial state for tasks
const initialState = {
  tasks: [],
};

// Define reducer function to handle state updates based on dispatched actions
const reducer = (state = initialState, action) => {
  // Switch statement to determine how state should be updated based on action type
  switch (action.type) {
    // Case for adding a task
    case ADD_TASK:
      // Returning updated state with new task added to tasks array
      return {
        ...state, // Copying current state
        tasks: [...state.tasks, action.payload], // Adding new task to tasks array
      };
    // Case for deleting a task
    case DELETE_TASK:
      // Returning updated state with task removed from tasks array
      return {
        ...state, // Copying current state
        tasks: state.tasks.filter((_, index) => index !== action.payload), // Filtering out task at specified index
      };
    // Default case, return current state
    default:
      return state;
  }
};

// Exporting reducer function as default
export default reducer;
