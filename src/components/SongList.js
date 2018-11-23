import React, { Component } from 'react';
import songs from "../songs.json";
import "../App.css"

class Menu extends Component{
	render(){
		return(
			<div className="SongList">
		        {
		          songs.map(function(song){

		            return <div className="song">
					            <img src="/musiclogo.png"></img>
					            <div>{song.title}</div>
					            <div>{song.artist}</div>
				            </div>;
		          })
		        }
			</div>
		)
	}
}

export default Menu;