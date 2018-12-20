import React from 'react';
import Logo from './Logo.jsx';
import Nav from './Nav.jsx';

export default function Header() {

    return (
      <div className='Header'>
        <Nav/>
        <Logo/>
      </div>
    );
  }
