import React, { Component } from 'react';
import Header from "./components/Header"
import SongList from "./components/SongList"
import BottomNav from "./components/BottomNav"
import LibraryMenu from "./components/LibraryMenu"

import {BrowserRouter as Router} from "react-router-dom"
import Route from "react-router-dom/Route"
import './App.css';
// <Menu/>
import Music from "./components/Music"

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	
	      	<div className="AppLayer">
		        <Header/>
		        <LibraryMenu/>
		        <SongList/>
	        </div>
	        <BottomNav/>

	        
	      </div>
    	</Router>
    );
  }
}

export default App;
