import React, { Component } from 'react';

class Profile extends Component {

  joinHouse = (e) => {
    e.preventDefault();
    console.log("joinHouse called!");
  }

  createHouse = (e) => {
    e.preventDefault();
    console.log("createHouse called!");
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

          <form className="join-house" onSubmit={this.joinHouse}>
            <label>House Name</label>
            <input type="text" name="houseName" required/>
            <button type="submit">Join House</button>
          </form>

          <form className="create-house" onSubmit={this.createHouse}>
            <label>House Name</label>
            <input type="text" name="houseName" required/>
            <button type="submit">Create House</button>
          </form>

        </div>
      );
    }
  }
}

export default Profile;
