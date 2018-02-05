import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Allmemos extends Component{
	render(){
		const allMemos = this.props.house.memos.map(memo => {
			return <MemoList roommate={memo.roommateName} subject={memo.subject} content={memo.content} date={memo.date} />
		})
		return(
			<div className="memo-all-container">
				<div className="memo-all-list">
					<ul>
						<li className="memo-grid-header">
                            <span>Posted By</span>
                            <span>Subject</span>
                            <span>Contents</span>
                            <span>Date</span>
                        </li>
                    </ul>
                </div>
                <div className="all-past-memos">
                	<ul>
                		{allMemos}
                	</ul>
                </div>
                <hr />
                <Link className="memo-link" to="/newmemo"> Write New Memo </Link>

			</div>
		)
	}
}

class MemoList extends Component {
	render(){
		const rawDate = new Date(this.props.date);
        const date = rawDate.getMonth() + 1 + '/' + rawDate.getDate()  + '/' + rawDate.getFullYear();
		return(
			<li className="memo-all-history">
                <span>{this.props.roommate}</span>
                <span>{this.props.subject}</span>
               	<span>{this.props.content}</span>
               	<span>{date}</span>
            </li>
		)
	}
}

export default Allmemos;
