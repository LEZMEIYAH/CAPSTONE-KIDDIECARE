import React from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { FaBookMedical } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser, FaUserCircle } from "react-icons/fa";



const Dashboard = () => {
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '160px',
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
      display: 'block',
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
    squareContainer: {
      display: 'flex',
      gap: '20px', 
      marginTop: '20px',
    },
    square: {
      width: '150px',
      height: '150px',
      backgroundColor: '#47CF40',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold',
      borderRadius: '10px',
      cursor: 'pointer',
      textDecoration: 'none', 
    },
    icons: {
      paddingRight: '5px'
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
          <Link to="/dashboard" style={styles.navLink}><RxDashboard style={styles.icons}/>
          Dashboard</Link>
          <Link to="/appointments" style={styles.navLink}><FaBookMedical style={styles.icons}/>
          Appointments</Link>
          <Link to="/patients" style={styles.navLink}><FaUser style={styles.icons}/>
          Patients</Link>
          <Link to="/chat" style={styles.navLink}><MdOutlineMarkUnreadChatAlt style={styles.icons}/>
          Chat</Link>
          <Link to="/notifications" style={styles.navLink}><IoNotifications style={styles.icons}/>
          Notifications</Link>
          <Link to="/profile" style={styles.navLink}><FaUserCircle style={styles.icons} />
          Profile</Link>
          
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>DASHBOARD</h2>
          <div style={styles.squareContainer}>
            <Link to="/viewcalendar" style={styles.square}> 
              View Calendar
            </Link>
            <div style={styles.square}>
            <Link to="/requestconsultation" style={styles.square}> 
              Request Consultation
              </Link>
            </div>
            <div style={styles.square}>
            <Link to="/requestappointment" style={styles.square}> 
              Request Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
