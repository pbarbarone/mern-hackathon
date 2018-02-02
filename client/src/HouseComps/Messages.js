import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Messages extends Component {
	render(){
		if(this.props.house.memos.length > 0){
			const allMessages = this.props.house.memos.map( message =>{
				return(<MessageList message={message} refreshList={this.props.refreshList} />)
			});
		return(
			<div className="message-container"><ul>
				{allMessages}
			</ul>
				<Link  to="/newmemo"> Write Memo </Link>
			</div>
		)
	} 
			else {
				return(
					<div>
						<p>Your house has no current messages!</p>
						<Link  to="/newmemo"> Write Memo </Link>
					</div>
				)
			}
	}
}

class MessageList extends Component {
	render(){
		return(
			<li className="list-item">
				{this.props.message.roommateName} posted: {this.props.message.subject}- {this.props.message.content}
			</li>
		)
	}
}

export default Messages;