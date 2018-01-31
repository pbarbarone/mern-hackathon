import React, {Component} from 'react';
import axios from 'axios';

class Chores extends Component {
	constructor(props){
		super(props)
			this.state= {
				newTask: '',
				date: '',
				roommateId: '',
				roommateName:''
			}
	}


	add = (e) => {
		e.preventDefault();
		axios.post('/lists/chore/create', {
			task: this.state.newTask,
			roommateId: this.state.roommateId,
			date: this.state.date,
			house: this.props.house._id,
			roommateName: this.state.roommateName
		})
		console.log(this.state.newTask +' ' + this.state.roommateId + ' ' + this.state.date)
		console.log('this should be a house ' + this.props.house._id);
		console.log('these are our roommates' + this.props.roommates);
}


	addChore = (e) =>{
		this.setState({newTask: e.target.value})
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


	render(){
		console.log("length of roommates array" + this.props.roommates.length);
		const roommateOptions = this.props.roommates.map(r => {
			return <option value={r.id}>{r.name}</option>
			});
		return(
			<div className="chore-container">
				<h2 className="chore-header"> Chores </h2>
				<form className="chore-form" onSubmit={this.add}>
        			<input type="text" placeholder="Add a Chore" onChange={this.addChore} value={this.state.newTask} required/>
        			<select required onChange={this.addRoommate}>
        				<option value="" disabled selected hidden>Assign a Roommate</option>
        				{roommateOptions}
        			</select>
        			<input type="date" onChange={this.addDate} value={this.state.date}  required/>
				</form>
				<button className="pressy-thing" onClick={this.add}> Add to List </button>
				<ChoreList chores={this.props.house.chores} onDelete={this.deleteItem} /> 
			</div>
		)
	}
}



class ChoreList extends Component {
	render(){
			const allChores = this.props.chores.map(chore => {
				return (<ListItem task={chore.task} date={chore.date} roommate={chore.roommateName} onDelete={this.props.onDelete} />)
			})
		return(
			<ul className ="chore-list">{allChores}</ul>

		)
	}
}

class ListItem extends Component {
	deleteHandler = () => {
		this.props.onDelete(this.props.task)
	}
	render(){
		return(
			<li className="list-item">
				{this.props.task}
				<button className="delete-button" onClick={this.deleteHandler}>X</button>
			</li>
		)
	}
}












export default Chores