// src/actions.js

// Define action types for adding and deleting tasks
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Action creator function to add a task with taskText as payload
export const addTask = (taskText) => ({
  // Action type for adding task
  type: ADD_TASK,
  // Payload containing taskText
  payload: taskText,
});

// Action creator function to delete a task with index as payload
export const deleteTask = (index) => ({
  // Action type for deleting task
  type: DELETE_TASK,
  // Payload containing index of the task to be deleted
  payload: index,
});
