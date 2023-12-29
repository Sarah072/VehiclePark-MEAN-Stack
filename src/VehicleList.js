import React, { useEffect, useState } from 'react';
import Header2 from './header2';
import Footer from './footer';

const VehicleList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch brands data from the server
    fetch('http://localhost:3001/vehicleList') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setBrands(data.brands))
      .catch(error => console.error('Error fetching brands data:', error));
  }, []);

  return (
    <div>
      <Header2 />

     
      <style>
        {`
          /* CSS styles for the content section */
          .content {
            width: 600px;
            position: relative;
            margin: 0 auto; /* Center the content horizontally */
            background-color: white;
            margin-top: 50px;
          
            padding: 30px;
          }

          .content h1 {
            color: #333;
          }

          .content form {
            margin-top: 10px;
          
          }

          .content label {
            font-weight: bold;
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

          /* Style for the scrolling list */
          .scrolling-list {
            max-height: 400px; /* Adjust the height as needed */
            overflow-y: scroll;
          }

          /* Style for the fixed background image */
          .fixed-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }
        
          .listLi{
            margin-bottom: 10px;
          }
        `}
      </style>

      <div
        style={{
          width: '600px',
          position: 'relative',
          margin: '0 auto', // Center the content horizontally
          backgroundColor: 'white',
          marginTop: '50px',
          padding: '30px',
         
        }}
      >
        {/* Your existing content structure */}
        <h1 style={{ color: '#333' }}>Vehicle List</h1>
        <div
          className="scrolling-list"
          style={{
            maxHeight: '400px', // Adjust the height as needed
            overflowY: 'scroll',
          }}
        >
          <ul>
            {brands?.map((brand, index) => (
              <li className='listLi' key={index}>
                Name: {brand.name}<br />
                Make: {brand.make}<br />
                Model: {brand.model}<br />
                Variant: {brand.variant}<br />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VehicleList;
