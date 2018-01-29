require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var House = require('../models/house');

//Post new chore route
router.get('/create', function (req, res){

	res.send('create chore route reached');
	console.log('create chore console log');
})



// Delete chore route




//Post new shopping item




//Delete shopping item




















module.exports = router;