////////////////////////////////////////
// Require Dependencies
var path		= require('path'),
	artists		= require('../controllers/artists.js');


////////////////////////////////////////
// Routes
module.exports = function(app){
<<<<<<< HEAD
	app.get('/', artists.index);  	//Create a new user
	app.get('/artist', artists.sketch);  	//Create a new user	
}
=======
	app.get('/', artists.index); 					// Base Route
	app.get('/artist', artists.getAll);  			// Base API Route
	app.get('/artist/:artistname', artists.getOne); // API w/ Param Route
}
// END Routes
////////////////////////////////////////
>>>>>>> refs/remotes/danielkouba/master
