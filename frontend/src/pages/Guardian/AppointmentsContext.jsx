import React, { createContext, useState } from 'react';

export const AppointmentsContext = createContext();

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const editAppointment = (index, updatedAppointment) => {
    const newAppointments = [...appointments];
    newAppointments[index] = updatedAppointment;
    setAppointments(newAppointments);
  };

  const deleteAppointment = (index) => {
    const newAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(newAppointments);
  };

  return (
    <AppointmentsContext.Provider
      value={{ appointments, addAppointment, editAppointment, deleteAppointment }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};
