import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class MemoForm extends Component {
	constructor(props) {
		super(props)
			this.state={
				subject: '',
				content: '',
				date: '',
				redirect: false
			}
		}


	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	addMemo = (e) => {
		let base = this;
		console.log("addMemo pressed");
		console.log(base.props.user.name)
		e.preventDefault();
		axios.post('/lists/memo/create', {
			house: base.props.house._id,
			subject: base.state.subject,
			content: base.state.content,
			date: base.state.date,
			roommateName: base.props.user.name
		}).then(response => {
			this.setState({redirect: true});
			this.props.refreshList();
		});
	}

	render(){
		if(this.state.redirect){
			return(<Redirect to="/househub" />);
		}
		else {
			return(
				<div>
					<h2>Memo Form Page!</h2>
					<form onSubmit={this.addMemo}>
						<label>Subject: </label>
						<input type="text" name="subject" onChange={this.handleChange} value={this.state.subject} required/>
						<label>Memo: </label>
						<input type="text" name="content" onChange={this.handleChange} value={this.state.content} required/>
						<label>Date: </label>
						<input type="date" name="date" onChange={this.handleChange} value={this.state.date} required/>
						<input type="submit" value="Submit" />
					</form>
				</div>
			)
		}
	}
}

export default MemoForm;