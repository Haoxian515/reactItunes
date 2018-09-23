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
		          songs.map(function(movie){
		            return <div>
					            <div className="li-song">

						            <img src="/musiclogo.png"></img>
						            <div>{movie.title}</div>
						            <div>{movie.artist}</div>
					            </div>
					            
			            </div>;
		          })
		        }
			</div>
		)
	}
}

export default Menu;