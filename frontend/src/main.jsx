import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AppointmentsProvider } from './pages/Guardian/AppointmentsContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppointmentsProvider>
      <App />
    </AppointmentsProvider>
  </React.StrictMode>,
);
