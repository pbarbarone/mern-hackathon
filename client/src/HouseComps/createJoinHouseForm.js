import React, {Component} from 'react';

const createJoinHouseForm = props => {
    if(Object.keys(props.user)){
      return (
          <div>
            {console.log("User does not have a house!")}
            <h2>ADD OR JOIN A HOUSE</h2>
            {/*<form  className="join-house" onSubmit={this.joinHouse}>
              <label>House ID</label>
              <input type="text" onChange={this.handleIdChange} required/>
              <button type="submit">Join House</button>
            </form>

            <form className="create-house" onSubmit={this.createHouse}>
              <label>House Name</label>
              <input type="text" onChange={this.handleNameChange} required/>
              <button type="submit">Create House</button>
            </form>*/}
          </div>
      )
    }
    else {
      return "Object.keys(props.user) is falsy";
    }
}

export default createJoinHouseForm;