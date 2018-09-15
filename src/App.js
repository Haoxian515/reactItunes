import React, { Component } from 'react';
import Header from "./components/Header"
import Menu from "./components/Menu"
import BottomNav from "./components/BottomNav"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <BottomNav/>
      </div>
    );
  }
}

export default App;
