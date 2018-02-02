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
router.delete('/chore/delete', function(req, res, next){
	console.log("99999999 DELETE ROUTE CALLED"+req.body.id);
	// House.chores.findByIdAndRemove(req.body.id, function(err){
	// 	if(err) return res.send(err);
	// 	console.log('task completed');
	// });
	res.send("yo!");
});


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
		console.log('what the fuck we lookin at', house);
		res.json(house);
	});	
});



//Delete shopping item
// router.delete('/delete/:id', function(req, res, next){
// 	House.shoppingItems.findOneAndRemove({task: req.params.task}, function(err){
// 		if(err) return res.send(err);
// 		console.log('task completed');
// 	});
// 	res.redirect('/')
// });

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

router.post('/memo/create', function (req, res, next){
	console.log('memo post route firing!');
	console.log("HELENS "+req.body.subject, req.body.content, req.body.date);
	House.findOneAndUpdate({_id: req.body.house}, 
		{$push: {memos: {
		subject: req.body.subject,
		content: req.body.content,
		date: req.body.date
	}}},
	function(err, house){
		if(err) res.send(err);
		console.log('what the fuck we lookin at PETER', house);
		res.json(house);
	});	
});


















module.exports = router;