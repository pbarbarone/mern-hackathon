import React, {Component} from 'react';

class ChoresProfile extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			userChores: []
		}

	}
	componentDidMount() {
    console.log('GrandChild did mount.');
    console.log('did mount log' + this.props.house.chores[2].user);

  }



	render(){

		return(
			<div>
				<h2>Upcoming ChoresProfile Due!</h2>
			</div>

		)
	}
}


export default ChoresProfile;