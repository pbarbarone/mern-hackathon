import React, {Component} from 'react';
import axios from 'axios';

class ChoreForm extends Component {

	constructor(props){
		super(props);
		this.state= {
			newTask: '',
			date: '',
			roommateId: '',
			roommateName:''
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	addName = (name) => {
		this.setState({roommateName: name});
	}

	addRoommate = (e) =>{
		let base = this;
		const roommateId = e.target.value;
		base.setState({roommateId: roommateId});
		base.props.roommates.forEach(function(rm){
			if(rm.id === roommateId){
				base.addName(rm.name);
			}
		});
	}

	addChore = (e) => {
		let base = this;
		e.preventDefault();
		axios.post('/lists/chore/create', {
			task: base.state.newTask,
			roommateId: base.state.roommateId,
			date: base.state.date,
			house: base.props.house._id,
			roommateName: base.state.roommateName
		}).then(response => {
			base.props.refreshList();
		});
	};


	render(){
		const roommateOptions = this.props.roommates.map(r => {
			return <option value={r.id}>{r.name}</option>
		});
		return(
			<div className="form-container">
				<form className="chore-form" onSubmit={this.addChore}>
					<input className="form-field-add" type="text" placeholder="Add a Chore" name="newTask" onChange={this.handleChange} value={this.state.newTask} required/><br />
					<select className="drop-down" required onChange={this.addRoommate}>
						<option  value="" disabled selected hidden>Assign</option>
						{roommateOptions}
					</select>
					<input className="form-field" type="date" name="date" onChange={this.handleChange} value={this.state.date}  required/>
				</form>
				<button className="pressy-thing" onClick={this.addChore}> Add it! </button>
			</div>
		)
	}
}

export default ChoreForm;