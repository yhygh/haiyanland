import React from 'react';
// import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Haiyan from './Components/Haiyan';
import Shira from './Components/Shira';

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

        // <Top />

// Rewrite the function in a class
class App extends React.Component {  
  render(){
    return (
      <div className="App">
        <BrowserRouter> 
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/haiyan' component={Haiyan} />
            <Route path='/shira'  component={Shira} />
            <Route path='/' render={ () => <div>404</div>} />            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}   

export default App;

