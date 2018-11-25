import React, { Component } from 'react';
import MenuItems from "../menuItemList.json"
import "../App.css"

function menuItemSelected(content){
	console.log(content)
	if(content == "playlists"){
		let appLayer = document.getElementById("AppLayer")
		console.log(appLayer)
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

	// console.log(menuItems)

}



class LibraryMenu extends Component{

	componentDidMount(){

		menuSelector();

	}

	render(){
		return(
			<div >
				{
					MenuItems.map(function(item){
						return <h4 className="menu-item" id={item.name.toLowerCase()}>{item.name}</h4>
					})
				}
			</div>

		);
	}
}

export default LibraryMenu;