import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Bills extends Component {
    constructor(props){
        super(props)
            this.state={
                dashboard: ''
            }
    }
componentWillMount(){
        this.setState({dashboard: this.props.dashboard});
    }
    render(){
        if(this.props.house.billPerUser.length > 0){
            return(
                <div className="bills-container">
                    <BillList dashboard={this.state.dashboard} bills={this.props.house.billPerUser} />
                </div>
            )
        }
        else {
            return(
                <div className="bills-container">
                <h2 className="bill-header">Current House Bills</h2>
                    <h1>No Outstanding Bills! Hallelujah!</h1>
                    <Link to="/newbill">Add New Bill</Link>
                </div>
            )
        }
    }
}
class BillList extends Component {
    render(){
        const currentBill = this.props.bills.length - 1;
        const rawDate = new Date(this.props.bills[currentBill].dueDate);
        const dateDue = rawDate.getMonth() + 1 + '/' + rawDate.getDate()  + '/' + rawDate.getFullYear();
        if(this.props.dashboard==="profile"){
            return(
                <div className="bill">
                    <h2 className="bill-header">Current House Bills</h2>
                    <p className="bill-each">Rent: ${this.props.bills[currentBill].rent} </p>
                    <p className="bill-each">Utilities: ${this.props.bills[currentBill].utilities} </p>
                    <p className="bill-due">Due Date: {dateDue} </p>
                    <hr />
                    <Link className="bill-link" to="/allbills">See Past Bills</Link>
                </div>
            )
        }else {
            return(
                <div className="bill">
                    <h2 className="bill-header">Current House Bills</h2>
                    <p className="bill-each">Rent: ${this.props.bills[currentBill].rent} </p>
                    <p className="bill-each">Utilities: ${this.props.bills[currentBill].utilities} </p>
                    <p className="bill-due">Due Date: {dateDue} </p>
                    <hr />
                    <Link className="bill-link" to="/editbill">Edit Bill</Link>
                    <Link className="bill-link" to="/newbill">Add New Bill</Link><br></br>
                    <Link className="bill-link" to="/allbills">See Past Bills</Link>
                </div>
            )
        }
    }
}
export default Bills