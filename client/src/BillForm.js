import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class BillForm extends Component {
	constructor(props) {
		super(props)
			this.state={
				rent: '',
				utilities: '',
				dueDate: '',
				redirect: false
			}
		}


	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	addBill = (e) => {
		let base = this;
		console.log("addBill pressed");
		e.preventDefault();
		axios.post('/lists/bill/create', {
			house: base.props.house._id,
			rent: base.state.rent,
			utilities: base.state.utilities,
			dueDate: base.state.dueDate
		}).then(response => {
			this.setState({redirect: true});
		});
	}

	render(){
		if(this.state.redirect){
			return(<Redirect to="/househub" />);
		}
		else {
			return(
				<div>
					<h2>Bill Form Page!</h2>
					<p>gather rent, utilities, due date</p>
					<form onSubmit={this.addBill}>
						<label>Rent: <strong>$</strong></label>
						<input type="text" name="rent" onChange={this.handleChange} value={this.state.rent} required/>
						<label>Utilities: <strong>$</strong></label>
						<input type="text" name="utilities" onChange={this.handleChange} value={this.state.utilities} required/>
						<label>Due Date: </label>
						<input type="date" name="dueDate" onChange={this.handleChange} value={this.state.dueDate} required/>
						<input type="submit" value="Submit" />
					</form>
				</div>
			)
		}
	}
}

export default BillForm;