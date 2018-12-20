import React from 'react';
import { Link } from 'react-router-dom';

import logo from './../assets/svgs/logo.svg';

export default function Header() {

    return (
      <div className='Header'>
        <Link to="/"><button>Home</button></Link>
        <img id='logo' src={logo} alt='A blue and gold floral logo.'/>
        <Link to="/user"><button>UserPortal</button></Link>
      </div>
    );
  }
