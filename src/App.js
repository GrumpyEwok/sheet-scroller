import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './App.css';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Viewer from './components/Viewer/Viewer';
import PDFjsBackend from './backends/pdfjs';
import source from './assets/test-pdfs/myaskovsky-sonata2.pdf';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ Landing } />
            <Switch>
              <Route path='/user' render={()=> <Profile/>} />
              <Route path='/viewer' render={() =>
                  <Viewer backend={PDFjsBackend} src={source}/>} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
