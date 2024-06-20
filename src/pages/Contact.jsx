import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';
import emailjs from 'emailjs-com';

function Contact() {

  // create the useState variables
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Validate email format
    const validEmail = validateEmail(guestEmail);

    if (!validEmail) {
      // If email is invalid, display error message
      alert('Please provide a valid email address.');

      return;
    }

    // check if any of the fields are empty
    if (!guestName || !guestEmail || !guestMessage) {
      alert('Please fill in all fields.');
      return;
    }

    // If email is valid, proceed with gathering information
    const formData = {
      name: guestName,
      email: guestEmail,
      message: guestMessage,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(response => {
        setSuccess(true);
        guestName('');
        guestEmail('');
        guestMessage('');
      })
      .catch(error => {
        console.error('Failed to send message:', error);
        alert('There was an issue sending your message. Please try again.');
      });

    // sending to backend, can be used for further processing
    console.log(formData);

    // clear the fields
    setGuestName('');
    setGuestEmail('');
    setGuestMessage('');
  };

  return (
    <div className="container p-4">
      <h1 className="text-white-emphasis text-center">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>

        <div className="form-floating mb-3">
          <input
            name="name"
            type="name"
            className="form-control bg-secondary"
            placeholder="Guest Name"
            value={guestName} onChange={(e) => setGuestName(e.target.value)}
            required
          ></input>
          <label>Name</label>
        </div>

        <div className="form-floating mb-3 ">
          <input
            name="email"
            type="email"
            className="form-control bg-secondary"
            placeholder="Guest Email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)}
            required>
          </input>
          <label>Email</label>
        </div>

        <div className="form-floating mb-3 ">
          <textarea
            name="message"
            className="form-control bg-secondary"
            placeholder="Guest Message"
            value={guestMessage} onChange={(e) => setGuestMessage(e.target.value)}
            required>
          </textarea>
          <label>Enter a message</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {success && <p>Thank you! Your message has been sent.</p>}
    </div>
  );
};

// export thee contact function
export default Contact;