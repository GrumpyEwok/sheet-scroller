import React from 'react';

import logo from './../assets/svgs/logo.svg';
import nameplate from './../assets/svgs/nameplate.svg';
import simpleBorder from './../assets/svgs/simple-border.svg';
import ornateBorder from './../assets/svgs/ornate-border.svg';
import htmlTech from './../assets/svgs/html-tech.svg';
import performanceTech from './../assets/svgs/performance-tech.svg';

import Header from './Header';




function Landing(){

  return (
      <div className='Landing'>
        <div className='hero-bg'>
          <Header/>
          <div id='hero-overlay'>
            <img src={nameplate} style={{ width: '40em'}} alt='A decorative nameplate.'/>
            <h2>Hero</h2>
          </div>
        </div>

        <div className='content'>
          <img className='clip-border' src={simpleBorder} style={{width: '100vw', height: '8em', marginTop: '-3.965em', marginLeft: '-0.55em'}} alt='A simple gold tri-petaled border.'/>
          <h1 style={{textAlign: 'center'}}>Purpose/Intent here.</h1>
          <img className='clip-border' src={simpleBorder} style={{width: '100vw', height: '6em', marginTop: '10.68em', marginLeft: '-0.4em'}} alt='A simple gold tri-petaled border.'/>
        </div>

        <div className='features-bg'>
          <div id='features-overlay' className='overlay'>
            <h2>Tabbable Features Overview</h2>
            <img src={htmlTech} style={{ width: '20em'}} alt='A cartoonish vector of an HTML tag.'/>
            <img src={performanceTech} style={{ width: '20em'}} alt='A vector suggesting faster processing power.'/>
          </div>
        </div>
      </div>

  )
}

export default Landing;
