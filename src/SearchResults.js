import React from 'react';
import Header2 from './header2'; // Adjust the path based on your project structure
import Footer from './footer'; // Adjust the path based on your project structure

const SearchResults = ({ results }) => {
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
            overflow-y: scroll; /* Add a vertical scrollbar */
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
        `}
      </style>

      <div
        className="content"
        style={{ backgroundColor: '#f0f0f0', width: '100%', position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.7)',
            padding: '70px',
            paddingLeft: '100px',
            paddingRight: '100px',
            borderRadius: '5px',
          }}
        >
          <h1>Search Results</h1>
          <div className="scrolling-list">
            <ul>
              {results?.map((result, index) => (
                <li key={index}>
                  Name: {result.name}<br />
                  Make: {result.make}<br />
                  Model: {result.model}<br />
                  Variant: {result.variant}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
