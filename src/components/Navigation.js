/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navigation.css';

export default class Navigation extends React.Component {
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
          <div class="container nav-wrapper">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <FontAwesomeIcon icon={faBars} />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a className="nav-link" href="#about-container" alt="About">About</a></li>
              <li><a className="nav-link" href="#portfolio-container" alt="Portfolio">Portolio</a></li>
              <li><a className="nav-link" href="#contact-container" alt="Contact">Contact</a></li>
              <li><a className="nav-link" href="#resume-container" alt="Resume">Resume</a></li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li><a className="nav-link" href="#about-container" alt="About">About</a></li>
          <li><a className="nav-link" href="#portfolio-container" alt="Portfolio">Portfolio</a></li>
          <li><a className="nav-link" href="#contact-container" alt="Contact">Contact</a></li>
          <li><a className="nav-link" href="#contact-resume" alt="Resume">Resume</a></li>
        </ul>
      </div>
    );
  }
}