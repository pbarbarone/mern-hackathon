import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Messages extends Component {
	render(){
		return(
		<div className="messages-container">
			<h2>Messages</h2>
			<Link to="/newmemo">Write Memo</Link>
		</div>
		)
	}
}

export default Messages;