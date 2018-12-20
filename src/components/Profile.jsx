// For logged-in Users, render a profile picture in UserInfo absolutely positioned over the Frame in Profile.

import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import UserInfo from './User/UserInfo';


function Profile(){

  return (
    <div className='profile-bg'>
      <Header/>
      <div className='Profile'>
        <UserInfo/>
        <Link to="/viewer"><button>Test Viewer</button></Link>
      </div>
    </div>
  )
}

export default Profile;
