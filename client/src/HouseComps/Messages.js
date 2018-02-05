import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Messages extends Component {
    render(){
        if(this.props.house.memos.length > 0){
            const allMessages = this.props.house.memos.map( message =>{
                return(<MessageList house={this.props.house} message={message} refreshList={this.props.refreshList} />)
            });
        return(
            <div className="memo-container">
                <h2 className="memo-header">Memos</h2>
            <ul className="memo-list">
                {allMessages}
            </ul>
                <Link className="memo-link" to="/newmemo"> Write Memo </Link>
            </div>
        )
    } 
            else {
                return(
                    <div className="memo-container">
                        <p>Your house has no current messages!</p>
                        <Link  to="/newmemo"> Write Memo </Link>
                    </div>
                )
            }
    }
}

class MessageList extends Component {

    deleteMemo = (e) => {
        let base = this;
        e.preventDefault();

        axios.delete('lists/memo/delete', {
            data: {
                memoId: base.props.message._id,
                houseId: base.props.house._id
            }
        }).then(response => {
            base.props.refreshList()
        });
    }
    render(){
        return(
                <li className="memo-item">
                    <span>{this.props.message.roommateName} posted: <Link to="/allmemos">{this.props.message.subject}</Link></span>
                    <button className="delete-button" onClick={this.deleteMemo}>X</button>
                </li>
        )
    }
}

export default Messages;
