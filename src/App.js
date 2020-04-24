import React from 'react';
import logo from './logo.svg';
import './App.css';

import Top from './Top';


/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
*/

// Rewrite the function in a class
class App extends React.Component {  
  render(){
    return (
      <div className="App">
        <Top />

      </div>
    );
  }
}

export default App;
