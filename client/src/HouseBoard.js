import React, {Component} from 'react';
import Messages from './HouseComps/Messages.js';
import Chores from './HouseComps/Chores.js';
import Bills from './HouseComps/Bills.js';
import Shopping from './HouseComps/Shopping.js';


class HouseBoard extends Component {
	render(){
		return(
			<div>
				<h1> {this.props.house.name} </h1>

				<h1> This is the House Hub </h1>
					<Chores user={this.props.user} house={this.props.house} roommates={this.props.roommates} refreshList={this.props.refreshList} dashboard={this.props.dashboard}  />
					<Shopping user={this.props.user} house={this.props.house} roommates={this.props.roommates} refreshList={this.props.refreshList} dashboard={this.props.dashboard}  />
					<Bills house={this.props.house} refreshList={this.props.refreshList} dashboard={this.props.dashboard} />
					<Messages />

			</div>
		);
	}
}

export default HouseBoard;