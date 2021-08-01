// import react
import React from 'react';

// import Project component
import Project from './Project';

// import css
import '../styles/pages.css';

// array of projects
const projects = [
  {
    image: '',
    alt: '',
    title: '',
    description: '',
    tech: '',
    deployed: '',
    repo: '',
    key: ''
  },
  {
    image: '',
    alt: '',
    title: '',
    description: '',
    tech: '',
    deployed: '',
    repo: '',
    key: ''
  },
  {
    image: '',
    alt: '',
    title: '',
    description: '',
    tech: '',
    deployed: '',
    repo: '',
    key: ''
  },
  {
    image: '',
    alt: '',
    title: '',
    description: '',
    tech: '',
    deployed: '',
    repo: '',
    key: ''
  },
  {
    image: '',
    alt: '',
    title: '',
    description: '',
    tech: '',
    deployed: '',
    repo: '',
    key: ''
  },
  {
    image: '',
    alt: '',
    title: '',
    description: '',
    tech: '',
    deployed: '',
    repo: '',
    key: ''
  },
]

// list projects (image, title, description, tech, and links to deployed app and repo)
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
                key={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;