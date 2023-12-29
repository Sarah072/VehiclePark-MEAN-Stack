import React from 'react';
import './headerUser.css';

const NavigationBar = () => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '5px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 className='logo'>Vehicle Park</h1>
        <ul className="navUser">
          <li className="home2" style={{ marginLeft: '800px' }}>
            <a href="/UserHome">Home</a>
          </li>
          <li>
            <a href="/UserManageBrandForm">Manage Vehicle</a>
          </li>
          <li>
            <a href="/UserSearchVehicle">Search Vehicle</a>
          </li>
       
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="/userLogin">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;

