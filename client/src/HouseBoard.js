import React, {Component} from 'react';
import Messages from './HouseComps/Messages.js';
import Chores from './HouseComps/Chores.js';
import Bills from './HouseComps/Bills.js';
import Shopping from './HouseComps/Shopping.js';


class HouseBoard extends Component {
	render(){
		return(
			<div className="houseboard">
				<div className="widget-container">
					<Chores user={this.props.user} house={this.props.house} roommates={this.props.roommates} refreshList={this.props.refreshList} dashboard={this.props.dashboard}  />
					<Shopping user={this.props.user} house={this.props.house} roommates={this.props.roommates} refreshList={this.props.refreshList} dashboard={this.props.dashboard}  />
					<Bills house={this.props.house} refreshList={this.props.refreshList} dashboard={this.props.dashboard} />
										<Messages house={this.props.house} refreshList={this.props.refreshList} dashboard={this.props.dashboard} />
				</div>
			</div>
		);
	}
}

export default HouseBoard;