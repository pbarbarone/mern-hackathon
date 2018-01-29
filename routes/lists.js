require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var House = require('../models/house');

//Post new chore route
router.post('/create', function (req, res, next){
	console.log('post route firing', req.body.task, req.body.roommate, req.body.date);
	// House.findOneAndUpdate({_id: house._id}, function(err, chore){
		// if(err) console.log(err);
		// console.log('house?  '+ house._id)
	// });

	res.send('create chore route reached');
	console.log('create chore console log');
})



// Delete chore route




//Post new shopping item




//Delete shopping item




















module.exports = router;