import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <div>
      <nav className="navigation">
        <div class="container nav-wrapper">  
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <FontAwesomeIcon icon={faBars} />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="nav-link" href="#about-container" alt="About">ABOUT</a></li>
            <li><a className="nav-link" href="#portfolio-container" alt="Portfolio">PORTFOLIO</a></li>
            <li><a className="nav-link" href="#contact-container" alt="Contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a className="nav-link" href="#about-container" alt="About">ABOUT</a></li>
        <li><a className="nav-link" href="#portfolio-container" alt="Portfolio">PORTFOLIO</a></li>
        <li><a className="nav-link" href="#contact-container" alt="Contact">CONTACT</a></li>
      </ul>
    </div>
  );
}