import React, {Component} from 'react';
import axios from 'axios';

class Chores extends Component {
	constructor(props){
		super(props)
			this.state= {
				newTask: '',
				date: '',
				roommateId: ''
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
		axios.post('/lists/chore/create', {
			task: this.state.newTask,
			roommate: null,
			date: this.state.date,
			house: this.props.house._id
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

	addRoommate = (e) =>{
		this.setState({roommateId: e.target.value})

	}


	render(){
		const roommateOptions = this.props.roommates.map(r => {
			return <option value={r.id}>{r.id}</option>
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
				{/*<ChoreList items={this.state.tasks} onDelete={this.deleteItem} /> */}
			</div>
		)
	}
}



// class ChoreList extends Component {
// 	render(){
// 			const allChores = this.props.items.map(chore => {
// 				return (<ListItem item={chore} onDelete={this.props.onDelete} />)
// 			})
// 		return(
// 			<ul className ="chore-list">{allChores}</ul>

// 		)
// 	}
// }

// class ListItem extends Component {
// 	deleteHandler = () => {
// 		this.props.onDelete(this.props.item)
// 	}
// 	render(){
// 		return(
// 			<li className="list-item">
// 				{this.props.item}
// 				<button className="delete-button" onClick={this.deleteHandler}>X</button>
// 			</li>
// 		)
// 	}
// }












export default Chores