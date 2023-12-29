
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
    <div
      className="content"
      style={{
        marginTop: '-10px',
        borderRadius: '5px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
       
      }}
     
    >
      <Header /> 
      <style>
        {`
          .content {
           
            width: 600px;
            
          }
          
          .content h1 {
            color: #333;
          }
          
          .content form {
          
          }
          
          .content label {
            font-weight: bold;
          }
          
          .content input[type="text"],
          .content input[type="password"] {
            width: 100%;
            padding: 5px;
            margin: 5px 0;
            border-radius: 7px;
          }
          
          .content button[type="submit"] {
            background-color: #333;
            color: #fff;
            padding: 10px 80px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 20px;
            margin-top: 30px;
          }
        `}
      </style>
    
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(255, 255, 255, 0.7)',
          padding: '100px',
          borderRadius: '5px',
          marginBottom: '-300px',
        }}
      >
        
        <div className="registration-form">
        <h2>Registration Form</h2>

        {registrationStatus === 'success' && (
          <div className="success-message">Registration successful!</div>
        )}

        {registrationStatus === 'error' && (
          <div className="error-message">Registration failed. Please try again.</div>
        )}
         </div>

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