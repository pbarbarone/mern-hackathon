import React, { Component } from 'react';
import axios from 'axios';
import HouseBoard from './HouseBoard.js';

class HouseForm extends Component {
	constructor(props) {
	    super(props);
	    this.state =  {
	      houseName: '',
	      houseId: ''
    	}
  	}
 

  handleNameChange = (e) => {
    this.setState({houseName: e.target.value});
  }

  handleIdChange = (e) => {
    this.setState({houseId: e.target.value});
  }

  createHouse = (e) => {
    e.preventDefault();
    console.log("createHouse function has been called");
    axios.post('/house/create', {
      name: this.state.houseName,
      user: this.props.user
    });
  }

  joinHouse = (e) => {
    e.preventDefault();
    axios.post('/house/join', {
      houseId: this.state.houseId,
      user: this.props.user
    });
	}

    render(){
    	if(Object.keys(this.props.user)){
	      return (
	          <div>
	            {console.log("User does not have a house!")}
	            <h2>ADD OR JOIN A HOUSE</h2>
	            <form  className="join-house" onSubmit={this.joinHouse}>
	              <label>House ID</label>
	              <input type="text" onChange={this.handleIdChange} required/>
	              <button type="submit">Join House</button>
	            </form>

	            <form className="create-house" onSubmit={this.createHouse}>
	              <label>House Name</label>
	              <input type="text" onChange={this.handleNameChange} required/>
	              <button type="submit">Create House</button>
	            </form>
	          </div>
      		);
   		 }
    	else {
      		return "Object.keys(props.user) is falsy";
    	}
  }
}

export default HouseForm;