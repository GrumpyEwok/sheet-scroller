import React from 'react';
import Footer from './Footer';

function Landing(){

  return (
    <div>
      <div className='Landing'>
        <div className='hero-bg'>
          <div id='hero-overlay'>
            <h2>Hero</h2>
          </div>
        </div>
        <div className='overlay'>
          <h2>Tabbable Features Overview</h2>
        </div>
        <div className='overlay'>
          <h2>Purpose/Utility</h2>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Landing;
