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
			top: 0
		}

		this.refHeader; 


		

	}

	componentDidMount(){
		this.refHeader = ReactDOM.findDOMNode(this.refs["libhead"])
		console.log(this.refHeader)
		console.log("WHTA IS GOING ON")
		// let wow = ReactDOM.findDOMNode(this.refs["libhead"]).getBoundingClientRect().top
		// this.setState({refLibHeader: ReactDOM.findDOMNode(this.refs["libhead"])})
		// console.log(wow)
		// this.setState({top: wow})
		// this.findMySize(wow)
		// console.log(this.state.refHeader)
	}

	updateState(what){
		this.setState({top:what})
	}

	findMySize(){
		let wow = ReactDOM.findDOMNode(this.refs["libhead"]).getBoundingClientRect().top

		// this.setState({top: 0})
		console.log(this.refHeader.getBoundingClientRect())
		console.log("sweet christmas")
	}


	render(){
		return(
			<div className="AppLayer" id="AppLayer"  onScroll={ this.findMySize.bind(this) }>
				<LibHeader ref="libhead"/>
				<LibraryMenu/>
				<SongList/>
			</div>
		)
	}
}

export default AppLayer;