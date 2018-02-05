require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var House = require('../models/house');

//CREATE HOUSE
router.post('/create', function(req, res, next){
	var user = req.body.user;
	House.create({
		name: req.body.name
	}, function(err, house){
		if(err) {
			console.log('DB error', err);
		}
		else {
			House.findOneAndUpdate({_id: house._id}, {$push: {users: user.id}}, function(err, house) {
				if(err) console.log(err);
			});
			User.findOneAndUpdate({ email: user.email }, {house: house.id}, function(err, user) {
						if(err) console.log(err);
						res.json(user);
			});
		}
	});
});

//JOIN HOUSE
router.post('/join', function(req, res, next){
	var user = req.body.user;
	House.findOneAndUpdate({_id: req.body.houseId}, {$push: {users: user.id}}, function(err, house) {
		if(err) console.log(err);
	});
	User.findOneAndUpdate({ email: user.email }, {house: req.body.houseId}, function(err, user) {
		if(err) console.log(err);
		res.json(user);
	});
});


module.exports = router;