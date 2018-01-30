require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var House = require('../models/house');



// Add bill
// bill will have key that denotes what the bill is for, with an integer as amount 
// will bill show who has or has not paid yet? might just be assumd to take place outside of app

//Remove bill
//bill will not be deleted, but cached to be referred to at a later time. 
// need a nested object of finished bills? might be a stretch goal

//Post bill history
//to be rendered ?? absolute stretch goal. would only fit for utilities










module.exports = router;