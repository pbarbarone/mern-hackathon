import React, {Component} from 'react';

import Roommate from './Roommate.js'


class Househub extends Component {
	render(){
		return(
			<div>
          		<Roommate house={this.props.house} roommates={this.props.roommates} />
			</div>
		);
	}
}

export default Househub;