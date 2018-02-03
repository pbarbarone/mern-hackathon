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
				<ChoreList dashboard={this.state.dashboard} refreshList={this.props.refreshList} user={this.props.user} chores={this.props.house.chores} house={this.props.house} onDelete={this.deleteItem} /> 
				<ChoreForm house={this.props.house} refreshList={this.props.refreshList} roommates={this.props.roommates} />
			</div>
			)
		}else if(this.state.dashboard==="profile"){
			return(
			<div className="chore-container">
				<h2 className="chore-header"> Chores </h2>
				<ChoreList dashboard={this.state.dashboard} refreshList={this.props.refreshList} user={this.props.user} chores={this.props.house.chores} house={this.props.house} onDelete={this.deleteItem} /> 
			</div>
			)
		} 
	}
}

class ChoreList extends Component {

	render(){
		if(this.props.chores && this.props.chores.length>0) {
			const choresUser = this.props.chores.map(chore => {
				if(this.props.dashboard==="profile" && this.props.user.id === chore.user) {
					return (<ListItem chore={chore} house={this.props.house} refreshList={this.props.refreshList} />)
				}
				else if (this.props.dashboard==="househub") {
					return (<ListItem chore={chore} house={this.props.house} refreshList={this.props.refreshList} />)
				}
			})
			return(
				<div className="list">
					<ul className ="chore-list">{choresUser}</ul>
				</div>
			)
		} else {
			return (<p>No Chores Yet!</p>)
		}
	}
}	

class ListItem extends Component {

	deleteChore = (e) => {
		let base = this;
		e.preventDefault();
		console.log("&&&&&&&&& base.props.house._id "+base.props.house._id);
		axios.delete('/lists/chore/delete', {
			data: {
				choreId: base.props.chore._id,
				houseId: base.props.house._id
			}
		}).then(response => {
				base.props.refreshList();
		});
	}

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