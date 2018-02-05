import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Billhistory from "./BillHistory.js";

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
        axios.post('/lists/bill/create', {
            house: base.props.house._id,
            rent: base.state.rent,
            utilities: base.state.utilities,
            dueDate: base.state.dueDate
        }).then(response => {
            this.setState({redirect: true});
            this.props.refreshList();
        });
    }
    updateBill = () => {
        let base = this;
        var billInQuestion = base.props.house.billPerUser[base.props.house.billPerUser.length-1];
        axios.post('/lists/bill/update', {
            house: base.props.house._id,
            billId: billInQuestion._id,
            rent: base.state.rent,
            utilities: base.state.utilities,
            dueDate: base.state.dueDate
        }).then(response => {
            this.setState({redirect: true});
            this.props.refreshList();
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.props.mode==="add") {
            this.addBill();
        }
        else {
            this.updateBill();
        }
    }
    render(){
        if(this.state.redirect){
            return(<Redirect to="/househub" />);
        }
        else if(this.props.mode==="add"){
            return(
                <div>
                    <h1 className ="house-banner" >Add a New Bill</h1>
                    <form onSubmit={this.handleSubmit}>
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
        }else if(this.props.mode==="edit"){
            return(
                <div>
                    <h1 className ="house-banner" >Edit Current Bill</h1>
                    <form onSubmit={this.handleSubmit}>
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
        }else if(this.props.mode==="allbills"){
            return(
                <div>
                    <h1 className ="house-banner" >Past Bills</h1>
                    <Billhistory bills={this.props.house.billPerUser} />
                </div>
            )
        }
    }
}

export default BillForm;