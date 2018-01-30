import React, {Component} from 'react';

import Messages from './roomy-layout/Messages.js';
import Chores from './roomy-layout/Chores.js';
import Bills from './roomy-layout/Bills.js';
import Shopping from './roomy-layout/Shopping.js';


class Roommate extends Component {
	render(){
		return(
			<div className="widget-container">
				<h1> {this.props.house._id} </h1>
				<h1> peter likes cats </h1>
					<Chores house={this.props.house}  />
					<Shopping />
					<Bills />
					<Messages />
			</div>
		);
	}
}

export default Roommate;