import React, { Component } from 'react';
import "../App.css"


function MenuItem(props){
	const mapList = props.menuItems.map( (item)  => 
		<h4 className="menu-item"> {item.name} </h4>
	);

	return <div > {mapList} </div>
}

export default MenuItem;

// PASS prop upwarsds to appllayer tto do math