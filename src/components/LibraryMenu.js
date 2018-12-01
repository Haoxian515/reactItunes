import React, { Component } from 'react';
import MenuItems from "../menuItemList.json"
import MenuItem from "./MenuItem.js"
import "../App.css"

function menuItemSelected(content){
	console.log(content)
	if(content == "playlists"){
		let appLayer = document.getElementById("AppLayer")
		// console.log(appLayer)
		appLayer.classList.replace("AppLayer", "slide-out-applayer")
	}
	// console.log("does it work?")
}

function menuSelector(){

	let menuItems = document.getElementsByClassName("menu-item")

	for(let item of menuItems){
		item.addEventListener("click", function(){
			menuItemSelected(item.innerHTML.toLowerCase())
		})
	}
}



class LibraryMenu extends Component{

	constructor(props){
		super(props)
		this.state = {
			items: MenuItems
		}
		// console.log(this.state)
	}

	componentDidMount(){
		menuSelector();
	}

	render(){
		return(
			<div >
				{
					<MenuItem menuItems={this.state.items}/>
				}
			</div>

		);
	}
}

export default LibraryMenu;