import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'

function Footer() {
  return (
    <footer>
      <ul className="footer p-3 fs-1 gap-4 justify-content-center list-inline d-flex">
        <li className="nav-item footer-item">
          <a href="https://github.com/thasebby">
            <i className="fab fa-github footer-link"></i>
          </a>
        </li>

        <li className="nav-item footer-item">
          <a href="https://www.linkedin.com/in/sebastian-saenz-05b397209/">
            <i className="fab fa-linkedin footer-link"></i>
          </a>
        </li>

        <li className="nav-item footer-item">
          <a href="https://www.instagram.com/thasebby_/">
            <i className="fab fa-instagram footer-link"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

