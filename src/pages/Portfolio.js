import React from 'react';
import Project from './Project';
import '../styles/pages.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='container'>
        <div className='row center row-padding'>
          <h5 className='container-title'>
            Portfolio
          </h5>
          <Project />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;