import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './contexts/ThemeContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
          <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
