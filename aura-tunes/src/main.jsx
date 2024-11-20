import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import PlayerContextProvider from './context/PlayerContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
