import React from 'react';

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row row-padding">
          <h5 className="container-title">
            Contact
          </h5>
          <form className="col s12 ">
            <div className="row">
              <div className="input-field col s6 offset-m3">
                <input id="name" type="text" className="validate" required />
                <label for="name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 offset-m3">
                <input id="email" type="email" className="validate" required />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 offset-m3">
                <textarea id="message" className="materialize-textarea validate" required></textarea>
                <label for="message">Message</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}