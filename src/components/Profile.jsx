import React from 'react';
import Footer from './Footer';

function Profile(){

  return (
    <div>
      <div className='Profile'>
        <h1>I'm the default user page!</h1>
        <h4>I should have access to:</h4>
        <ul>
          <li>Settings,</li>
          <li>Uploads,</li>
          <li>and a Link to a way to view my associated PDFS.</li>
        </ul>
      </div>
        <Footer/>
    </div>
  )
}

export default Profile;
