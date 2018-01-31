import React, {Component} from 'react';

class BillsProfile extends Component {
	render(){
		return(
					<div className="BillsProfile-container">
						<h2>Upcoming BillsProfile Due!</h2>
							<ul>
								<li>Rent, January: $900</li>
								<li>Utilities, December: $100</li>
								<li>Internet, December: $30</li>
							</ul>
					</div>

		)
	}
}

export default BillsProfile