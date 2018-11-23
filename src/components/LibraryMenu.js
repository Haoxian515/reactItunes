import React, { Component } from 'react';
import MenuItems from "../menuItemList.json"
import "../App.css"


class LibraryMenu extends Component{
	render(){
		return(
			<div>
				{
					MenuItems.map(function(item){
						return <h4 className="menu-item">{item.name}</h4>
					})
				}
			</div>

		);
	}
}

export default LibraryMenu;