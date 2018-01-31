import React, {Component} from 'react';

import MessagesProfile from './ProfileComps/MessagesProfile.js';
import ChoresProfile from './ProfileComps/ChoresProfile.js';
import BillsProfile from './ProfileComps/BillsProfile.js';
import ShoppingProfile from './ProfileComps/ShoppingProfile.js';


class ProfileBoard extends Component {
	render(){
		return(
			<div>
				<h1> {this.props.user.name} </h1>
				<h1> This is the PROFILE BOARD </h1>
					<ChoresProfile house={this.props.house} roommates={this.props.roommates} user={this.props.user} />
					{/*<ShoppingProfile />
					<BillsProfile />
					<MessagesProfile />*/}
			</div>
		);
	}
}

export default ProfileBoard;