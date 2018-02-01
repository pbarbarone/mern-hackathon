import React, {Component} from 'react';
import axios from 'axios';

class Shopping extends Component {
	constructor(props){
		super(props)
			this.state= {
				newItem: '',
				date: '',
				roommateId: '',
				roommateName:''
			}
	}

	// deleteItem = (item) => {
	// 	let tasksDelete = this.state.tasks;
	// 	let taskIndex = tasksDelete.indexOf(item);

	// 	if(taskIndex >= 0){
	// 		tasksDelete.splice(taskIndex, 1);
	// 		this.setState({tasks: tasksDelete});
	// 	}
	// }

	add = (e) => {
		e.preventDefault();
		axios.post('/lists/shopping/create', {
			item: this.state.newItem,
			roommateId: this.state.roommateId,
			date: this.state.date,
			house: this.props.house._id,
			roommateName: this.state.roommateName
		}).then(response => {
			console.log("refeshlist is firing in shopping");
			this.props.refreshList();
		})
		console.log(this.state.newItem +' ' + this.state.roommateId + ' ' + this.state.date)
}

	addItem = (e) =>{
		this.setState({newItem: e.target.value})

	}

	addDate = (e) =>{
		this.setState({date: e.target.value})
	}

	addName = (name) => {
		this.setState({roommateName: name});
	}

	addRoommate = (e) =>{
		let base = this;
		const roommateId = e.target.value;
		base.setState({roommateId: roommateId});
		base.props.roommates.forEach(function(rm){
			console.log("drop down name" + rm.name);
			if(rm.id === roommateId){
				base.addName(rm.name);
			}
		});
	}
//probably want to update this so you can only add an shopping item as user, not assign to other rooommate
	render(){
		console.log("length of roommates array in shopping = " + this.props.roommates.length)
		const roommateOptions = this.props.roommates.map(r => {
			return <option value={r.id}>{r.name}</option>
			});
		return(
			<div className="shopping-container">
				<h2 className="shopping-header"> Pantry List </h2>
				<form className="shopping-form" onSubmit={this.add}>
        			<input type="text" placeholder="Add an item" onChange={this.addItem} value={this.state.newItem} required/>
        			<select required onChange={this.addRoommate}>
        				<option value="" disabled selected hidden>Assign a Roommate</option>
        				{roommateOptions}
        			</select>
        			<input type="date" onChange={this.addDate} value={this.state.date}  required/>
				</form>
				<button className="pressy-thing" onClick={this.add}> Add to List </button>
				<PantryList pantry={this.props.house.shoppingItems} onDelete={this.deleteItem} /> 
			</div>
		)
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