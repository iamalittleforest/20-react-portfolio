// import react
import React from 'react';

// import icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// import css
import '../styles/components.css';

// links to GitHub, LinkedIn, and Twitter profiles
function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row center row-padding'>
          <a className='btn-floating grey darken-3 footer-link' href='https://www.github.com/iamalittleforest' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} size='lg' />
          </a>
          <a className='btn-floating grey darken-3 footer-link' href='https://www.linkedin.com/in/wendy-kobayashi' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
          </a>
          <a className='btn-floating grey darken-3 footer-link' href='https://twitter.com/iamalilforest' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faTwitter} size='lg' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;