import React from 'react';
import Header from './Header';
import logo from './../assets/svgs/logo.svg';
import laurels from './../assets/svgs/laurel-wreath.svg';
import nameplate from './../assets/svgs/nameplate.svg';
import simpleBorder from './../assets/svgs/simple-border.svg';
import ornateBorder from './../assets/svgs/ornate-border.svg';
import htmlTech from './../assets/svgs/html-tech.svg';
import performanceTech from './../assets/svgs/performance-tech.svg';




function Landing(){

  return (
      <div className='Landing'>
        <div className='hero-bg'>
          <Header/>
          <div id='hero-overlay'>
            <img src={nameplate} style={{ width: '40%'}} alt='A decorative nameplate.'/>
            <img src={simpleBorder} alt='A simple blue tri-petaled border.'/>
            <img id='logo' src={logo} alt='A blue and gold floral logo.'/>
            <h2>Hero</h2>
          </div>
        </div>
        <div className='content'>
          <h2>Purpose/Utility</h2>
        </div>
        <div className='features-bg'>
          <div id='features-overlay' className='overlay'>
            <h2>Tabbable Features Overview</h2>
          </div>
        </div>
      </div>

  )
}

export default Landing;
