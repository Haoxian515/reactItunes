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

function printObj(argObj){
	console.log(argObj.offsetBottom)
}

function checkWhenOverLap(obj1, obj2){

	if(obj2.top < obj1.top){
		return true;
	}
		return false;


}

function onScroll(onScrollObj){

		onScrollObj.addEventListener("scroll",function(){
			// ===== START HERE GETTIN client bounding elements
			let obj1 = document.getElementById("header").getBoundingClientRect()
			let obj2 = document.getElementById("h2-single").getBoundingClientRect()

			console.log(document.getElementById("h2-single").getBoundingClientRect())
			console.log(document.getElementById("header").getBoundingClientRect())

			let hiddenLibrary = document.getElementById("hiddenLibrary")
			console.log(hiddenLibrary.classList)
			if(checkWhenOverLap(obj1, obj2)){
				console.log("HEY HEY HEY OVERLOAP")
				
				hiddenLibrary.classList.replace("hidden", "fade-in-element")
				// console.log(hiddenLibrary.classList)
			}else{
				hiddenLibrary.classList.replace("fade-in-element", "fade-out-element")
				hiddenLibrary.classList.add("hidden")
			}

		})

	}

class App extends Component {



	componentDidMount() {
		console.log("Componentdid mount")
		let appLayer2 = document.getElementById("AppLayer2")
		let h2single = document.getElementById("h2-single")
		let header = document.getElementById("header")

		onScroll(appLayer2)
		// printObj(header)
	  }

  render() {



    return (
    	<Router>

	      <div className="App">
	      	<Header/>
	      	<div className="AppLayer" id="AppLayer2">
		        <h2 className="h2-single" id="h2-single">Library</h2>
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
