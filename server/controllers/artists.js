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
	}
	// END this.index
	////////////////////////////////////////



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

////////////////////////////////////////
// Create new instance of artistsController
module.exports = new artistsController();