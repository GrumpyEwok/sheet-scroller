import React, { Component } from 'react';

import laurels from './../../assets/svgs/laurel-wreath.svg';


export default class UserInfo extends Component {
  constructor(){
    super();
    this.state = {
      // User related state needs to be stored here. Associated metadata -- profile info, settings, and Sheet Music (uploads?).
    };
  }

  render() {

    return (
      <div className='UserInfo'>
        <div className='profile-top-bar' style={{width: '100%', height: '2em', backgroundColor: '#172531', position: 'absolute', top: 0}}></div>
        <div className='profile-pic-wrapper' style={{position: 'absolute', top: 0, left: 0, margin: '3em auto auto 2em'}}>
          <img src={laurels} style={{ width: '15em' }} alt='A decorative wreath of golden leaves.'/>
          <h4 style={{position: 'absolute', top: 0, margin: '4em 3.5em'}}>UserAvatarHere</h4>
        </div>
        <div>
          <h1>I'm the default user page!</h1>
          <h4>I should have access to:</h4>
          <ul>
            <li>Settings,</li>
            <li>Uploads,</li>
            <li>and a Link to a way to view my associated PDFS.</li>
          </ul>
        </div>
      </div>
    );
  }
}
