import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import GuardianDashboard from './pages/Guardian/GuardianDashboard'; // Import GuardianDashboard
import Dashboard from './pages/Guardian/Dashboard';
import Appointments from './pages/Guardian/Appointments';
import Patients from './pages/Guardian/Patients';
import Chat from './pages/Guardian/Chat';
import Notifications from './pages/Guardian/Notifications';
import Profile from './pages/Guardian/Profile';
import ViewCalendar from './pages/Guardian/ViewCalendar';
import RequestConsultation from './pages/Guardian/RequestConsultation';
import RequestAppointment from './pages/Guardian/RequestAppointment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='guardian-dashboard' element={<GuardianDashboard />} /> {/* Add GuardianDashboard route */}
          <Route path='dashboard' element={<Dashboard />} /> 
          <Route path='appointments' element={<Appointments />} /> 
          <Route path='patients' element={<Patients />} /> 
          <Route path='chat' element={<Chat />} /> 
          <Route path='notifications' element={<Notifications />} /> 
          <Route path='profile' element={<Profile />} /> 
          <Route path='viewcalendar' element={<ViewCalendar />} /> {/* Updated to /viewcalendar */}
          <Route path='requestconsultation' element={<RequestConsultation />} /> 
          <Route path='requestappointment' element={<RequestAppointment />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
