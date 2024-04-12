import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';

function Contact() {

    // create the useState variables
    const [ guestName, setGuestName ] = useState('');
    const [ guestEmail, setGuestEmail ] = useState('');
    const [ guestMessage, setGuestMessage ] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

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
          message: guestMessage
        };

        // sending to backend, can be used for further processing
        console.log(formData);

        // clear the fields
        setGuestName('');
        setGuestEmail('');
        setGuestMessage('');
      };

      return(
        <div className="container p-4">
        <h1 className="text-white-emphasis text-center">Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
  
          <div className="form-floating mb-3">
            <input name="name" type="name" className="form-control bg-secondary" placeholder="Guest Name" value={guestName} onChange={(e) => setGuestName(e.target.value)}></input>
            <label>Name</label>
          </div>
          <div className="form-floating mb-3 ">
            <input name="email" type="email" className="form-control bg-secondary" placeholder="Guest Email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)}></input>
            <label>Email</label>
          </div>
          <div className="form-floating mb-3 ">
            <textarea name="message" className="form-control bg-secondary" placeholder="Guest Message" value={guestMessage} onChange={(e) => setGuestMessage(e.target.value)}></textarea>
            <label>Enter a message</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      );
}

// export thee contact function
export default Contact;