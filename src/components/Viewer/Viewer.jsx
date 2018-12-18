import React, { Component } from 'react';
// import { PDFJS } from 'pdfjs-dist';

export default class Viewer extends Component {
  constructor(props) {
    super(props);
    // Is createRef() necessary here? How is it different than getElementById()? Why am I instantiating props here with 'new' -- init is being called in componentDidMount; how is 'new' tied to this? Are props an object and therefore need to be instantiated here w/ 'new'?
    this.viewerRef = react.createRef();
    this.backend = new props.backend();
  }

  componentDidMount() {
      const { src } = this.props;
      const element = this.viewerRef.current;

      this.backend.init(src, element);
  }

  render(){
    return (
      <div ref={this.viewerRef} id='view-wrapper' style={{ width: '100%', height: '100%'}}>
        <p>Hello PDF!</p>
      </div>
    );
  }
}
