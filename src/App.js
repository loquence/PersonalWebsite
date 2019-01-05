import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;