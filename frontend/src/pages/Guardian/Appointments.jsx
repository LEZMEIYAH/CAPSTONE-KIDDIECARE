import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppointmentsContext } from './AppointmentsContext';
import { RxDashboard } from "react-icons/rx";
import { FaBookMedical } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";

const Appointments = () => {
  const { appointments } = useContext(AppointmentsContext);

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
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flexGrow: 1,
      paddingLeft: '20px',
    },
    navLink: {
      display: 'flex',
      alignItems: 'center', // Align icons and text
      padding: '10px',
      color: '#007bff',
      textDecoration: 'none',
      fontSize: '18px',
    },
    heading: {
      marginTop: '20px',
      marginRight: '700px',
      fontSize: '35px',
      textAlign: 'left', // Ensure heading is left-aligned
    },
    wrapper: {
      width: '100%',
      height: 'auto',
      border: '2px solid #007bff', 
      borderRadius: '4px',          
      padding: '10px',              
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start', // Ensure row is aligned to the left
    },
    one: {
      margin: '10px',
      width: '20%',
      fontWeight: 'bold',
      textAlign: 'left', // Left-align the text
    },
    icons: {
      paddingRight: '5px', // Add space between icon and text
    },
  };

  return (
    <div>
      <div style={styles.header}>KiddieCare</div>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <Link to="/dashboard" style={styles.navLink}><RxDashboard style={styles.icons}/>Dashboard</Link>
          <Link to="/appointments" style={styles.navLink}><FaBookMedical style={styles.icons}/>Appointments</Link>
          <Link to="/patients" style={styles.navLink}><FaUser style={styles.icons}/>Patients</Link>
          <Link to="/chat" style={styles.navLink}><MdOutlineMarkUnreadChatAlt style={styles.icons}/>Chat</Link>
          <Link to="/notifications" style={styles.navLink}><IoNotifications style={styles.icons}/>Notifications</Link>
          <Link to="/profile" style={styles.navLink}>Profile</Link>
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>Appointments</h2>
          <div style={styles.wrapper}>
            <h2 style={styles.one}>Appt. ID</h2>
            <h2 style={styles.one}>Patient Name</h2>
            <h2 style={styles.one}>Date</h2>
            <h2 style={styles.one}>Time</h2>
          </div>
          {appointments.map((appointment, index) => (
            <div key={index} style={styles.wrapper}>
              <div style={styles.one}>{index + 1}</div>
              <div style={styles.one}>{appointment.patient}</div>
              <div style={styles.one}>{appointment.date}</div>
              <div style={styles.one}>{appointment.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
