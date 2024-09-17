// AppointmentsContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const AppointmentsContext = createContext();

// Create the provider component
export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  useEffect(() => {
    // Fetch all appointments when the component mounts
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/appointments/');
        setAppointments(response.data); // Set fetched appointments
        setFilteredAppointments(response.data); // Initialize with all appointments
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  // Function to add a new appointment
  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
    setFilteredAppointments((prevAppointments) => [...prevAppointments, appointment]); // Update filtered list
  };

  // Function to edit an existing appointment by index
  const editAppointment = (index, updatedAppointment) => {
    setAppointments((prevAppointments) => 
      prevAppointments.map((appt, i) => (i === index ? updatedAppointment : appt))
    );
    setFilteredAppointments((prevAppointments) => 
      prevAppointments.map((appt, i) => (i === index ? updatedAppointment : appt))
    );
  };

  // Function to delete an appointment by index
  const deleteAppointment = (index) => {
    setAppointments((prevAppointments) => 
      prevAppointments.filter((_, i) => i !== index)
    );
    setFilteredAppointments((prevAppointments) => 
      prevAppointments.filter((_, i) => i !== index)
    );
  };

  // Function to filter appointments by time range
  const filterAppointmentsByTime = async (timeRange) => {
    if (!timeRange) {
      setFilteredAppointments(appointments); // Reset to all if no range
      return;
    }

    try {
      const response = await axios.get('http://127.0.0.1:8000/api/appointments/', {
        params: { time_after: timeRange.split('-')[0], time_before: timeRange.split('-')[1] }
      });
      setFilteredAppointments(response.data); // Update filtered appointments
    } catch (error) {
      console.error('Error fetching filtered appointments:', error);
    }
  };

  return (
    <AppointmentsContext.Provider
      value={{ appointments, filteredAppointments, addAppointment, editAppointment, deleteAppointment, filterAppointmentsByTime }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};
