import React, {Component} from 'react';

class Shopping extends Component {
	render(){
		return(
			<div className="shopping-container">
			<h2>Pantry Purchases</h2>
				<p>Add it to the grocery list:</p>
					<form className="shopping-form">
			        	<input type="text" placeholder="Add an item" required />
			        	<input type="text" placeholder="When do you plan to buy?"   required/ >
					</form>
				<button className="pressy-thing"> Add to List </button>
			</div>

		)
	}
}

export default Shopping