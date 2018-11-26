import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import LibraryMenu from "./LibraryMenu"
import SongList from "./SongList"

import "../App.css"


class AppLayer extends Component{

	constructor(props){
		super(props)
		this.refAppLayer = React.createRef();

	}

	componentDidMount(){
		ReactDOM.findDOMNode(this).addEventListener("scroll", function(){
			console.log("SCROOOOO")
		})
	}

	render(){
		return(
			<div className="AppLayer" id="AppLayer" ref={this.refAppLayer}>
				<h2 className="h2-single" id="h2-single">Library</h2>
				<LibraryMenu/>
				<SongList/>
			</div>
		)
	}
}

export default AppLayer;