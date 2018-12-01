import React, { Component } from 'react';
import "../App.css"

// var animateHTML = function () {
//   var elems,
//   //try to get Library div height 
//     windowHeight
//   var init = function () {
//     elems = document.getElementsByClassName('hidden')
//     windowHeight = document.getElementsByClassName('h2-single')
//     _addEventHandlers()
//   }
//   var _addEventHandlers = function () {
//     document.getElementsByClassName("AppLayer").addEventListener('scroll', _checkPosition)
//     window.addEventListener('resize', init)
//   }
//   var _checkPosition = function () {
//   	console.log(windowHeight.position)
//     for (var i = 0; i < elems.length; i++) {
//       var posFromTop = elems[i].getBoundingClientRect().top
//       // over here too wrong calculat
//       // if (posFromTop - windowHeight <= 0) {
//       	if(posFromTop < windowHeight){
//         elems[i].className = elems[i].className.replace('hidden', 'fade-in-element')
//       }
//     }
//   }
//   return {
//     init: init
//   }
// }
// animateHTML().init()



class Header extends Component{

	constructor(props){
		super(props)
		console.log("HEADER CLASS" + this.props.isHeaderHidden)
		this.firstTime = false;

	}


	// "Library "{this.props.isHeaderHidden ? 'hidden' : 'fade-in-element' } 

	render(){
		return(
			<div className="Header" id="header" ref="refHeader">

				<div id="Filler">
					
				</div>
				<div className={this.props.isHeaderHidden ? 'Library hidden fade-out-element' : 'fade-in-element' }>
					Library
				</div>
				<div id="Edit">
					Edit
				</div>
			</div>
		)
	}
}

export default Header;