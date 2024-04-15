import React from 'react';
import ReactDOM from 'react-dom';
// Update import path for PersistGate from redux-persist
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// Importing store and persistor from './store'
import { store, persistor } from './store';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    {/* Wrapping the App component with PersistGate for Redux persist integration */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
