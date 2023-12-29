import React from 'react';

const NavigationBar = () => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '5px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 className='logo'>Vehicle Park</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li className="home" style={{ marginLeft: '600px' }}>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/manage">Manage Vehicle</a>
          </li>
          <li>
            <a href="/vehicleSearch">Search Vehicle</a>
          </li>
          <li>
            <a href="/reports">Reports</a>
          </li>
          <li>
            <a href="/vehicleList">Vehicle List</a>
          </li>
          <li>
            <a href="/manageUser">Manage Users</a>
          </li>
          <li>
            <a href="/login">Logout</a>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
