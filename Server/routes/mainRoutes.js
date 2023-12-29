const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Report = require('../models/report');
const brandsCollection = require('../models/brand');
// Define your routes and controllers


router.post('/', async (req, res) => {
  console.log('Received registration request');
  const adminUsername = req.body.adminUsername;
  const password = req.body.password;
  const pkno = req.body.pkno;
  const email = req.body.email; // Add this line to get email from the request

  try {
      const newUser = new User({
        adminUsername: adminUsername,
          password: password,
          pkno: pkno,
          email: email, // Add email field
      });

      await newUser.save();
      res.status(200).send();
      
  } catch (err) {
      console.error('Error registering the user:', err);
    
  }
});


router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const user = await User.findOne({ username: username, password: password });

       
if (user) {
    // Send a JSON response indicating successful login
    res.status(200).json({ success: true, message: 'Admin Resgistration successful' });
} else {
    // Send a JSON response indicating failed login
    res.status(401).json({ success: false, message: 'Admin Resgistration failed' });
}
   
} catch (err) {
    console.error('Error during login:', err);
    // Send a JSON response indicating an error occurred during login
    res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


module.exports = router;







/*

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Register = () => {
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adminUsername: event.target.adminUsername.value,
          password: event.target.password.value,
          pkno: event.target.pkno.value,
          email: event.target.email.value,
        }),
      });

      if (response.status === 200) {
        // Registration successful
        setRegistrationStatus('success');
        // Clear form fields after successful registration
        event.target.reset();
      } else {
        // Registration failed
        setRegistrationStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setRegistrationStatus('error');
    }
  };

  return (
    <div className="content">
      <Header />
      <style>
        {`
         
          .content {
            width: 600px;
          }

          .content .success-message {
            color: green;
            margin-top: 10px;
          }

          .content .error-message {
            color: red;
            margin-top: 10px;
          }
        `}
      </style>

      <div className="registration-form">
        <h2>User Registration</h2>

        {registrationStatus === 'success' && (
          <div className="success-message">Registration successful!</div>
        )}

        {registrationStatus === 'error' && (
          <div className="error-message">Registration failed. Please try again.</div>
        )}

        <form onSubmit={handleSubmit}>
        <label htmlFor="adminUsername">Admin Username:</label>
          <input type="text" name="adminUsername" id="adminUsername" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required />
          <br />
          <label htmlFor="pkno">Parking Number:</label>
          <input type="text" name="pkno" id="pkno" required />

          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" required />

          <button type="submit">Register</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
*/