import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppointmentsContext } from './AppointmentsContext';
import { Link } from 'react-router-dom';  // Ensure this line is added
import axios from 'axios';  // Import axios

const RequestAppointment = () => {
  const [patient, setPatient] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const { addAppointment } = useContext(AppointmentsContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!patient || !date || !time || !reason) {
      alert('Please fill out all fields.');
      return;
    }

    // Create new appointment
    const newAppointment = {
      patient_name: patient,
      date,
      time,
      reason,
    };

    try {
      // Send data to backend
      const response = await axios.post('http://127.0.0.1:8000/api/appointments/', newAppointment);
      
      // Add new appointment using context
      addAppointment(response.data); // Assuming response.data contains the new appointment
      
      // Navigate to appointments page
      navigate('/appointments');
    } catch (error) {
      console.error('There was an error creating the appointment!', error);
      alert('There was an error creating the appointment. Please try again.');
    }
  };

  const styles = {
    header: {
      position: 'absolute',
      top: '10px',
      left: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#007bff',
    },
    container: {
      marginTop: '80px',
      display: 'flex',
    },
    sidebar: {
      width: '150px',
      borderRight: '2px solid #007bff',
      paddingRight: '10px',
      position: 'fixed',
      top: '60px',
      left: '0',
      bottom: '0',
      backgroundColor: '#f8f9fa',
    },
    content: {
      flexGrow: 1,
      paddingLeft: '20px',
    },
    navLink: {
      display: 'block',
      padding: '10px',
      color: '#007bff',
      textDecoration: 'none',
      fontSize: '18px',
    },
    form: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '16px',
      color: '#333',
    },
    select: {
      width: '100%',
      padding: '8px',
      marginBottom: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    textarea: {
      width: '100%',
      padding: '8px',
      marginBottom: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      minHeight: '100px',
    },
    button: {
      display: 'block',
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    }
  };

  return (
    <div>
      <div style={styles.header}>KiddieCare</div>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
          <Link to="/appointments" style={styles.navLink}>Appointments</Link>
          <Link to="/patients" style={styles.navLink}>Patients</Link>
          <Link to="/chat" style={styles.navLink}>Chat</Link>
          <Link to="/notifications" style={styles.navLink}>Notifications</Link>
          <Link to="/profile" style={styles.navLink}>Profile</Link>
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>Request Appointment</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label} htmlFor="patient">Patient</label>
            <select
              id="patient"
              style={styles.select}
              value={patient}
              onChange={(e) => setPatient(e.target.value)}
            >
              <option value="">Select Patient</option>
              <option value="patient1">Patient 1</option>
              <option value="patient2">Patient 2</option>
            </select>

            <label style={styles.label} htmlFor="date">Date</label>
            <select
              id="date"
              style={styles.select}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <option value="">Select Date</option>
              <option value="2024-08-20">August 20, 2024</option>
              <option value="2024-08-21">August 21, 2024</option>
            </select>

            <label style={styles.label} htmlFor="time">Time</label>
            <select
              id="time"
              style={styles.select}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Select Time</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
            </select>

            <label style={styles.label} htmlFor="reason">Reason</label>
            <textarea
              id="reason"
              style={styles.textarea}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestAppointment;
