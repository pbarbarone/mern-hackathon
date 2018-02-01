import React, {Component} from 'react';
import axios from 'axios';

class ChoreForm extends Component {
	constructor(props){
		super(props)
			this.state= {
				newTask: '',
				date: '',
				roommateId: '',
				roommateName:'',
			}
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

	add = (e) => {
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
			console.log("refresh list firing");
		});
		console.log(this.state.newTask +' ' + this.state.roommateId + ' ' + this.state.date)
		console.log('this should be a house ' + this.props.house._id);
		console.log('these are our roommates' + this.props.roommates);
	};

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
		console.log(this.props.roommates.length);
		console.log(this.props.house);
		const roommateOptions = this.props.roommates.map(r => {

			return <option value={r.id}>{r.name}</option>
		});
		return(
			<div>
				<form className="chore-form" onSubmit={this.add}>
					<input type="text" placeholder="Add a Chore" onChange={this.addChore} value={this.state.newTask} required/>
					<select required onChange={this.addRoommate}>
						<option value="" disabled selected hidden>Assign a Roommate</option>
						{roommateOptions}
					</select>
					<input type="date" onChange={this.addDate} value={this.state.date}  required/>
				</form>
				<button className="pressy-thing" onClick={this.add}> Add to List </button>
			</div>
		)
	}
}

export default ChoreForm;