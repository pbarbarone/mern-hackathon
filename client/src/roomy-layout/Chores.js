import React, {Component} from 'react';

class Chores extends Component {
	constructor(props){
		super(props)
			this.state= {
				newTask: '',
				tasks: []
			}
	}

	deleteItem = (item) => {
		let tasksDelete = this.state.tasks;
		let taskIndex = tasksDelete.indexOf(item);

		if(taskIndex >= 0){
			tasksDelete.splice(taskIndex, 1);
			this.setState({tasks: tasksDelete});
		}
	}
	add = (e) => {
		e.preventDefault();
		console.log(this.state.newTask);
		if(this.state.newTask){

			let localTask = this.state.tasks;
			localTask.push(this.state.newTask)
			this.setState({newTask: '', tasks: localTask})
		}
	}

	addChore = (e) =>{
		this.setState({newTask: e.target.value})
	}


	render(){
		return(
			<div className="chore-container">
				<h2 className="chore-header"> My Chores </h2>
				

				<form className="chore-form" onSubmit={this.add}>
        	<input type="text" placeholder="Add a Chore" onChange={this.addChore} value={this.state.newTask} required/>
        	<input type="text" placeholder="Who Doin' "   required/>
        	<input type="text" placeholder="When to complete"   required/>
				</form>
				<button className="pressy-thing" onClick={this.add}> Add to List </button>
				<ChoreList items={this.state.tasks} onDelete={this.deleteItem} />
			</div>
		)
	}
}

class ChoreList extends Component {
	render(){
			const allChores = this.props.items.map(chore => {
				return (<ListItem item={chore} onDelete={this.props.onDelete} />)
			})
		return(
			<ul className ="chore-list">{allChores}</ul>

		)
	}
}

class ListItem extends Component {
	deleteHandler = () => {
		this.props.onDelete(this.props.item)
	}
	render(){
		return(
			<li className="list-item">
				{this.props.item}
				<button className="delete-button" onClick={this.deleteHandler}>X</button>
			</li>
		)
	}
}












export default Chores