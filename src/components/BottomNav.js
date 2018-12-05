import React, { Component } from 'react';
import ReactDOM from 'react-dom'


import "../App.css"


class BottomNav extends Component{

	constructor(props){
		super(props)
		// <audio><source src="/music/din-don-dan-extended-mix.mp3" type="audio/mpeg"/></audio>
		// let audio;
		// let playMusic;
	}

	componentDidMount(){
		let audio 	   = ReactDOM.findDOMNode(this.refs["audio"])
		let playMusic = ReactDOM.findDOMNode(this.refs["playMusicBtn"])
		let hello = "hello"
		playMusic.addEventListener("click", function(){
			console.log(hello)
			audio.play()
		})
	}

	render(){
		return(
			<div className="BottomNav">

				<audio ref="audio"><source src="http://localhost:5000/music/din-don-dan-extended-mix.mp3" type="audio/mpeg"/></audio>

				<div className="NowplayingBottomLayer">
				
				</div>
				<div className="NowplayingTopLayer">
					<img src="/musiclogo.png"></img>
					<div className="not-playing">
						Not Playing
						
					</div>
					<img ref="playMusicBtn" className="play-button-icon" src="/play-button-icon.png"></img>
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