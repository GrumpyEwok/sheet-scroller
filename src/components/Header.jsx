import React from 'react';
import Logo from './Logo.jsx';
import Nav from './Nav.jsx';

function Header() {

    return (
      <div className='Header'>
        < Nav />
        < Logo />
        <div className='portal-wrapper'>
          <h4>User Controls</h4>
        </div>
      </div>
    );
  }

export default Header;
