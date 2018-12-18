import React from 'react';
import Footer from './Footer';

function Landing(){

  return (
    <div>
      <div className='Landing'>
        <div id='hero'>
          <h4>Hero</h4>
        </div>
        <div id='features'>
          <h4>Tabbable Features Overview</h4>
        </div>
        <div id='intent'>
          <h4>Purpose/Utility</h4>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Landing;
