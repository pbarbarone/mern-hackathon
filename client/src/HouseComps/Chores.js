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
dashboard==="househub"){
			return(
			<div className="chore-container">
				<h2 className="chore-header"> Chores </h2>

				<ChoreList dashboard={this.state.dashboard} user={this.props.user} chores={this.props.house.chores} onDelete={this.deleteItem} /> 

				<ChoreForm house={this.props.house} refreshList={this.props.refreshList} roommates={this.props.roommates} />
			</div>
			)
		}else if(this.state.dashboard==="profile"){
			return(
			<div className="chore-container">
				<h2 className="chore-header"> Chores </h2>
				<ChoreList dashboard={this.state.dashboard} user={this.props.user} chores={this.props.house.chores} onDelete={this.deleteItem} /> 
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
		if(this.props.dashboard==="profile"){
			const userChores = [];
			console.log("in the if stateaaaaamnet" + this.props.chores.length);
			for(var i=0; i < this.props.chores.length; i++){
				console.log("nested in for loops length " +this.props.chores.length);

				console.log("useriCHOREd " +this.props.chores[i].user);
				console.log("userid " +this.props.user.id);
				if(this.props.user.id == this.props.chores[i].user){
					userChores.push(this.props.chores[i]);
					console.log(userChores + "better not only be laundry")
				}
			}

			const choresUser = userChores.map(choreU => {
				console.log("this is choreU " + choreU);
				return(<ListItem task={choreU.task} date={choreU.date} roommate={choreU.roommateName} onDelete={this.props.onDelete} />)
			})
			console.log("dashboard conditional " + this.props.dashboard)
			return(
				<div>
					<ul className ="chore-list">{choresUser}</ul>
				</div>
				)
		}else if(this.props.dashboard==="househub"){
			const allChores = this.props.chores.map(chore => {
				return (<ListItem task={chore.task} date={chore.date} roommate={chore.roommateName} onDelete={this.props.onDelete} />)
			})
			return(
				<ul className ="chore-list">{allChores}</ul>
				)
		}else {
			console.log("error in chorelist conditional smarty")
		}
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