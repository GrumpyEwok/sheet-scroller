import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return(
    <div className='Nav'>
      <Link to="/"><button>Home</button></Link>
      <Link to="/user"><button>UserPortal</button></Link>
      <Link to="/viewer"><button>Test Viewer</button></Link>
    </div>
  );
}
