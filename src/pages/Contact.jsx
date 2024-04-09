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
        <div> 
            <h1>Any questions for me?</h1>

            <form id="contactForm">
                <div className="tooltip">
                    <h2>Enter your name:</h2>
                    <input className="form-control" id="guestName" type="text" value={guestName} placeholder="Guest Name" onChange = {(e) => setGuestName(e.target.value)}></input>
                    <span className="tooltip tooltiptext">Enter your name</span>
                </div>

                <div className="tooltip">
                    <h2>Enter your email:</h2>
                    <input className="form-control" id="guestEmail" type="text" value={guestEmail} placeholder="Guest Email" onChange = {(e) => setGuestEmail(e.target.value)}></input>
                    <span className="tooltip tooltiptext">Enter your email</span>
                </div>

                <div className="tooltip">
                    <h2>Enter your message:</h2>
                    <textarea className="form-control" id="guestMessage" type="text" value={guestMessage} placeholder="Guest Message" onChange = {(e) => setGuestMessage(e.target.value)}></textarea>
                    <span className="tooltip tooltiptext">enter your message</span>
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
      );
}

// export thee contact function
export default Contact;