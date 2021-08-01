// import React
import React from 'react';

// import image and css
import profileImg from '../assets/images/Profile.jpg';
import '../styles/pages.css';

// include photo and bio
function AboutMe() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='center row-padding'>
          <h4 className='container-title'>About Me</h4>
          <div className="row">
            <img className='about-img circle' src={profileImg} alt='Profile' />
          </div>
          <div className='row about-description'>
            Hello! My name is Wendy Kobayashi. I am a mechanical engineer turned full stack web developer with 4+ years as a regulatory professional and 6+ years as an engineer in the medical device industry.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;