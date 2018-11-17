import React, { Component } from 'react';
import "../App.css"


class LibraryMenu extends Component{
	render(){
		return(
			<div>
				<h2>Library</h2>
				<div>Playlists</div>
				<div>Artists</div>
				<div>Albums</div>
				<div>Songs</div>
				<div>Downloaded Music</div>
			</div>

		)
	}
}

export default LibraryMenu;