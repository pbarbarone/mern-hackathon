import React, {Component} from 'react';

import ProfileBoard from './ProfileBoard.js'


class Profile extends Component {
	render(){
		return(
			<div>
          		<ProfileBoard user={this.props.user} house={this.props.house} roommates={this.props.roommates} />
			</div>
		);
	}
}

export default Profile;