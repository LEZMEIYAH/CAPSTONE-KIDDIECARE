import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contactnumber: "",
    password1: "",
    password2: "",
    userType: "",  // Add userType field
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
      console.log("Success!", response.data);
      setSuccessMessage("Registration Successful!");
    } catch (error) {
      console.log("Error during registration!", error.response?.data);
      if (error.response && error.response.data) {
        Object.keys(error.response.data).forEach(field => {
          const errorMessages = error.response.data[field];
          if (errorMessages && errorMessages.length > 0) {
            setError(errorMessages[0]);
          }
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div style={styles.header}>KiddieCare</div>
      <div style={styles.container}>
        {error && <p style={styles.errorMessage}>{error}</p>}
        {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
        <h2 style={styles.heading}>Create an Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="contactnumber" style={styles.label}>Contact Number:</label>
            <input
              type="text"
              name="contactnumber"
              value={formData.contactnumber}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password1" style={styles.label}>Password:</label>
            <input
              type="password"
              name="password1"
              value={formData.password1}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password2" style={styles.label}>Confirm Password:</label>
            <input
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="userType" style={styles.label}>User Type:</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select User Type</option>
              <option value="guardian">Guardian</option>
              <option value="pediatrician">Pediatrician</option>
            </select>
          </div>
          <button type="submit" disabled={isLoading} style={styles.button}>
            Register
          </button>
          <p style={styles.link}>
            Already have an account? <Link to="/login" style={styles.loginLink}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

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
    position: 'relative', 
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'lightgreen',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  errorMessage: {
    color: 'red',
    marginBottom: '15px',
  },
  successMessage: {
    color: 'green',
    marginBottom: '15px',
  },
  heading: {
    marginBottom: '20px',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    marginTop: '10px',
  },
  loginLink: {
    color: 'green', 
    textDecoration: 'none',
  }
};
