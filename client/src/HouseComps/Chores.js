import React, {Component} from 'react';
import axios from 'axios';
import ChoreForm from './ChoreForm.js';

class Chores extends Component {
	constructor(props){
		super(props)
			this.state= {
				newTask: '',
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
		console.log("DASHBOARD "+this.state.dashboard);
		console.log("length of roommates array" + this.props.roommates.length);
		if(this.state.dashboard==="househub"){
			return(
			<div className="chore-container">
				<h2 className="chore-header"> Chores </h2>
				<ChoreList chores={this.props.house.chores} onDelete={this.deleteItem} /> 
				<ChoreForm house={this.props.house} refreshList={this.props.refreshList} roommates={this.props.roommates} />
			</div>
			)
		}else if(this.state.dashboard==="profile"){
			return(
			<div className="chore-container">
				<h2 className="chore-header"> Chores </h2>
				<ChoreList chores={this.props.house.chores} onDelete={this.deleteItem} /> 
			</div>
			)
		} else {
			console.log("dashboard broken");
		}
	}
}

class ChoreList extends Component {
	render(){
		const allChores = this.props.chores.map(chore => {
			return (<ListItem task={chore.task} date={chore.date} roommate={chore.roommateName} onDelete={this.props.onDelete} />)
		})
		return(
			<div>
				<ul className ="chore-list">{allChores}</ul>
			</div>
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