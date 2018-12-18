import React from 'react';
import { Link } from 'react-router-dom';

export default function UserPortal() {
  return(
    <div className='UserPortal'>
      <Link to="/user"><button>UserPortal</button></Link>
      <Link to="/viewer"><button>Test Viewer</button></Link>
    </div>
  )
}
