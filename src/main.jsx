import React from 'react';
import ReactDOM from 'react-dom/client';
import CompanySite from './CompanySite.jsx';
import ProductSite from './App.jsx';

const path = window.location.pathname;
let Site = CompanySite;
let page = 'home';

if (path.startsWith('/easyerp')) {
  Site = ProductSite;
} else if (path === '/services' || path === '/services/') {
  page = 'services';
} else if (path === '/about' || path === '/about/') {
  page = 'about';
} else if (path === '/contact' || path === '/contact/') {
  page = 'contact';
}

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {Site === ProductSite ? <Site /> : <Site page={page} />}
  </React.StrictMode>
);
