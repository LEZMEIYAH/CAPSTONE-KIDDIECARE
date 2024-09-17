import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppointmentsContext } from './AppointmentsContext';
import { RxDashboard } from "react-icons/rx";
import { FaBookMedical } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser, FaUserCircle } from "react-icons/fa";

const RequestConsultation = () => {
  const { addAppointment } = useContext(AppointmentsContext);
  const [patient, setPatient] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAppointment = {
      patient,
      date,
      time,
      type,
      reason,
    };

    addAppointment(newAppointment);
    navigate('/appointments');
  };

  const styles = {
    header: {
      position: 'absolute',
      top: '10px',
      left: '20px',
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#007bff',
    },
    container: {
      marginTop: '80px',
      display: 'flex',
    },
    sidebar: {
      width: '160px',
      paddingRight: '10px',
      position: 'fixed',
      top: '80px',
      left: '0',
      bottom: '0',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    content: {
      marginLeft: '160px',
      padding: '20px',
      flexGrow: 1,
    },
    navLink: {
      display: 'block',
      padding: '10px',
      color: 'black',
      textDecoration: 'none',
      fontSize: '18px',
      marginBottom: '10px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '600px',
      margin: '0 auto',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    select: {
      marginBottom: '15px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      width: '100%',
      height: '100px',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      resize: 'none',
      marginBottom: '15px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    icons: {
      paddingRight: '5px'
    },
    heading: {
      color: 'green', // Change this to the color you want
      marginBottom: '0',
    },
  };

  return (
    <div>
      <div style={styles.header}>
        <span style={{ color: 'green' }}>Kiddie</span>
        <span style={{ color: 'red' }}>Care</span>
      </div>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <Link to="/dashboard" style={styles.navLink}><RxDashboard style={styles.icons}/>Dashboard</Link>
          <Link to="/appointments" style={styles.navLink}><FaBookMedical style={styles.icons}/>Appointments</Link>
          <Link to="/patients" style={styles.navLink}><FaUser style={styles.icons}/>Patients</Link>
          <Link to="/chat" style={styles.navLink}><MdOutlineMarkUnreadChatAlt style={styles.icons}/>Chat</Link>
          <Link to="/notifications" style={styles.navLink}><IoNotifications style={styles.icons}/>Notifications</Link>
          <Link to="/profile" style={styles.navLink}><FaUserCircle style={styles.icons}/>Profile</Link>
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>Request Consultation</h2>
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

            <label style={styles.label} htmlFor="type">Type of Consultation</label>
            <select
              id="type"
              style={styles.select}
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="Online Consultation">Online Consultation</option>
              <option value="Face to Face Consultation">Face to Face Consultation</option>
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

export default RequestConsultation;
