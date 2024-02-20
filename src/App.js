import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import About from './Components/About';
import News from './Components/News';

export default class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <About />
        <News />

      </>
    )
  }
}
