import React from 'react';
import Header from './Header/Header';

function Profile(){

  return (
    <div className='profile-bg'>
      <Header/>
      <div className='Profile'>
        <h1>I'm the default user page!</h1>
        <h4>I should have access to:</h4>
        <ul>
          <li>Settings,</li>
          <li>Uploads,</li>
          <li>and a Link to a way to view my associated PDFS.</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile;
