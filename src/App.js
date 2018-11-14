import React, { Component } from 'react';
import Header from "./components/Header"
import Menu from "./components/Menu"
import BottomNav from "./components/BottomNav"
import './App.css';
// <Menu/>
import Music from "./components/Music"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <Music/>
        <BottomNav/>

        
      </div>
    );
  }
}

export default App;
