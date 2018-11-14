import React, { Component } from 'react';
import songs from "../songs.json";
import "../App.css"

				// <div class="Nowplaying">
				// over here
				// </div>
				// <div class="NowplayingOver">
				// 	<img src="/musiclogo.png"></img>
				// </div>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					// <img className="Song"src="/musiclogo.png"></img>
					console.log(songs)
class Menu extends Component{
	render(){
		return(
			<div className="Menu">
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