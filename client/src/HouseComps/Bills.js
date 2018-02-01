import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Bills extends Component {
	render(){
		return(
			<div className="bills-container">
				<h2>Upcoming Bills Due!</h2>
					<ul>
						<li>Rent, January: $900</li>
						<li>Utilities, December: $100</li>
						<li>Internet, December: $30</li>
					</ul>
				<Link to="/newbill">Add New Bill</Link>
			</div>
		)
	}
}

export default Bills