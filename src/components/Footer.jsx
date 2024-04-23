import React from "react";

function Footer() {
  return (
    <footer>
      <ul className="footer nav-underline p-3 fs-1 gap-4 justify-content-center">
        <li className="nav-item">
          <a href="https://github.com/thasebby" className="nav-link">
            <i className="fab fa-github"></i>
          </a>
        </li>

        <li className="nav-item">
          <a href="https://www.linkedin.com/in/sebastian-saenz-05b397209/" className="nav-link">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>

        <li className="nav-item">
          <a href="https://www.instagram.com/thasebby_/" className="nav-link">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

