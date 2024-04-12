import React from "react";

function Footer() {
  return (
    <footer>
        <ul className="nav nav-underline p-3 fs-1 gap-4 justify-content-center">
          <a href="https://github.com/thasebby">
            <li className="nav-item">
            <i className="fa-brands fa-github"></i>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/sebastian-saenz-05b397209/">
            <li className="nav-item">
            <i className="fa-brands fa-linkedin"></i>
            </li>
          </a>
          <a href="https://www.instagram.com/thasebby_/">
            <li className="nav-item">
            <i className="fa-brands fa-instagram"></i>
            </li>
          </a>
        </ul>
    </footer>
  );
}

export default Footer;

