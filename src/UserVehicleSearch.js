import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header3 from './headerUser';
import Footer from './footer';

const UserSearchVehicle = () => {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const parking = localStorage.getItem('parking');
      const response = await fetch('http://localhost:3001/vehicleSearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: searchName, parking: parking }),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Search successful', jsonResponse.results);

        // Update state with the search results
        setSearchResults(jsonResponse.results);

        // Set showResults to true to display the results
        setShowResults(true);
      } else {
        console.error('Search failed');
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };
  
  const handleBack = () => {
    // Reset state and hide results when going back
    setSearchResults([]);
    setShowResults(false);
  };
 
  return (
    <div>
      <Header3 />

      <style>
        {`
          /* Content Styles */
          .content {
            margin-bottom: -220px;
            margin-top: 800px;
          }

          .content h1 {
            color: #333;
            margin-bottom: 20px;
            display: ${showResults ? 'none' : 'block'}; /* Hide header when showResults is true */
          }

          .content form {
            margin-top: 10px;
            display: ${showResults ? 'none' : 'block'}; /* Hide form when showResults is true */
          }

          .content label {
            font-weight: bold;
            display: block;
            margin-bottom: 5px;
          }

          .content input[type="text"] {
            width: 100%;
            padding: 8px;
            margin: 5px 0;
            box-sizing: border-box;
          }

          .content button[type="submit"] {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
          }

          /* Results Styles */
          .results-container {
            margin-top: 20px;
            max-height: 300px;
            overflow-y: auto;
          }

          .result-item {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #f0f0f0;
            border-radius: 5px;
          }

          .back-button {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            display: ${showResults ? 'block' : 'none'};
            
          }
          .searchForm{
            width: 300px;
          }
        `}
      </style>

      <div className="content">
         <div
          style={{
            position: 'absolute',
            top: '48%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.7)',
            padding: '40px',
            borderRadius: '5px',
          }}
        >
          <h1 style={{marginLeft: '80px'}}>Search Vehicle</h1>
          <form className='searchForm' onSubmit={handleSearchSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              required
            />
            <br />
            <button style={{marginLeft: '100px'}} type="submit">Search</button>
          </form>

          {showResults && (
            <div className="results-container" style={{
            
              padding: '30px',
              borderRadius: '5px',
            }}>
              <h2 style={{marginLeft: '80px'}}>Search Results:</h2>
              {searchResults.map((result, index) => (
                <div style={{
                  width: '300px',
                  borderRadius: '5px',
                }} key={index} className="result-item">
                  <p>
                    Name: {result.name}<br />
                    Make: {result.make}<br />
                    Model: {result.model}<br />
                    Variant: {result.variant}
                  </p>
                </div>
              ))}
              <button style={{marginLeft: '90px'}} className="back-button" onClick={handleBack}>
                Back to Search
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserSearchVehicle;