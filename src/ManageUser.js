import React, { useState } from 'react';
import './manage.css';

import { useNavigate } from 'react-router-dom';
import Header2 from './header2';
import Footer from './footer';

const ManageParkUserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    pkno: localStorage.getItem('parking'),
    action: 'register',
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/parkUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the registration was successful based on the response status
      if (response.status === 200) {
        setRegistrationStatus('success');
        // Clear form fields after successful registration
        setFormData({
          username: '',
          password: '',
          pkno: '',
          action: 'register',
        });
      } else {
        setRegistrationStatus('error');
      }

      // Redirect or handle success
      navigate('/manageUser');
    } catch (error) {
      console.error('Error submitting form:', error);
      setRegistrationStatus('error');
    }
  };

  return (
    <div>
      <Header2 />
      <div className="content">
        <form onSubmit={handleSubmit}>
          {registrationStatus === 'success' && (
            <div style={{color: 'green'}} className="success-message">Request successful!</div>
          )}
          {registrationStatus === 'error' && (
            <div style={{color: 'red'}} className="error-message">Error submitting form. Please try again.</div>
          )}

          <h1>Register or Delete a Park User</h1>

          
          <label htmlFor="name">Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />

          <label htmlFor="password">Password:</label>
          <input type="text" name="password" value={formData.password} onChange={handleChange} required />

          <label htmlFor="action">Select Action:</label>
          <select name="action" value={formData.action} onChange={handleChange} required>
            <option value="register">Register</option>
            <option value="delete">Delete</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ManageParkUserForm;
