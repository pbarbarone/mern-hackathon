import React, {Component} from 'react';
import ShoppingForm from './ShoppingForm.js';
import axios from 'axios';

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
					<PantryList dashboard={this.state.dashboard} house={this.props.house} user={this.props.user} pantry={this.props.house.shoppingItems} refreshList={this.props.refreshList} /> 
					<ShoppingForm house={this.props.house} refreshList={this.props.refreshList} roommates={this.props.roommates} />
				</div>
			)
		}else if(this.state.dashboard === "profile"){
			return(
				<div className="shopping-container">
					<h2 className="shopping-header"> Pantry List </h2>
					<PantryList dashboard={this.state.dashboard} house={this.props.house} user={this.props.user} pantry={this.props.house.shoppingItems} refreshList={this.props.refreshList} /> 
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
					return (<ListItem item={item} house={this.props.house} refreshList={this.props.refreshList} />)
				}
				else if (this.props.dashboard==="househub") {
					return (<ListItem item={item} house={this.props.house} refreshList={this.props.refreshList} />)
				}
			});
			return(
				<div>
					<div className="list-header">
						<ul>
							<li className="pantry-grid-header">
								<span className="each-header">Item</span>
								<span className="each-header">Roomie</span>
								<span className="each-header">Purchased</span>
								<span className="each-header">Remove</span>
							</li>
						</ul>
					</div>
					<div className="list">
						<ul className="shopping-list">
							{userItems}
						</ul>
					</div>
				</div>
			)
		} else {
			return (<p>Shopping List Empty!</p>)
		}
	}	
}

class ListItem extends Component {

	deleteItem = (e) => {
		let base = this;
		e.preventDefault();
		console.log("base.props.item._id: "+base.props.item._id);
		axios.delete('/lists/item/delete', {
			data: {
				itemId: base.props.item._id,
				houseId: base.props.house._id
			}
		}).then(response => {
				base.props.refreshList();
		});
	}

	

	render(){
		
		const rawDate = new Date(this.props.item.date);
		const date = rawDate.getMonth() + 1 + '/' + rawDate.getDate()  + '/' + rawDate.getFullYear();
		return(				
			<li className="pantry-list-item">
				<span>{this.props.item.item}</span>
				<span>{this.props.item.roommateName}</span>
				<span>{date}</span>
				<button className="delete-button" onClick={this.deleteItem}>X</button>
			</li>
		)
	}
}



export default Shopping;