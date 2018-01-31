import React, { Component } from 'react';
import HouseBoard from './HouseBoard.js';
import HouseForm from './HouseForm.js';
import axios from 'axios';
import async from 'async';

class Househub extends Component {

  addHouse = () => {
    console.log("addHouse called in Househub.js");
    this.props.refreshUser();
  }

  render(){
    if(this.props.house){
      return (
        <div>
          {console.log("is there a useeeeeeeeer?" + this.props.user)}
          <HouseBoard house={this.props.house} roommates={this.props.roommates} />
          {console.log("User has a house!"+ this.props.house)}
          {console.log("ROOMATES: "+this.props.roommates)}
        </div>)
    }
    else {
      return (
        <div>
          {console.log("I am in the else statement!")}
          <HouseForm user={this.props.user} obtainHouse={this.addHouse} />
        </div>
      );
    }
  }
}

export default Househub;