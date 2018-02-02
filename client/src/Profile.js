import React, { Component } from 'react';
import HouseForm from './HouseForm.js';
import HouseBoard from './HouseBoard.js';

class Profile extends Component {

  render(){
    if(this.props.user && this.props.house) {
      return (<HouseBoard user={this.props.user} house={this.props.house} refreshList={this.props.refreshUser} dashboard={"profile"} />)
    }
    else if (this.props.user && !this.props.house){
      return (<HouseForm user={this.props.user} obtainHouse={this.props.refreshUser} />)
    }
    else {
      return (<div><h1>You must be logged in to see this page!</h1></div>)
    }
  }
}

export default Profile;