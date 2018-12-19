import React from 'react';
import Logo from './Logo.jsx';
import Nav from './Nav.jsx';
import UserPortal from './UserPortal';

export default function Header() {
  
    return (
      <div className='Header'>
        <Nav/>
        <Logo/>
        <UserPortal/>
      </div>
    );
  }
