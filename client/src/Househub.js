import React, {Component} from 'react';

import Messages from './roomy-layout/Messages.js';
import Chores from './roomy-layout/Chores.js';
import Bills from './roomy-layout/Bills.js';
import Shopping from './roomy-layout/Shopping.js';


class Househub extends Component {
	render(){
		return(
			<div className="widget-container">
					<Chores />
					<Shopping />
					<Bills />
					<Messages />
			</div>
		);
	}
}

export default Househub;