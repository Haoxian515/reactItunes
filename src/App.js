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

function onScroll(){



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

	}

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			headerClass: "Header"
		}
		this.headerRef = React.createRef();

		// console.log(this.myRef)
	}

	displayNewLayer = (newLayer) => {
		this.setState({currentDisplay:newLayer})
	}

	test = () => {
		this.setState({headerClass: 'hidden'})
	}
  render() {

    return (
    	<Router>

	      <div className="App">
	      	<Header ref={elem => this.headerRef = elem}/>
	      	<AppLayer onScroll={()=>this.scrolling()}/>
	        <BottomNav/>

	      
	      </div>
    	</Router>

    );
  }
}

export default App;
