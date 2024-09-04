import React, { createContext, useState } from 'react';

// Create the context
export const AppointmentsContext = createContext();

// Create the provider component
export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  // Function to add a new appointment
  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  // Function to edit an existing appointment by index
  const editAppointment = (index, updatedAppointment) => {
    setAppointments((prevAppointments) => 
      prevAppointments.map((appt, i) => (i === index ? updatedAppointment : appt))
    );
  };

  // Function to delete an appointment by index
  const deleteAppointment = (index) => {
    setAppointments((prevAppointments) => 
      prevAppointments.filter((_, i) => i !== index)
    );
  };

  return (
    <AppointmentsContext.Provider
      value={{ appointments, addAppointment, editAppointment, deleteAppointment }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};
