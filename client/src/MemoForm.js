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
					<h1 className ="house-banner">Write a Memo</h1>
					<form className="memo-form" onSubmit={this.addMemo}>
						<label className="form-label" >Subject: </label>
						<input className="form-input" type="text" name="subject" onChange={this.handleChange} value={this.state.subject} required/><br />
						<label className="form-label" >Memo:</label>
						<br />
						<input className="memo-content-input" type="text" name="content" onChange={this.handleChange} value={this.state.content} required/><br />
						<label className="form-label" >Date: </label>
						<input className="form-input" type="date" name="date" onChange={this.handleChange} value={this.state.date} required/><br />
						<input className="memo-button" type="submit" value="Submit" />
					</form>
				</div>
			)
		}
	}
}

export default MemoForm;