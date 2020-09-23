import React, {Component, useState} from 'react';
import './global.css';
import Header from './components/home';
import Courses from './components/courses';

class App extends Component{

  render() {
    return (
    <div id="root">
      <div>
        <Header />
        <hr />
        <Courses />
      </div>
    </div>
    );
  }
}
  


export default App;
