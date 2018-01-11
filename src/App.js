import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'

import Main from './components/main'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
