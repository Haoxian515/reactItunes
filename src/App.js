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
			isHeaderHidden: true

		}
		this.mainHeader;
		// console.log(this.myRef)
	}

	componentDidMount(){
		this.mainHeader = ReactDOM.findDOMNode(this.refs["mainHeader"])
		// console.log("this is main header " + this.mainHeader.top)
		// this.setState({
		// 	mainHeaderTop: this.mainHeader.top
		// })

	}

	checkOverlap(divTop){
		console.log(divTop)
		// console.log("APPP JS MAIN")
		// console.log(this.mainHeader.getBoundingClientRect().height )

		// this.mainHeader.getBoundingClientRect().height
		if(divTop < this.mainHeader.getBoundingClientRect().height){
			this.setState({
				isHeaderHidden: true
			})
			console.log(this.state.isHeaderHidden)

		}else{
			
			this.setState({
				isHeaderHidden: false
			})
			console.log(this.state.isHeaderHidden)

		}
	}




  render() {

    return (
    	<Router>

	      <div className="App" >
	      	<Header ref="mainHeader" isHeaderHidden={this.state.isHeaderHidden}/>
	      	<AppLayer myDivSize={this.checkOverlap.bind(this)} />
	        <BottomNav/>

	      
	      </div>
    	</Router>

    );
  }
}

export default App;
