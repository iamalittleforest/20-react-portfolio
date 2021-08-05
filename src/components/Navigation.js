/* eslint-disable jsx-a11y/anchor-is-valid */

// import react
import React, { useEffect } from 'react';

// import Materialize
import M from 'materialize-css/dist/js/materialize.min.js';

// import icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import css
import '../styles/components.css';

// links to About, Portfolio, Contact, and Resume pages
function Navigation(props) {

  // sidenav functionality
  useEffect(() => {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }, []);

  return (
    <div>
      <nav className='navigation'>
        <div className='container nav-wrapper'> 
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <FontAwesomeIcon icon={faBars} />
          </a>
          <ul id='nav-mobile' className='left hide-on-med-and-down'>
            <li>
              <a className={props.currentPage === 'AboutMe' ? 'nav-link current' : 'nav-link'} href='#about' onClick={() => props.handlePageChange('AboutMe')}>
                About Me
              </a>
            </li>
            <li>
              <a className={props.currentPage === 'Portfolio' ? 'nav-link current' : 'nav-link'} href='#portfolio' onClick={() => props.handlePageChange('Portfolio')}>
                Portfolio
              </a>
            </li>
            <li>
              <a className={props.currentPage === 'Contact' ? 'nav-link current' : 'nav-link'} href='#contact' onClick={() => props.handlePageChange('Contact')}>
                Contact
              </a>
            </li>
            <li>
              <a className={props.currentPage === 'Resume' ? 'nav-link current' : 'nav-link'} href='#resume' onClick={() => props.handlePageChange('Resume')}>
                Resume
              </a>
            </li>
          </ul>
          <span className='brand-logo right name'>WENDY KOBAYASHI</span>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a className={props.currentPage === 'AboutMe' ? 'nav-link current' : 'nav-link'} href='#about' onClick={() => props.handlePageChange('AboutMe')}>
            About Me
          </a>
        </li>
        <li>
          <a className={props.currentPage === 'Portfolio' ? 'nav-link current' : 'nav-link'} href='#portfolio' onClick={() => props.handlePageChange('Portfolio')}>
            Portfolio
          </a>
        </li>
        <li>
          <a className={props.currentPage === 'Contact' ? 'nav-link current' : 'nav-link'} href='#contact' onClick={() => props.handlePageChange('Contact')}>
            Contact
          </a>
        </li>
        <li>
          <a className={props.currentPage === 'Resume' ? 'nav-link current' : 'nav-link'} href='#resume' onClick={() => props.handlePageChange('Resume')}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;