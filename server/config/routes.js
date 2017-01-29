////////////////////////////////////////
// Require Dependencies
var path		= require('path'),
	artists		= require('../controllers/artists.js');


////////////////////////////////////////
// Routes
module.exports = function(app){
	app.get('/', artists.index); 					// Base Route
	app.get('/artist', artists.getAll);  			// Base API Route
	app.get('/artist/:artistname', artists.getOne); // API w/ Param Route
}
// END Routes
////////////////////////////////////////