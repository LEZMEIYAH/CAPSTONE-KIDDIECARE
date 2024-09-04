import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppointmentsContext } from './AppointmentsContext'; // Import the context

const Patients = () => {
  const { appointments } = useContext(AppointmentsContext); // Use the context to get appointments

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
    heading: {
      marginTop: '20px',
    },
    wrapper: {
      width: '70vw',
      padding: '10px',
      marginTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid #007bff', 
      borderRadius: '4px',          
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px',
      textAlign: 'left',
    },
    tableRow: {
      borderBottom: '1px solid #ddd',
    },
    tableCell: {
      padding: '10px',
    },
  };

  return (
    <div>
      <div style={styles.header}>KiddieCare</div>
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
          <Link to="/appointments" style={styles.navLink}>Appointments</Link>
          <Link to="/patients" style={{ ...styles.navLink, fontWeight: 'bold' }}>Patients</Link>
          <Link to="/chat" style={styles.navLink}>Chat</Link>
          <Link to="/notifications" style={styles.navLink}>Notifications</Link>
          <Link to="/profile" style={styles.navLink}>Profile</Link>
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>Patients</h2>
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
                    <td style={styles.tableCell}>{index + 1}</td> {/* Assuming Patient ID is the index */}
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
