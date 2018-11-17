import React, { Component } from 'react';
import "../App.css"
import ReactAudioPlayer from 'react-audio-player';
// import Audio from "din-don-dan-extended-mix.mp3"
//...
// <ReactAudioPlayer
// 			src="din-don-dan-extended-mix.mp3"
// 			autoPlay
// 			controls/>


class Music extends Component{


	render() {
		return (

			<ReactAudioPlayer
			src="http://localhost:5000/music/din-don-dan-extended-mix.mp3"
			autoPlay
			controls/>
		);
	}
}

export default Music;

