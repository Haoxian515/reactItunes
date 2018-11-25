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
			//scroll and checks if obj1 overlaps obj2 if true fades out false fades in
			let obj1 = document.getElementById("header").getBoundingClientRect()
			let obj2 = document.getElementById("h2-single").getBoundingClientRect()

			// console.log(document.getElementById("h2-single").getBoundingClientRect())
			// console.log(document.getElementById("header").getBoundingClientRect())

			let hiddenLibrary = document.getElementById("hiddenLibrary")
			if(checkWhenOverLap(obj1, obj2)){
				
				hiddenLibrary.classList.replace("hidden", "fade-in-element")
				// console.log(hiddenLibrary.classList)
			}else{
				hiddenLibrary.classList.replace("fade-in-element", "fade-out-element")
				hiddenLibrary.classList.add("hidden")
			}

		})

	}

class App extends Component {

	state={
		currentDisplay:"home"
	}

	displayNewLayer = (newLayer) => {
		this.setState({currentDisplay:newLayer})
	}


	componentDidMount() {
		console.log("Componentdid mount")
		let appLayer = document.getElementById("AppLayer")
		let h2single = document.getElementById("h2-single")
		let header = document.getElementById("header")

		onScroll(appLayer)
		// printObj(header)
	  }

  render() {



    return (
    	<Router>

	      <div className="App">
	      	<Header/>
	      	<div className="AppLayer" id="AppLayer">
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
