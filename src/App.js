import React, { Component } from 'react';
import EventForm from './components/EventForm';
import logo from './music-favicon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <EventForm />
      </div>
    );
  }
}

export default App;
