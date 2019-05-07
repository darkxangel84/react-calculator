import React, { Component } from 'react';
import './App.scss';
import Base from './components/base';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Base title="Calculator!"/>
      </div>
    );
  }
}

export default App;
