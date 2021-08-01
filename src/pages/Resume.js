// import React
import React from 'react';

// import icons from Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

// import css
import '../styles/pages.css';

// list proficiencies and link to download resume
function Resume() {
  return (
    <div className='resume'>
      <div className='container'>
        <div className='row center row-padding'>
          <h4 className='container-title'>Resume</h4>
          <h5 className='resume-heading'>Proficiencies:</h5>
          <div className='proficiencies'>
            HTML, CSS, JavaScript, jQuery, Bootstrap/Materialize, Handlebars, Responsive Design, RESTful APIs, Git/GitHub, Heroku, Node.js, Express, User Authentication, MySQL, MongoDB
          </div>
          <h5 className='resume-heading'>Download Link:</h5>
          <a className='btn-floating grey darken-3 resume-link' href='../assets/files/WendyKobayashi_Resume.pdf' download>
            <FontAwesomeIcon icon={faFilePdf} size='lg' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;