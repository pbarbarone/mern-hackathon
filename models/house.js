var mongoose = require('mongoose');
var User = require('./user.js');

var houseSchema = new mongoose.Schema({
	name: String,
	users: [{
				type: mongoose.Schema.Types.ObjectId, 
				ref: 'User'
			}],
	chores: [{
				task: String,
				user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
				date: Date
			}],
	shoppingItems: [{
						item:String,
						user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
						date:Date
					}],
	billPerUser: {
					rent: String, //price
					utilities: String, //price
					dueDate: Date
				}
});

var House = mongoose.model('House', houseSchema);

module.exports = House;