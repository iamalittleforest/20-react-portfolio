// import react
import React, { useState } from 'react';

// import components
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Navigation from './Navigation';

// import css
import '../styles/components.css';

// renders page based on currentPage
function Header() {

  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <div>
      <div className='header'>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
    </div>
  );
}

export default Header;