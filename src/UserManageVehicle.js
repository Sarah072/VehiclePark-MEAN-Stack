import React, { useState } from 'react';
import './manage.css';

import { useNavigate } from 'react-router-dom';
import Header3 from './headerUser';
import Footer from './footer';

const UserManageBrandForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    make: '',
    model: '',
    variant: '',
    picture: null,
    action: 'register',
    parking: localStorage.getItem('parking'),
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('http://localhost:3001/manage-brand', {
        method: 'POST',
        body: formDataToSend,
      });

      // Check if the registration was successful based on the response status
      if (response.status === 200) {
        setRegistrationStatus('success');
        // Clear form fields after successful registration
        setFormData({
          name: '',
          make: '',
          model: '',
          variant: '',
          picture: null,
          action: 'register',
          parking: localStorage.getItem('parking'),
        });
      } else {
        setRegistrationStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setRegistrationStatus('error');
    }
  };

  return (
  <div>
     <Header3 />
 
    <div className="content">
       
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1>Register Brand</h1>

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="make">Make:</label>
        <input type="text" name="make" value={formData.make} onChange={handleChange} required />

        <label htmlFor="model">Model:</label>
        <input type="text" name="model" value={formData.model} onChange={handleChange} required />

        <label htmlFor="variant">Variant:</label>
        <input type="text" name="variant" value={formData.variant} onChange={handleChange} required />

        <label htmlFor="picture">Upload your car's number plate:</label>
        <input
          className="image"
          type="file"
          name="picture"
          accept="image/*"
          onChange={handleChange}
        />

        <label htmlFor="action">Select Action:</label>
        <select name="action" value={formData.action} onChange={handleChange} required>
          <option value="register">Register</option>
        </select>

        <button type="submit">Submit</button>
        
        {registrationStatus === 'success' && (
            <div style={{marginLeft: '180px', color: 'green', marginTop: '5px'}} className="success-message">Registration successful!.</div>
          )}
          {registrationStatus === 'error' && (
            <div style={{marginLeft: '180px', color: 'red', marginTop: '5px'}} className="error-message">Error submitting form.</div>
          )}
      </form>
      
      </div>
      <Footer />
    </div>
  );
};

export default UserManageBrandForm;
