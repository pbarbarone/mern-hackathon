import React, {Component} from 'react';
import ShoppingForm from './ShoppingForm.js';

class Shopping extends Component {
	constructor(props){
		super(props)
			this.state= {
				newItem: '',
				date: '',
				roommateName:'',
				dashboard: ''
			}
	}

	componentWillMount(){
		this.setState({dashboard: this.props.dashboard});
	}

	render(){

		if(this.state.dashboard === "househub"){
			return(
				<div className="shopping-container">
					<h2 className="shopping-header"> Pantry List </h2>
					<PantryList dashboard={this.state.dashboard} user={this.props.user} pantry={this.props.house.shoppingItems} onDelete={this.deleteItem} /> 
					<ShoppingForm house={this.props.house} refreshList={this.props.refreshList} roommates={this.props.roommates} />
				</div>
			)
		}else if(this.state.dashboard === "profile"){
			return(
				<div className="shopping-container">
					<h2 className="shopping-header"> Pantry List </h2>
					<PantryList dashboard={this.state.dashboard} user={this.props.user} pantry={this.props.house.shoppingItems} onDelete={this.deleteItem} /> 
				</div>
				)
		}else{
			console.log("dashboard failure on shop")
		}
	}
}


class PantryList extends Component {
	render(){
		if(this.props.pantry && this.props.pantry.length>0) {
			const userItems = this.props.pantry.map(item => {
				if(this.props.dashboard==="profile" && this.props.user.id===item.user) {
					return (<ListItem item={item.item} date={item.date} refreshList={this.refreshList} roommate={item.roommateName} />)
				}
				else if (this.props.dashboard==="househub") {
					return (<ListItem item={item.item} date={item.date} refreshList={this.refreshList} roommate={item.roommateName} />)
				}
			});
			return(<div><ul className="shopping-list">{userItems}</ul></div>)
		} else {
			return (<p>Shopping List Empty!</p>)
		}
	}	
}

class ListItem extends Component {

	// deleteChore = (e) => {
	// 	let base = this;
	// 	e.preventDefault();
	// 	axios.delete('/lists/shopping/delete', {
	// 		data: {
	// 			choreId: base.props.item._id,
	// 			houseId: base.props.house._id
	// 		}
	// 	}).then(response => {
	// 			base.props.refreshList();
	// 	});
	// }

	render(){
		console.log("reaching render of listitem component");
		return(
			<li className="list-item">
				{this.props.item}
				<button className="delete-button" onClick={this.deleteChore}>X</button>
			</li>
		)
	}
}



export default Shopping;