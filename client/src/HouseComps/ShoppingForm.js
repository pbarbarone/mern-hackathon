import React, {Component} from 'react';
import axios from 'axios';

class ShoppingForm extends Component {
	constructor(props){
		super(props)
		this.state= {
				newItem: '',
				date: '',
				roommateId: '',
				roommateName:'',
			}
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

	render(){
		console.log("shoppingDash"+this.state.dashboard);
		console.log("length of roommates array in shopping = " + this.props.roommates.length)
		const roommateOptions = this.props.roommates.map(r => {
			return <option value={r.id}>{r.name}</option>
			});

		return(
			<div className="shopping-container">
				<form className="shopping-form" onSubmit={this.add}>
        			<input type="text" placeholder="Add an item" onChange={this.addItem} value={this.state.newItem} required/>
        			<select required onChange={this.addRoommate}>
        				<option value="" disabled selected hidden>Assign a Roommate</option>
        				{roommateOptions}
        			</select>
        			<input type="date" onChange={this.addDate} value={this.state.date}  required/>
				</form>
				<button className="pressy-thing" onClick={this.add}> Add to List </button>
			</div>
			)
	}
}


export default ShoppingForm