import React, {Component} from 'react';
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
		if(this.props.dashboard==="househub"){
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
		}
	}
}

//if state.dashboard===profile, only render chores for user




class ChoreList extends Component {

	render(){
		if(this.props.dashboard==="profile"){
			const userChores = [];
			for(var i=0; i < this.props.chores.length; i++){

				if(this.props.user.id == this.props.chores[i].user){
					userChores.push(this.props.chores[i]);
				}
			}

			const choresUser = userChores.map(choreU => {
				return(<ListItem task={choreU.task} date={choreU.date} roommate={choreU.roommateName} onDelete={this.props.onDelete} />)
			})
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