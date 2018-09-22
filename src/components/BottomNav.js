import React, { Component } from 'react';
import "../App.css"


class BottomNav extends Component{
	render(){
		return(
			<div className="BottomNav">

				<div className="NowplayingBottomLayer">
				
				</div>
				<div className="NowplayingTopLayer">
					<img src="/musiclogo.png"></img>
					<div className="not-playing">
						Not Playing
					</div>
					<img className="play-button-icon" src="/play-button-icon.png"></img>
				</div>

				<div className="Navigation">
					<div className="icon-container">
						<div className="menu-icon">
							Library
						</div>
						<div className="menu-icon">
							ForYou
						</div>
						<div className="menu-icon">
							Browse
						</div>
						<div className="menu-icon"> 
							Radio
						</div>
						<div className="menu-icon">
							Search
						</div>
					</div>

				</div>

			</div>


		)
	}
}

export default BottomNav;