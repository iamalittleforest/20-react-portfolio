// import react
import React from 'react';

// import Navigation component
import Navigation from './Navigation';

// import css
import '../styles/components.css';

// calls Navigation component
function Header() {
  return (
    <header className="header">
      <Navigation />
    </header>
  );
}

export default Header;