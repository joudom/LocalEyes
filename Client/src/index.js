import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import background from './map.webp';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className="background img-fluid shadow-4" style={{ backgroundImage: `url(${background})` }}>
      <App />
    </div>
  </BrowserRouter>
);


