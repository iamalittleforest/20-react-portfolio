import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="page-footer footer">
      <a className="btn-floating btn-link" href="https://www.github.com/iamalittleforest" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
      <a className="btn-floating btn-link"  href="https://www.linkedin.com/in/wendy-kobayashi" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
      <a className="btn-floating btn-link"  href="https://twitter.com/iamalilforest" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
    </footer>
  );
}