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

function print(){
	console.log(document.getElementById("AppLayer2"))
}



class App extends Component {
	componentDidMount() {
		console.log("Componentdid mount")
		print()
	  }

  render() {



    return (
    	<Router>

	      <div className="App">
	      	<Header/>
	      	<div className="AppLayer" id="AppLayer2">
		        <h2 className="h2-single">Library</h2>
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
