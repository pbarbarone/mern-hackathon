import React, { Component } from 'react';

class Home extends Component {

  render(){
   console.log(this.props.user);
    return (
      <div className="home-form">
        <form className="form-form">
        	<label>Task:  </label>
        	<input type="text" required/>
        	<label>Assigned To:  </label>
        	<select>
        		<option>Roommate1</option>
        		<option>Roommate2</option>
        		<option>Roommate3</option>
        		<option>Roommate4</option>
        	</select>
        	<label>Complete By Date:  </label>
        	<input type="text" required/>
        </form>
      </div>
      );
  }
}

export default Home;
