import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Header from "./components/Header"
import BottomNav from "./components/BottomNav"
import AppLayer from "./components/AppLayer"

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



		/** ON SCROLL JAVASCRIPT AND DOM */
		// onScrollObj.addEventListener("scroll",function(){
		// 	// ===== START HERE GETTIN client bounding elements
		// 	//scroll and checks if obj1 overlaps obj2 if true fades out false fades in
		// 	let obj1 = document.getElementById("header").getBoundingClientRect()
		// 	let obj2 = document.getElementById("h2-single").getBoundingClientRect()

		// 	// console.log(document.getElementById("h2-single").getBoundingClientRect())
		// 	// console.log(document.getElementById("header").getBoundingClientRect())

		// 	let hiddenLibrary = document.getElementById("hiddenLibrary")
		// 	if(checkWhenOverLap(obj1, obj2)){
				
		// 		hiddenLibrary.classList.replace("hidden", "fade-in-element")
		// 		// console.log(hiddenLibrary.classList)
		// 	}else{
		// 		hiddenLibrary.classList.replace("fade-in-element", "fade-out-element")
		// 		hiddenLibrary.classList.add("hidden")
		// 	}

		// })


class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			headerClass: "Header",
			refHeader: "null",
			headerTop:0,
			titleTop: 0

		}

		// console.log(this.myRef)
	}

	getDiveSize(currDiv){
		console.log(currDiv)
		// console.log("APPP JS MAIN")

	}


  render() {

    return (
    	<Router>

	      <div className="App" >
	      	<Header/>
	      	<AppLayer myDivSize={this.getDiveSize.bind(this,"appComp")} />
	        <BottomNav/>

	      
	      </div>
    	</Router>

    );
  }
}

export default App;
