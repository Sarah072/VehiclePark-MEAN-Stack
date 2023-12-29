import React from 'react';
import Header3 from './headerUser'; // Adjust the path based on your project structure
import Footer from './footer'; // Adjust the path based on your project structure

const UserHome = () => {
  return (
    <div>
      <Header3 />

      <div
        className="content"
        style={{
          backgroundColor: '#f0f0f0',
          borderRadius: '5px',
          width: '100%',
          textAlign: 'center',
          marginBottom: '-220px',
          marginTop: '800px',
          textAlign: 'center',
        }}
      >
       
        <div
          style={{
            position: 'absolute',
            top: '48%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.7)',
            padding: '100px',
            borderRadius: '5px',
          }}
        >
          <h1 style={{ color: '#333' }}>Welcome to Vehicle Park!</h1>
          <p style={{ fontWeight: 'bold' }}>
            "Our app makes parking stress-free and efficient. Join our community of
            satisfied users and enjoy a smarter way to park your vehicle"
          </p>
          <a
            href="/UserManageBrandForm"
            className="button"
            style={{
              backgroundColor: '#333',
              color: '#fff',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'inline-block',
              marginTop: '10px',
            }}
          >
            Get Started
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserHome;
