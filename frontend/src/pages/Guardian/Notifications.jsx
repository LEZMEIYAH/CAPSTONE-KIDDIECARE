import React from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { FaBookMedical } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser, FaUserCircle } from "react-icons/fa";

const Notifications = () => {
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
      marginTop: '80px', // Adjust based on header height and navigation bar
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
    },
    content: {
      flexGrow: 1,
      paddingLeft: '20px',
    },
    navLink: {
      display: 'flex',
      alignItems: 'center', // Align icons and text
      padding: '10px',
      color: 'black',
      textDecoration: 'none',
      fontSize: '18px',
      marginBottom: '10px',
    },
    navLinkActive: {
      fontWeight: 'bold',
    },
    heading: {
      marginTop: '20px',
      color: 'green',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'lightgreen',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
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
          {/* Add more navigation links as needed */}
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>NOTIFICATIONS</h2>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
