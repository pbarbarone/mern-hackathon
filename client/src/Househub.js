import React, { Component } from 'react';
import HouseBoard from './HouseBoard.js';
import HouseForm from './HouseForm.js';

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
          {console.log("ROOMATES: " + this.props.roommates)}
          {console.log("User has a house!"+ this.props.house)}
          <HouseBoard house={this.props.house} roommates={this.props.roommates} refreshList={this.addHouse} dashboard={"househub"}/>
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