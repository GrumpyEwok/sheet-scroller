import React, { Component } from 'react';

import Header from './../Header';

export default class Viewer extends Component {
  constructor(props) {
    super(props);
    // Is createRef() necessary here? How is it different than getElementById()? Why am I instantiating props here with 'new' -- init is being called in componentDidMount; how is 'new' tied to this? 
    this.viewerRef = React.createRef();
    this.backend = new props.backend();
  }

  componentDidMount() {
      const { src } = this.props;
      const element = this.viewerRef.current;

      this.backend.init(src, element);
  }

  render(){
    return (
      <React.Fragment>
        <Header/>

        <div ref={this.viewerRef} id='view-wrapper' style={{ width: '99vw', margin: '2em auto auto', height: '94vh'}} />
      
        
      </React.Fragment>
    );
  }
}


//         <div ref={this.viewerRef} id='view-wrapper' style={{ width: '99vw', margin: 'auto', height: '95vh'}} />