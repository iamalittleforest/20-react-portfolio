import React from 'react';
import '../styles/Project.css';

export default function Project(props) {
  return (
    <div className="card project-card">
    <div className="card-image">
      <img className="project-img" src={props.image} alt={props.alt}/>
    </div>
    <div className="card-stacked">
      <div className="card-content project-container">
        <span className="card-title project-title">{props.title}</span>
        <p className="project-description">{props.description}</p>
        <p className="project-tech">{props.tech}</p>
      </div>
      <div className="card-action project-links">
        <a className="links" href={props.deployed} target="_blank" rel="noreferrer">Deployed App</a>
        <a className="links" href={props.repo} target="_blank" rel="noreferrer">GitHub Repo</a>
      </div>
    </div>
  </div>
  );
}