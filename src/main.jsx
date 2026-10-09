import React from 'react';
import ReactDOM from 'react-dom/client';
import CompanySite from './CompanySite.jsx';
import ProductSite from './App.jsx';

const Site = window.location.pathname.startsWith('/easyerp') ? ProductSite : CompanySite;
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
