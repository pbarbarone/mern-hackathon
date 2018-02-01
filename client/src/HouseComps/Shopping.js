import React, {Component} from 'react';
import ShoppingForm from './ShoppingForm.js';

class Shopping extends Component {
	constructor(props){
		super(props)
			this.state= {
				newItem: '',
				date: '',
				roommateId: '',
				roommateName:'',
				dashboard: ''
			}
	}

	componentWillMount(){
		this.setState({dashboard: this.props.dashboard});
	}

	render(){
		console.log("shoppingDash"+this.state.dashboard);
		if(this.state.dashboard==="househub"){
			return(
				<div className="shopping-container">
					<h2 className="shopping-header"> Pantry List </h2>
					<PantryList pantry={this.props.house.shoppingItems} onDelete={this.deleteItem} /> 
					<ShoppingForm house={this.props.house} refreshList={this.props.refreshList} roommates={this.props.roommates} />
				</div>
			)
		}else if(this.state.dashboard==="profile"){
			return(
				<div className="shopping-container">
					<h2 className="shopping-header"> Pantry List </h2>
					<PantryList pantry={this.props.house.shoppingItems} onDelete={this.deleteItem} /> 
				</div>
				)
		}else{
			console.log("dashboard failure on shop")
		}
	}
}


class PantryList extends Component {
	render(){
			const allItems = this.props.pantry.map(item => {
				return (<ListItem item={item.item} date={item.date} roommate={item.roommateName} onDelete={this.props.onDelete} />)
			})
		return(
			<ul className ="pantry-list">{allItems}</ul>

		)
	}
}

class ListItem extends Component {
	deleteHandler = () => {
		this.props.onDelete(this.props.item)
	}
	render(){
		return(
			<li className="list-item">
				{this.props.item}
				<button className="delete-button" onClick={this.deleteHandler}>X</button>
			</li>
		)
	}
}



export default Shopping;