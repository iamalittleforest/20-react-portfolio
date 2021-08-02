// import React
import React from 'react';

// import css
import '../styles/pages.css';

// form with fields for name, email, and message (w/validation)
function Contact() {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='row-padding'>
          <h4 className='container-title'>Contact</h4>
          <form className='col s12 m8 offset-m2 l6 offset-l3'>
            <div className='input-field'>
              <input id='name' type='text' className='validate' required />
              <label htmlFor='name'>Name</label>
              <span className='helper-text' data-error='Please provide your name' data-success=''></span>
            </div>
            <div className='input-field'>
              <input id='email' type='email' className='validate' required />
              <label htmlFor='email'>Email</label>
              <span className='helper-text' data-error='Please provide a valid email address' data-success=''></span>
            </div>
            <div className='input-field'>
              <textarea id='message' className='materialize-textarea validate' required></textarea>
              <label htmlFor='message'>Message</label>
              <span className='helper-text' data-error='Please provide a message' data-success=''></span>
            </div>
            <div className='submit-btn'>
              <button className='btn waves-effect waves-light grey darken-1' type='submit' name='action'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;