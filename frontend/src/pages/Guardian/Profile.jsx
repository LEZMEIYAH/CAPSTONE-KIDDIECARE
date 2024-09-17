import React from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { FaBookMedical } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser, FaUserCircle } from "react-icons/fa";

const Profile = () => {
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
    rectangleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: '30px',
    },
    rectangle: {
      width: '500px',
      height: '50px',
      border: '2px solid black',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      backgroundColor: '#f8f9fa',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    rectangleText: {
      fontSize: '20px',
      color: 'black',
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
          <h2 style={styles.heading}>PROFILE</h2>
          <div style={styles.rectangleContainer}>
            <Link to="/history" style={styles.rectangle}>
              <div style={styles.rectangleText}>History</div>
            </Link>
            <Link to="/personal-details" style={styles.rectangle}>
              <div style={styles.rectangleText}>Personal Details</div>
            </Link>
            <Link to="/settings" style={styles.rectangle}>
              <div style={styles.rectangleText}>Settings</div>
            </Link>
            <Link to="/help" style={styles.rectangle}>
              <div style={styles.rectangleText}>Help</div>
            </Link>
            <Link to="/terms-and-conditions" style={styles.rectangle}>
              <div style={styles.rectangleText}>Terms and Conditions</div>
            </Link>
            <Link to="/about-us" style={styles.rectangle}>
              <div style={styles.rectangleText}>About Us</div>
            </Link>
            <Link to="/logout" style={styles.rectangle}>
              <div style={styles.rectangleText}>Logout</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
