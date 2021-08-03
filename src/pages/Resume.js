// import React
import React from 'react';

// import css
import '../styles/pages.css';

// list proficiencies and link to download resume
function Resume() {
  return (
    <div className='resume'>
      <div className='container'>
        <div className='center row-padding'>
          <h4 className='container-title'>Resume</h4>
          <h5 className='resume-heading'>Proficiencies:</h5>
          <div className='proficiencies'>
            HTML, CSS, JavaScript, jQuery, Bootstrap/Materialize, Handlebars, Responsive Design, RESTful APIs, Git/GitHub, Heroku, Node.js, Express, User Authentication, MySQL, MongoDB
          </div>
          <a className='btn waves-effect waves-light grey darken-1 resume-link' href='https://github.com/iamalittleforest/20-react-portfolio/raw/main/src/assets/files/Wendy%20Kobayashi_Resume.pdf' download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;