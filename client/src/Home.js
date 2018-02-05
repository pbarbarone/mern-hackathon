import React, { Component } from 'react';

class Home extends Component {
	render() {
		return(
			<div>
				<h1 className ="home-tagline">The smart way to live with other humans</h1>
				<div className="home-container">
					<ul className="home-list">
						<li> Assign and track house chores</li>
						<li> Keep a running grocecy list</li>
						<li> Post and track house bills</li>
						<li> Send housemate memos</li>
					</ul>
				</div>
				<p className="sign-up">Sign up or sign-in above!</p>
			</div>
		)
	}
 }

export default Home;