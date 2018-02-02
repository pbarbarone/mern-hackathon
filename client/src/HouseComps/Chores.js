import React, {Component} from 'react';
import ChoreForm from './ChoreForm.js';
import axios from 'axios';

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

		if(this.state.dashboard==="househub"){
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
		} 
	}
}

//if state.dashboard===profile, only render chores for user

class ChoreList extends Component {

	render(){
		// if(this.props.dashboard==="profile"){
			// const userChores = [];
			// for(var i=0; i < this.props.chores.length; i++){
			// 	if(this.props.user.id == this.props.chores[i].user){
			// 		userChores.push(this.props.chores[i]);
			// 	}
			// }
			// const choresUser = userChores.map(choreU => {
			// 	return(<ListItem chore={choreU} />)
			// })
		if(this.props.chores && this.props.chores.length>0) {
			const choresUser = this.props.chores.map(chore => {
				if(this.props.dashboard==="profile" && this.props.user.id === chore.user) {
					return (<ListItem chore={chore} />)
				}
				else if (this.props.dashboard==="househub") {
					return (<ListItem chore={chore} />)
				}
			})

			return(
				<div>
					<ul className ="chore-list">{choresUser}</ul>
				</div>
			)
		} else {
			return (<p>No Chores Yet!</p>)
		}

		}

		// else if(this.props.dashboard==="househub"){
		// 	const allChores = this.props.chores.map(chore => {
		// 		return (<ListItem chore={chore} />)
		// 	})
		// 	return(
		// 		<ul className ="chore-list">{allChores}</ul>
		// 		)
		// }
		// else {
		// 	console.log("error in chorelist conditional smarty")
		// }
// 	}
}	

class ListItem extends Component {

	deleteChore = (e) => {
		let base = this;
		e.preventDefault();
		console.log("&&&&&&&&& base.props.chore.id "+base.props.chore._id);
		axios.delete('/lists/chore/delete', {
			id: base.props.chore._id
		}).then(function(err, chore){
			if(err) {
				console.log(err);
			} else {
				console.log('Successfully deleted chore?');
			}
		})
	}

	// 	add = (e) => {
	// 	let base = this;
	// 	e.preventDefault();
	// 	axios.post('/lists/chore/create', {
	// 		task: base.state.newTask,
	// 		roommateId: base.state.roommateId,
	// 		date: base.state.date,
	// 		house: base.props.house._id,
	// 		roommateName: base.state.roommateName
	// 	}).then(response => {
	// 		base.props.refreshList();
	// 		console.log("refresh list firing");
	// 	});
	// 	console.log(this.state.newTask +' ' + this.state.roommateId + ' ' + this.state.date)
	// 	console.log('this should be a house ' + this.props.house._id);
	// 	console.log('these are our roommates' + this.props.roommates);
	// };


	render(){
		return(
			<li className="list-item">
				{this.props.chore.task}
				<button className="delete-button" onClick={this.deleteChore}>X</button>
			</li>
		)
	}
}

export default Chores