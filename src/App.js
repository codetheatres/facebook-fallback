import React, { Component } from 'react';
import Header from './components/header/index';
import Content from './components/content/index';
import './App.css';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
