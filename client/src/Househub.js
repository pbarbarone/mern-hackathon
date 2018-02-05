import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HouseBoard from './HouseBoard.js';
import HouseForm from './HouseForm.js';

class Househub extends Component {

  addHouse = () => {
    this.props.refreshUser();
  }
  render(){
  if(this.props.user && this.props.house){
      return (<HouseBoard user={this.props.user} house={this.props.house} roommates={this.props.roommates} refreshList={this.props.refreshUser} dashboard={"househub"}/>)
    }
    else if(this.props.user && !this.props.house){
      return (
        <div>
          <HouseForm user={this.props.user} obtainHouse={this.props.refreshUser} />
        </div>
      );
    }
    else{
      return(
        <h1>You Must be Logged In to See this Page!</h1>
        )
    }
  }
}

export default Househub;