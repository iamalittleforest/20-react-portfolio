import React from 'react';
import Project from './Project';
import '../styles/pages.css';

const projects = [

]

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='container'>
        <div className='row center row-padding'>
          <h5 className='container-title'>
            Portfolio
          </h5>
          <div>
            {projects.map((project) => (
              <Project
                image={project.image}
                alt={project.alt}
                title={project.title}
                description={project.description}
                tech={project.tech}
                deployed={project.deployed}
                repo={project.repo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;