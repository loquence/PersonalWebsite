import React, { Component } from 'react';
//import logo from './logo.svg';
import Main from './components/MainComponent';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <HashRouter>
          <div className="App">
            <Route render={(props) => <Main location={props.location} />} />
          </div>
        </HashRouter>
      
    );
  }
}

export default App;
