import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppointmentsContext } from './AppointmentsContext';
import { RxDashboard } from "react-icons/rx";
import { FaBookMedical } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser, FaUserCircle } from "react-icons/fa";

const Appointments = () => {
  const { appointments } = useContext(AppointmentsContext);

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
      width: '150px',
      paddingRight: '10px',
      position: 'fixed',
      top: '80px',
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
      alignItems: 'center',
      padding: '10px',
      color: 'black',
      textDecoration: 'none',
      fontSize: '18px',
      marginBottom: '10px',
    },
    heading: {
      marginTop: '20px',
      marginRight: '700px',
      fontSize: '30px',
      textAlign: 'left',
      color: 'green', // Change color of "Appointments"
    },
    wrapper: {
      width: '100%',
      height: 'auto',
      border: '2px solid black',
      borderRadius: '4px',
      padding: '10px',
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    one: {
      margin: '10px',
      width: '20%',
      fontWeight: 'bold',
      textAlign: 'left',
      color: 'blue', // Change color of table cells
      fontSize: '18px',
    },
    icons: {
      paddingRight: '5px',
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
          <Link to="/profile" style={styles.navLink}><FaUserCircle style={styles.icons} />Profile</Link>
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>APPOINTMENTS</h2>
          <div style={styles.wrapper}>
            <h2 style={{ ...styles.one, color: 'black' }}>Appt. ID</h2> {/* Change color of "Appt. ID" */}
            <h2 style={{ ...styles.one, color: 'black' }}>Patient Name</h2> {/* Change color of "Patient Name" */}
            <h2 style={{ ...styles.one, color: 'black' }}>Date</h2> {/* Change color of "Date" */}
            <h2 style={{ ...styles.one, color: 'black' }}>Time</h2> {/* Change color of "Time" */}
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
