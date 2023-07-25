

import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [mail, setMail] = useState('');
  const [feed, setFeed] = useState('');

  const handleFeedback = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/v1/users/addUserFeedback', {
        email: mail,
        feedback: feed,
      })
      .then(() => {
        alert('Feedback added');
      })
      .catch((error) => {
        console.log('Error occurred while submitting', error);
      });
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Contact Us</h1>
        <form className="contact-form">
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <br />
          Feedback:
          <input
            type="text"
            placeholder="Enter your feedback"
            value={feed}
            onChange={(e) => setFeed(e.target.value)}
          />
          <br />
          <button type="submit" onClick={handleFeedback}>
            Submit your feedback
          </button>
        </form>
      </div>
    
    </div>
  );
};

export default Contact;
