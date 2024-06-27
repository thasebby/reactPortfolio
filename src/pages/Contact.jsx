import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';
import '@fortawesome/fontawesome-free/css/all.css'


function Contact() {

  // create the useState variables
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const guestEmail = 'sebastian.saenz1203@gmail.com';
    const subject = 'Contact Request';
    const message = 'I would like to get in touch with you.';

    const mailtoLink = `mailto:${guestEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    setSuccess(true);
  };

  return (
    <div className="container p-4">
      <h1 className="text-white-emphasis text-center">Contact Me</h1>

      <ul className="footer p-3 fs-1 gap-4 justify-content-center list-inline d-flex">
        <li className='nav-item footer-item'>
          <a href="#" onClick={handleSubmit}>
            <i className='fas fa-envelope footer-link'></i>
          </a>
        </li>
      </ul>

      {success && <p>Opened an external email service!</p>}
    </div>
  );
};

// export thee contact function
export default Contact;