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
				date: Date,
				roommateName: String
			}],
	shoppingItems: [{
						item:String,
						user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
						date: Date,
						roommateName: String
					}],
	billPerUser: [{
					rent: String, //price
					utilities: String, //price
					dueDate: Date
				}],
	memos: [{
					subject: String,
					content: String
			}]
});

var House = mongoose.model('House', houseSchema);

module.exports = House;