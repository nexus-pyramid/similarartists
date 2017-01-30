<<<<<<< HEAD
var mongoose = require('mongoose');
var Artist = mongoose.model('Artist');
function artistsController(){
	//View all users
	console.log('in the artists controller')
	this.index = function(req,res){
		console.log( 'in the index method')
		Artist.find({}).exec(function(err, artists){
			if (err){
				res.sendStatus(404);
			} else {
				console.log(artists);
				res.render("index.ejs", {artists: artists});
			}
		})
	}
	this.sketch = function(req,res){
		console.log( 'in the sketch method')
		Artist.find({}).exec(function(err, artists){
			if (err){
				res.sendStatus(404);
			} else {
				console.log(artists);
				res.render("artist.html", {artists: artists});
			}
		})
=======
////////////////////////////////////////
//Define artistsController
//// This controller will be used for interacting with the API
function artistsController(){

	////////////////////////////////////////
	// Import JSON
	var data  = require('../data/artists.json')
	////////////////////////////////////////




	////////////////////////////////////////
	// The base URL route
	this.index = function(req,res){ 
		res.json("Maybe load some links here...");
>>>>>>> refs/remotes/danielkouba/master
	}
	// END this.index
	////////////////////////////////////////


<<<<<<< HEAD
	// this.getOne = function(req,res){
	//
	// 	for (each in data) {
	// 		if (data[each].name.toLowerCase() == req.params.artistname.toLowerCase()) {
	// 			res.json(data[each]);
	// 		}
	// 	}
	// 	res.json(req.params.artistname);
	// }

=======

	////////////////////////////////////////
	// '/artist' route
	//// Loads the entire JSON file
	this.getAll = function(req,res){ 
		res.json(data);
	}
	// END this.getAll
	////////////////////////////////////////


	////////////////////////////////////////
	// '/artist/:artistname' route
	//// Loads a single artist entry
	this.getOne = function(req,res){
		// Did we already create a response?
		var responseSent = false;

		//Iterate through JSON data
		for (each in data) {
			//If data.name equals request parameter
			if (data[each].name.toLowerCase() == req.params.artistname.toLowerCase()) {
				res.json(data[each]); // Send response
				responseSent = true;  // Set boolean to True
			} // If
		} // For
>>>>>>> refs/remotes/danielkouba/master

		// If we haven't sent a response
		//// Spit out the request parameter
		if (!responseSent){
			res.json("Couldn't find artist: " + req.params.artistname);	
		}	
	}
	// END this.getOne
	////////////////////////////////////////

}
// END artistsController
////////////////////////////////////////

<<<<<<< HEAD
module.exports = new artistsController();
=======
////////////////////////////////////////
// Create new instance of artistsController
module.exports = new artistsController();
>>>>>>> refs/remotes/danielkouba/master
