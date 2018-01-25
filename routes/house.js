require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var House = require('../models/house');

//CREATE HOUSE
router.post('/create', function(req, res, next){
	var user = req.body.user
	console.log("house post (create) route called, req.body: "+ req.body.name);
	House.create({
		name: req.body.name
	}, function(err, house){
		if(err) {
			console.log('DB error', err);
		}
		else {
			// console.log(user.id);//working
			// console.log('house id', house.id)
			// console.log(house);
			// house.users.push(user.id)///this works
			// console.log(house.users.length + "see colin????");
			// house.save(function (err) {
			// 	console.log(err);
  	// 			if (!err) console.log('Success!');

			// });

			//NEW CODE
			House.findOneAndUpdate({_id: house._id}, {$push: {users: user.id}}, function(err, house) {
				if(err) console.log(err);
				console.log("HOUSE: "+house);
				console.log("HOUSE.ID: "+house.id);
				console.log("HOUSE._ID: "+house._id);
				console.log("USER: "+user);
				console.log("USER.ID: "+user.id);
				console.log("USER._ID: "+user._id);
			});
			//

			User.findOneAndUpdate({ email: user.email }, {house: house.id}, function(err, user) {
						if(err) console.log(err);
						// console.log(user);
			});
		}
	});
});

//JOIN HOUSE
router.post('/join', function(req, res, next){
	console.log("house post (join) route called, req.body: "+ req.body);
	var user = req.body.user;

	House.findOneAndUpdate({_id: req.body.houseId}, {$push: {users: user.id}}, function(err, house) {
		if(err) console.log(err);
		console.log("HOUSE: "+house);
		// console.log("HOUSE.ID: "+house.id);
		// console.log("HOUSE._ID: "+house._id);
		console.log("USER: "+user);
		console.log("USER.ID: "+user.id);
		// console.log("USER._ID: "+user._id);
	});

	User.findOneAndUpdate({ email: user.email }, {house: req.body.houseId}, function(err, user) {
		if(err) console.log(err);
		console.log(user);
	});

});

module.exports = router;