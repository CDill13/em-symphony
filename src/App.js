import React, { Component } from 'react';
import Header from "./components/common/headerFooter/Header";
import Footer from "./components/common/headerFooter/Footer";
import routes from "./routes";
// import logo from './music-favicon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
        <Footer />
      </div>
    );
  }
}


export default App;
