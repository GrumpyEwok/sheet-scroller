import React from 'react';
import Header from './Header/Header';

function Landing(){

  return (

      <div className='Landing'>
        <div className='hero-bg'>
          <Header/>
          <div id='hero-overlay'>
            <h2>Hero</h2>
          </div>
        </div>
        <div className='content'>
          <h2>Purpose/Utility</h2>
        </div>
        <div className='overlay'>
          <h2>Tabbable Features Overview</h2>
        </div>
      </div>

  )
}

export default Landing;
