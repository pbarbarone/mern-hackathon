import React, { Component } from 'react';
import axios from 'axios';
import Roomate from './Roommate.js';

class Profile extends Component {
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
    if(this.props.user && this.props.user.name && this.props.house){
      return (
        <div>
          {console.log("is there a useeeeeeeeer?" + this.props.user)}
          <Roomate house={this.props.house} roommates={this.props.roommates} />
          {console.log("User has a house!"+ this.props.house)}
          {console.log("ROOMATES: "+this.props.roommates)}
        </div>)
    }
    else {
      return (
        <div>
          {console.log("I am in the else statement!")}
          <createJoinHouseForm user={this.props.user} />
        </div>
      );
    }
  }
}

{/*const createJoinHouseForm = props => {
  
    if(Object.keys(props.user)){
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
            </form>}
          </div>
      )
    }
    else {
      return "Object.keys(props.user) is falsy";
    }
}*/}

export default Profile;
