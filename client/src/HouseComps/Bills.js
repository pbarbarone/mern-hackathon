import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Bills extends Component {
	render(){
		if(this.props.house.billPerUser){
			return(
				<div className="bills-container">
					
						<BillList bills={this.props.house.billPerUser} />
					<Link refreshList to="/newbill">Add New Bill</Link>
				</div>
			)
		}
		else{
			return(
				<h1>No Bills for now! Hallelujah?</h1>
			)
		}
	}
}

class BillList extends Component {
	render(){
		const currentBill = this.props.bills.length - 1;
		const rawDate = new Date(this.props.bills[currentBill].dueDate);
		const dateDue = rawDate.getMonth() + 1 + '/' + rawDate.getDate()  + '/' + rawDate.getFullYear();

		console.log(dateDue);
		console.log(this.props.bills[currentBill].dueDate);
		return(
			<div className="bills-container">
				<h2>Upcoming Bills Due!</h2>
				<p>Current Utility Bill Amount : {this.props.bills[currentBill].utilities} </p>
				<p>Current Rent Due : {this.props.bills[currentBill].rent} </p>
				<p> due date : {dateDue} </p>
			</div>
		)
	}
}

export default Bills