import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppointmentsContext } from './AppointmentsContext';
import { RxDashboard } from "react-icons/rx";
import { FaBookMedical } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser, FaUserCircle } from "react-icons/fa";

const Patients = () => {
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
      color: 'green',
    },
    wrapper: {
      width: '70vw',
      padding: '10px',
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid black',
      borderRadius: '4px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: 'white', // Background color for the header
      color: 'black', // Text color for the header
      padding: '10px',
      textAlign: 'left',
    },

    tableCell: {
      padding: '10px',
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
          <Link to="/dashboard" style={styles.navLink}><RxDashboard style={styles.icons} />Dashboard</Link>
          <Link to="/appointments" style={styles.navLink}><FaBookMedical style={styles.icons} />Appointments</Link>
          <Link to="/patients" style={styles.navLink}><FaUser style={styles.icons} />Patients</Link>
          <Link to="/chat" style={styles.navLink}><MdOutlineMarkUnreadChatAlt style={styles.icons} />Chat</Link>
          <Link to="/notifications" style={styles.navLink}><IoNotifications style={styles.icons} />Notifications</Link>
          <Link to="/profile" style={styles.navLink}><FaUserCircle style={styles.icons} />Profile</Link>
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>PATIENTS</h2>
          <div style={styles.wrapper}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableRow}>
                  <th style={styles.tableHeader}>Patient ID</th>
                  <th style={styles.tableHeader}>Patient Name</th>
                  <th style={styles.tableHeader}>Date Created</th>
                  <th style={styles.tableHeader}>Consultation Type</th>
                  <th style={styles.tableHeader}>Reason</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index} style={styles.tableRow}>
                    <td style={styles.tableCell}>{index + 1}</td>
                    <td style={styles.tableCell}>{appointment.patient}</td>
                    <td style={styles.tableCell}>{appointment.date}</td>
                    <td style={styles.tableCell}>{appointment.type}</td>
                    <td style={styles.tableCell}>{appointment.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
