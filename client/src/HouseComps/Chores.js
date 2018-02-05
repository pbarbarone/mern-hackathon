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
				<div>
					<div className="list-header">
						<ul>
							<li className="chore-grid-header">
								<span className="each-header" >Task</span>
								<span className="each-header">Roomie</span>
								<span className="each-header">Done by</span>
								<span className="each-header">Done</span>
							</li>
						</ul>
					</div>
					<div className="list">
						<ul className ="chore-list">
							{choresUser}
						</ul>
					</div>
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
		const rawDate = new Date(this.props.chore.date);
		const date = rawDate.getMonth() + 1 + '/' + rawDate.getDate()  + '/' + rawDate.getFullYear();
		return(
			<li className="chore-list-item">
				<span>{this.props.chore.task}</span>
				<span>{this.props.chore.roommateName}</span>
				<span>{date}</span>
				<button className="delete-button" onClick={this.deleteChore}>X</button>
			</li>
		)
	}
}

export default Chores