// import React
import React from 'react';

// import css
import '../styles/pages.css';

// include photo and bio
function AboutMe() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row center row-padding'>
          <h4 className='container-title'>
            About Me
          </h4>
          <img className='about-img circle' src='../assets/images/Profile.jpg' alt='Profile' />
          <p className='about-description'>
            Hello! My name is Wendy Kobayashi. I am a mechanical engineer turned full stack web developer with 4+ years as a regulatory professional and 6+ years as an engineer in the medical device industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;