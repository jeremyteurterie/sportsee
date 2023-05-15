import React from 'react';
import ReactDOM from 'react-dom/client';
import Rooter from './router';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rooter />
  </React.StrictMode>
);
