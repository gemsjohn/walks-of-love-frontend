import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Render all content from App.jsx and apply it to the element with ID 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);
