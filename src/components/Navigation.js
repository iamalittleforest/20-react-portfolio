/* eslint-disable jsx-a11y/anchor-is-valid */

// import react
import React, { Component } from 'react';

// import Materialize
import M from 'materialize-css/dist/js/materialize.min.js';

// import icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import css
import '../styles/components.css';

// links to About, Portfolio, Contact, and Resume pages
class Navigation extends Component {

  // sidenav functionality
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      let elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <nav className="navigation">
          <div className="container nav-wrapper">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <FontAwesomeIcon icon={faBars} />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a className="nav-link" href="#about-container" alt="About">About</a></li>
              <li><a className="nav-link" href="#portfolio-container" alt="Portfolio">Portfolio</a></li>
              <li><a className="nav-link" href="#contact-container" alt="Contact">Contact</a></li>
              <li><a className="nav-link" href="#resume-container" alt="Resume">Resume</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li><a className="nav-link" href="#about-container" alt="About">About</a></li>
          <li><a className="nav-link" href="#portfolio-container" alt="Portfolio">Portfolio</a></li>
          <li><a className="nav-link" href="#contact-container" alt="Contact">Contact</a></li>
          <li><a className="nav-link" href="#contact-resume" alt="Resume">Resume</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;