import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import '../styles/pages.css';

function Resume() {
  return (
    <div className='resume'>
      <div className='container'>
        <div className='row center row-padding'>
          <h5 className='container-title'>Resume</h5>
          <h3 className='resume-heading'>Proficiencies:</h3>
          <div className='proficiencies'>
            HTML, CSS, JavaScript, jQuery, Bootstrap/Materialize, Handlebars, Responsive Design, RESTful APIs, Git/GitHub, Heroku, Node.js, Express, User Authentication, MySQL, MongoDB
          </div>
          <h3 className='resume-heading'>Download Resume:</h3>
          <a className='btn-floating grey darken-3 resume-link' href='../assets/files/WendyKobayashi_Resume.pdf' download>
            <FontAwesomeIcon icon={faFilePdf} size='lg' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;