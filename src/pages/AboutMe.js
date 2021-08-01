import React from 'react';
import '../styles/pages.css';

function AboutMe() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row center row-padding'>
          <h5 className='container-title'>
            About Me
          </h5>
          <img className='about-img circle' src='../images/profile.jpg' alt='Profile' />
          <p className='about-description'>
            Hello! My name is Wendy Kobayashi. I am a mechanical engineer turned full stack web developer with 4+ years as a regulatory professional and 6+ years as an engineer in the medical device industry. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;