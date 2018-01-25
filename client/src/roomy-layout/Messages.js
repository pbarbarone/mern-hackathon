import React, {Component} from 'react';

class Messages extends Component {
	render(){
		return(
	<div className="messages-container">
		<h2>Messages</h2>
		<p>Tag your roommate in a message</p>
		<input type="text" placeholder="Say something nice"   required />
	</div>
		
		)
	}
}

export default Messages