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
			console.log(user.id);
			console.log('house id', house.id)
			console.log(house);
			// house.users.push(user.id);
			// house.save(function (err) {
  	// 			if (!err) console.log('Success!');
			// });
		}
	})
});

router.post('/join', function(req, res, next){
	console.log("house post (join) route called, req.body: "+ req.body);
});

module.exports = router;