import React, { Component } from 'react';
import "../App.css"
import ReactAudioPlayer from 'react-audio-player';
//...


class Music extends Component{


	render() {
		return (

			<ReactAudioPlayer
			src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
			autoPlay
			controls/>
		);
	}
}

export default Music;

