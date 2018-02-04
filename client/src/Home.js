import React, { Component } from 'react';

class Home extends Component {
	render() {
		return(
			<div>
				<h1 className ="house-banner">Welcome to HouseHub</h1>
				<div className="home-container">
					<p>HouseHub helps you and your roommates communicate stay up to speed on house needs.</p><br />
					<p>With HouseHub, you can assign and track house chores, let your roommates know the staples you're getting at the store, post and track house bills, and post house memos.</p><br />
					<hr />
					<p>Sign up or sign-in above!</p>
				</div>
			</div>
		)
	}
 }

export default Home;