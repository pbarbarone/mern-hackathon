import React, { Component } from 'react';
import axios from 'axios';

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
    }).then(response => {
    	console.log("CREATEHOUSE AXIOS RESPONSE: "+response.data.user);
    	this.props.obtainHouse();
    });
  }

  joinHouse = (e) => {
    e.preventDefault();
    axios.post('/house/join', {
      houseId: this.state.houseId,
      user: this.props.user
    }).then(response => {
    	console.log("JOINHOUSE AXIOS RESPONSE: "+response.data);
    	this.props.obtainHouse();
    });
}

    render(){
    	if(Object.keys(this.props.user)){
	      return (
	          <div>
	            {console.log("User does not have a house!")}
	            <h1 className ="house-banner">Add or join a HouseHub</h1>
	            <form  className="join-house" onSubmit={this.joinHouse}>
	              <label className="form-label" >House ID</label>
	              <input type="text" onChange={this.handleIdChange} required/><br />
	              <button className="form-button" type="submit">Join House</button>
	            </form>

	            <form className="create-house" onSubmit={this.createHouse}>
	              <label className="form-label" >House Name</label>
	              <input type="text" onChange={this.handleNameChange} required/><br />
	              <button className="form-button" type="submit">Create House</button>
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