import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { FaBookMedical } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser, FaUserCircle } from "react-icons/fa";

const ViewCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
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
      marginTop: '80px', // Adjust based on header height and navigation bar
      display: 'flex',
    },
    sidebar: {
      width: '160px', // Width of sidebar
      paddingRight: '10px',
      position: 'fixed',
      top: '80px', // Position from top
      left: '0', // Align to the left
      bottom: '0',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Align items to the start (left)
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
      color: 'green',
    },
    calendarContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '10px',
    },
    calendarHeader: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'green',
      marginBottom: '20px',

    },
    icons: {
      marginRight: '10px', // Space between icon and text
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
          <div style={styles.calendarContainer}>
            <div style={styles.calendarHeader}>View Calendar</div>
            <Calendar onChange={onChange} value={date} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCalendar;
