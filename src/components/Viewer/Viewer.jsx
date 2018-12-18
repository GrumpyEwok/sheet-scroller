import React, { Component } from 'react';
// import { PDFJS } from 'pdfjs-dist';

export default class Viewer extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div id='view-wrapper' style={{ width: '100%', height: '100%'}}>
        <p>Hello PDF!</p>
      </div>
    );
  }
}
