import React from 'react'; // Import React library
import './App.css'; // Import App.css file for styling
import TaskInput from './components/TaskInput'; // Import TaskInput component
import TaskList from './components/TaskList'; // Import TaskList component
import { Provider } from 'react-redux'; // Import Provider component from react-redux
import { store, persistor } from './store'; // Import store and persistor as named imports from ./store

function App() { // Define functional component App
  return (
    <Provider store={store}> {/* Wrap the entire component tree in Provider and pass the Redux store */}
      <div className="App"> {/* Render the main container with class 'App' */}
        <h1>To-Do App</h1> {/* Render the heading */}
        <TaskInput /> {/* Render TaskInput component */}
        <TaskList /> {/* Render TaskList component */}
      </div>
    </Provider>
  );
}

export default App; // Export App component as default
