// src/store.js

// Importing createStore function from redux
import { createStore } from 'redux';
// Importing persistStore and persistReducer functions from redux-persist
import { persistStore, persistReducer } from 'redux-persist';
// Importing storage object from redux-persist to specify storage configuration
import storage from 'redux-persist/lib/storage';
// Importing reducer function from './reducers'
import reducer from './reducers';

// Configuration object for redux-persist
const persistConfig = {
  key: 'root', // Key for the root of the persisted state
  storage, // Storage engine to use for persistence
};

// Creating a persisted reducer with the specified persistConfig
const persistedReducer = persistReducer(persistConfig, reducer);

// Creating the Redux store with the persisted reducer
export const store = createStore(persistedReducer);
// Creating a persistor for the Redux store
export const persistor = persistStore(store);
