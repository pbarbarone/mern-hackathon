import React, {Component} from 'react';
import axios from 'axios';
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
		console.log("shoppingDash"+this.state.dashboard);
		if(this.state.dashboard==="househub"){
			return(
				<div className="shopping-container">
					<h2 className="shopping-header"> Pantry List </h2>
					<PantryList dashboard={this.state.dashboard} user={this.props.user} pantry={this.props.house.shoppingItems} onDelete={this.deleteItem} /> 
					<ShoppingForm house={this.props.house} refreshList={this.props.refreshList} roommates={this.props.roommates} />
				</div>
			)
		}else if(this.state.dashboard==="profile"){
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
		if(this.props.dashboard==="profile"){
			const userShopp = [];
			for(var i=0; i < this.props.pantry.length; i++){
				if(this.props.user.id == this.props.pantry[i].user){
					userShopp.push(this.props.pantry[i]);
				}
			}
			const userItems = userShopp.map(itemU => {
				return (<ListItem item={itemU.item} date={itemU.date} roommate={itemU.roommateName} onDelete={this.props.onDelete} />)
			})
			return(
			<ul className ="pantry-list">{userShopp}</ul>
			)
		}else if(this.props.dashboard ==="househub"){
			const allShopp = this.props.pantry.map(item => {
				return (<ListItem item={item.item} date={item.date} roommate={item.roommateName} onDelete={this.props.onDelete} />)
			})
			return(
			<ul className ="pantry-list">{allShopp}</ul>
			)
		}else {
			console.log("error in shopping conditional");
		}
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