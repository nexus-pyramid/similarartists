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
	}


	// this.getOne = function(req,res){
	//
	// 	for (each in data) {
	// 		if (data[each].name.toLowerCase() == req.params.artistname.toLowerCase()) {
	// 			res.json(data[each]);
	// 		}
	// 	}
	// 	res.json(req.params.artistname);
	// }



}

module.exports = new artistsController();
