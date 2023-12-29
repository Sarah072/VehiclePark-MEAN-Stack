import React, { useState } from 'react';
import Header3 from './headerUser'; // Adjust the path based on your project structure
import Footer from './footer'; // Adjust the path based on your project structure

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const sendFormData = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
     
      if (responseData.success) {
        setMessage(responseData.message);
      } else {
        setMessage('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const userMessage = e.target.elements.message.value;

    const formData = {
      name,
      email,
      message: userMessage,
    };

    await sendFormData(formData);
  };

  return (
    <div>
      <Header3 />

      <style>
        {`
         

          header {
            background-color: #333;
            color: #fff;
            padding-left: 5px;
            display: flex;
            justify-content: space-between;
          }

          h1 {
            text-align: center;
            color: #fffcfc;
          }

          form {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 50px;
          }

          label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
          }

          input,
          textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            box-sizing: border-box;
            border: 1px solid #7e7e7e;
            border-radius: 4px;
            font-size: 14px;
          }

          textarea {
            resize: vertical;
          }

          button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }

          button:hover {
            background-color: #45a049;
          }

          p {
            color: #4caf50;
            text-align: center;
          }

          footer {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
          }

          nav {
            display: flex;
          }

          nav ul {
            list-style-type: none;
            padding: 0;
          }

          nav li {
            display: inline;
            margin-right: 30px;
          }

          .home {
            margin-left: 600px;
          }

          nav a {
            text-decoration: none;
            color: #fff;
          }

          .contactUsH {
            text-align: center;
            margin-top: 50px;
            color: #010101;
          }
        `}
      </style>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <h1 className="contactUsH">Contact Us</h1>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="8" required></textarea>

        <button type="submit">Submit</button>
      </form>

      <Footer />
    </div>
  );
};

export default ContactForm;
