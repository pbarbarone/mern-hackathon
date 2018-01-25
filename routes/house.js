require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var House = require('../models/house');

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
			console.log(user.id);//working
			console.log('house id', house.id)
			console.log(house);
			house.users.push(user.id)///this works
			// console.log(house.users.length + "see colin????");
			// house.save(function (err) {
			// 	console.log(err);
  	// 			if (!err) console.log('Success!');

			// });
			User.findOneAndUpdate({ email: user.email }, {house: house.id}, function(err, user) {
						if(err) console.log(err);
						console.log(user);
			});
		}
	});
});

router.post('/join', function(req, res, next){
	console.log("house post (join) route called, req.body: "+ req.body);
});

module.exports = router;