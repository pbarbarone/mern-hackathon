import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      houseName: ''
    }
  }

  handleChange = (e) => {
    this.setState({houseName: e.target.value});
  }

  joinHouse = (e) => {
    e.preventDefault();
    console.log("joinHouse called!");
  }

  createHouse = (e) => {
    e.preventDefault();
    axios.post('/house/create', {
      name: this.props.houseName,
      user: this.props.user
    });
  }

  joinHouse = (e) => {
    e.preventDefault();
    axios.post('/house/join', {
      name: this.state.houseName,
      user: this.props.user
    });
  }

  render(){
    if(this.props.user && this.props.user.name && this.props.user.house){
      return (<div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          {/*render normal dashboard component*/}
        </div>);
    }
    else {
      return (<div>
          <h2>ADD OR JOIN A HOUSE</h2>
          {/*render add/join house form component*/}

          <form  className="join-house" onSubmit={this.joinHouse}>
            <label>House Name</label>
            <input type="text" name="houseName" onChange={this.handleChange} required/>
            <button type="submit">Join House</button>
          </form>

          <form className="create-house" onSubmit={this.createHouse}>
            <label>House Name</label>
            <input type="text" name="houseName" onChange={this.handleChange} required/>
            <button type="submit">Create House</button>
          </form>

        </div>
      );
    }
  }
}

export default Profile;
