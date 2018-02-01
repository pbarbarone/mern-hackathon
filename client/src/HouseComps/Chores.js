import React, {Component} from 'react';
import axios from 'axios';
import ChoreForm from './ChoreForm.js';

class Chores extends Component {
	constructor(props){
		super(props)
			this.state= {
				newTask: '',
				date: '',
				roommateName:'',
				dashboard: ''
			}
	}

	componentWillMount(){
		this.setState({dashboard: this.props.dashboard});
	}

	render(){

		console.log("DASHBOARD "+this.state.dashboard);
		console.log("user--ID"+this.props.user.id);
		console.log("chore-user-id"+this.props.house.chores[13].user);
		console.log("chore-user-LENGTH"+this.props.house.chores.length);
		console.log("HOUSE--"+this.props.house);
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
				<ChoreList user={this.props.user} chores={this.props.house.chores} onDelete={this.deleteItem} /> 
			</div>
			)
		} else {
			console.log("dashboard broken");
		}
	}
}

//if state.dashboard===profile, only render chores for user




class ChoreList extends Component {
		
	render(){

		let userChores =[];

		for(let i=0; i < this.props.chores.length; i++){
			if(this.props.user.id === this.props.chores[i].user){
			userChores.push(this.props.chores[i].task);
			}
		}
		
		console.log("this is the chores if statement");
		console.log("userchores " + userChores);
		console.log("user chores getting to choreList component " + userChores);
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