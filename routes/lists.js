require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
var House = require('../models/house');

//Post new chore route
router.post('/chore/create', function (req, res, next){
	console.log('post route firing', req.body.task, req.body.roommate, req.body.date, req.body.house);
	House.findOneAndUpdate({_id: req.body.house}, 
		{$push: {chores: {
		task: req.body.task,
		user: req.body.roommateId,
		date: req.body.date,
		roommateName: req.body.roommateName}}},
	function(err, house){
		if(err) res.send(err);
		console.log('what the fuck we lookin at', house);
		res.json(house);
	});	
});

// Delete chore route
router.delete('/chore/delete', function(req, res, next) {
	House.findById(req.body.houseId, function(err, house){
		console.log("%%%%%%%%%%%"+house);
		house.chores.id(req.body.choreId).remove();
		house.save(function (err) {
  		if (err) return handleError(err);
  		console.log('the chore was removed');
  		res.json(house);
		});
	});
});

//Post new shopping list item route
router.post('/shopping/create', function (req, res, next){
	console.log('shopping post route firing', req.body.item, req.body.roommateId, req.body.date, req.body.house);
	House.findOneAndUpdate({_id: req.body.house}, 
		{$push: {shoppingItems: {
		item: req.body.item,
		user: req.body.roommateId,
		date: req.body.date,
		roommateName: req.body.roommateName}}},
	function(err, house){
		if(err) res.send(err);
		console.log('what the fuck we lookin at TAYLOR', house);
		res.json(house);
	});	
});

// Delete pantry item route
router.delete('/item/delete', function(req, res, next) {
	House.findById(req.body.houseId, function(err, house){
		console.log("%%%%%%%%%%%"+house);
		house.shoppingItems.id(req.body.itemId).remove();
		house.save(function (err) {
  		if (err) return handleError(err);
  		console.log('the item was removed');
  		res.json(house);
		});
	});
});

//Post new bill route
router.post('/bill/create', function (req, res, next){
	console.log('bill post route firing!', req.body.rent, req.body.utilities, req.body.dueDate, req.body.house);
	House.findOneAndUpdate({_id: req.body.house}, 
		{$push: {billPerUser: {
		rent: req.body.rent,
		utilities: req.body.utilities,
		dueDate: req.body.dueDate
	}}},
	function(err, house){
		if(err) res.send(err);
		console.log('what the fuck we lookin at COLIN', house);
		res.json(house);
	});	
});

//Edit bill route
router.post('/bill/update', function(req, res, next){
	console.log('bill post route firing!', req.body.rent, req.body.utilities, req.body.dueDate, req.body.house, req.body.billId);
	House.findById(req.body.house, function (err, house) {
  		// handle errors ..
  		var bill =  house.billPerUser.id(req.body.billId);
  		bill.rent = req.body.rent;
  		bill.utilities = req.body.utilities;
  		bill.dueDate = req.body.dueDate;
 		house.save(function (err) {
  		if (err) return handleError(err);
  		console.log('bill was updated');
  		res.json(house);
		});
	});
});


//Post new memo route
router.post('/memo/create', function (req, res, next){
	console.log('memo post route firing!');
	console.log("HELENS "+req.body.subject, req.body.content, req.body.roommateName, req.body.date);
	House.findOneAndUpdate({_id: req.body.house}, 
		{$push: {memos: {
		subject: req.body.subject,
		content: req.body.content,
		date: req.body.date,
		roommateName: req.body.roommateName
	}}},
	function(err, house){
		if(err) res.send(err);
		console.log('what the fuck we lookin at PETER', house);
		res.json(house);
	});	
});

module.exports = router;