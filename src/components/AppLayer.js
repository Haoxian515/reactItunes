import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import LibraryMenu from "./LibraryMenu"
import LibHeader from "./singlepieces/LibHeader.js"

import SongList from "./SongList"

import "../App.css"


	//========= FUNCTIONS
	function functionOverlap(){

	}

class AppLayer extends Component{

	constructor(props){
		super(props)

		this.state = {
			currentPage: "home",
			libheadSize: 0
		}

		

	}

	componentDidMount(){

	}

	scrolling(){
		console.log("AppLayer Component scrolling22")
		console.log(ReactDOM.findDOMNode(this.refs["libhead"]).getBoundingClientRect())
	}


	doesOverlap(){

	}

	render(){
		return(
			<div className="AppLayer" id="AppLayer" onScroll={()=>this.scrolling()}>
				<LibHeader ref="libhead"/>
				<LibraryMenu/>
				<SongList/>
			</div>
		)
	}
}

export default AppLayer;