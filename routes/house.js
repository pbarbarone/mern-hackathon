require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var House = require('../models/house');

//CREATE HOUSE
router.post('/create', function(req, res, next){
	var user = req.body.user;
	console.log("house post (create) route called, req.body: "+ req.body.name);
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
						// console.log(user);
						res.json(user);
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
		// console.log("HOUSE: "+house);
		// console.log("HOUSE.ID: "+house.id);
		// console.log("HOUSE._ID: "+house._id);
		// console.log("USER: "+user);
		// console.log("USER.ID: "+user.id);
		// console.log("USER._ID: "+user._id);
	});
	User.findOneAndUpdate({ email: user.email }, {house: req.body.houseId}, function(err, user) {
		if(err) console.log(err);
		res.json(user);
	});
});


// //DELETE ROOMMATE FROM HOUSE
// router.delete('/delete/roommate/:id', function (req, res, next){
// 	House.users.findOneAndRemove()
// })

//DELETE HOUSE
// router.delete('/delete/:id', function (req, res, next){
// 	House.findOneAndRemove({_id: req.params.id}, function(err){
// 		if(err) return console.log(err);
// 	})
// 	res.redirect('/');
// })

module.exports = router;