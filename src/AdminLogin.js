import React from 'react';
import './AdminLogin.css'; // Make sure to import your CSS file

import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Login = () => {
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
          const response = await fetch('http://localhost:3001/adminLogin', {
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
  
          const data = await response.json();
  
          if (response.ok) {
              // Check the success property in the JSON response
              if (data.success) {
                  console.log('Login successful');
                  localStorage.setItem('parking', event.target.pkno.value);
                  navigate('/home');
              } else {
                  console.error('Login failed');
              }
          } else {
              console.error('Login failed');
          }
      } catch (error) {
          console.error('Error:', error);
      }
  };
  
  return (
      <>
          <Header />

          <div className="content">
           
          <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(255, 255, 255, 0.7)',
          padding: '50px',
          paddingLeft: '100px',
          paddingRight: '100px',
          borderRadius: '5px',
          justifyContent: 'center',
          alignItems: 'center',
         
        }}
              >
                 <h2 style={{marginLeft: '100px'}}>Admin Login</h2>
        <form  style={{ padding: '80px',}} onSubmit={handleSubmit}>
                      <label htmlFor="adminUsername">Admin Username:</label>
                      <input type="text" name="adminUsername" id="adminUsername" required />
                      <br />
                      <label htmlFor="password">Password:</label>
                      <input type="password" name="password" id="password" required />
                      <br />
                      <label htmlFor="pkno">Parking Number:</label>
                      <input type="text" name="pkno" id="pkno" required />
                      <br />
                      <label htmlFor="email">Email:</label>
                      <input type="text" name="email" id="email" required />
                      <br />
                      <button style={{marginLeft: '70px'}} type="submit">Login</button>
                  </form>
              </div>
          </div>

          <Footer />
      </>
  );
};
export default Login;


