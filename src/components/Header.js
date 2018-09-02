import React, { Component } from 'react';
import "../App.css"


class Header extends Component{
	render(){
		return(
			<div className="Header">
				<div id="Filler">
					
				</div>
				<div id="Library">
					Library
				</div>
				<div id="Edit">
					Edit
				</div>
			</div>
		)
	}
}

export default Header;