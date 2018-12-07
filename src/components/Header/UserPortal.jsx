import React from 'react';
import { Link } from 'react-router-dom';
function UserPortal() {
  return(
    <div className='UserPortal'>
      <Link to="/user"><button>UserPortal</button></Link>
    </div>
  )
}

export default UserPortal;
