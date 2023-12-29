import React, { useEffect, useState } from 'react';
import HeaderLogin from './header2';
import Footer from './footer';

const Reports = () => {
  const [reportsData, setReportsData] = useState({
    dailyReports: [],
    weeklyReports: [],
    monthlyReports: [],
  });

  useEffect(() => {
    // Fetch reports data from the server when the component mounts
    fetch('http://localhost:3001/reports') // Update with the actual path to your reports endpoint
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Reports data:', data);
  
        setReportsData(data);
      })
      .catch(error => console.error('Error fetching reports data:', error));
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts
  
  return (
    <div>
      <HeaderLogin />

      <style>
        {`
        
          .reportsHeader {
            color: white;
            text-align: center;
          }

          /* Style the h1 element */
          h1 {
            color: #ffffff;
            text-align: center;
            margin-left: 1px;
          }

          h2 {
            text-align: center;
          }

          /* Style the reports list */
          .reportsUl {
            list-style-type: none;
            padding: 0;
          }

          /* Style each report item */
          .reportsLi {
            background-color: #fff;
            border: 1px solid #ddd;
            margin: 10px;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 450px;
          }

          /* Style the brand details */
          .reportsLi span {
            font-weight: bold;
          }

          /* Add some margin to the brand details */
          .reportsLi div {
            margin-top: 10px;
          }

          /* Style the footer */
          footer {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
            width: 100%;
          }

          /* Style the vertical sections */
          .verticalSection {
            margin-bottom: 20px;
          }

          .parent {
            display: flex;
          }
          .verticalSection{
            margin-left: 10px;
          }
        `}
      </style>

      <h1 className="reportsHeader">Reports</h1>
      <div className="parent">
        {/* Daily Reports Section */}
        
<div className="verticalSection verticalSection1">
  <h2 style={{color: 'white'}}>Daily Reports</h2>
  <ul className="reportsUl">
    {reportsData.dailyReports.map((report, index) => (
      <li key={index} className="reportsLi">
        <h3>Details:</h3>
        {renderBrandDetails(report.brand)}
      </li>
    ))}
  </ul>
</div>

<div className="verticalSection">
  <h2 style={{color: 'white'}}>Weekly Reports</h2>
  <ul className="reportsUl">
    {reportsData.weeklyReports.map((report, index) => (
      <li key={index} className="reportsLi">
        <h3>Details:</h3>
        {renderBrandDetails(report.brand)}
      </li>
    ))}
  </ul>
</div>

<div className="verticalSection">
  <h2 style={{color: 'white'}}>Monthly Reports</h2>
  <ul className="reportsUl">
    {reportsData.monthlyReports.map((report, index) => (
      <li key={index} className="reportsLi">
        <h3>Details:</h3>
        {renderBrandDetails(report.brand)}
      </li>
    ))}
  </ul>
</div>

      </div>

      <Footer />
    </div>
  );
};

export default Reports;

const renderBrandDetails = (brand) => {
  const brandDetails = JSON.parse(brand);

  console.log('Brand Details:', brandDetails);
  return (
    <div>
      <p>
        {brandDetails.name} - {brandDetails.make} - {brandDetails.model} - {brandDetails.variant}
      </p>
      <p>Type: {brandDetails.action}</p>
      <p>Number Plate: {brandDetails.NumberPlate}</p>
     
    </div>
  );
};

// <p>Action: {brandDetails.action || 'Not specified'}</p>