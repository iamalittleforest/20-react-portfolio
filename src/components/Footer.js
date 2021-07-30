import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-solid-svg-icons'
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="page-footer footer">
      <div className="container">
        <div className="row center row-padding">
          <a className="btn-floating btn-link" href="https://www.github.com/iamalittleforest" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="btn-floating btn-link"  href="https://www.linkedin.com/in/wendy-kobayashi" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="btn-floating btn-link"  href="https://twitter.com/iamalilforest" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
}