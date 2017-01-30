var path		= require('path'),
	artists		= require('../controllers/artists.js');


module.exports = function(app){
	app.get('/', artists.index);  	//Create a new user
	app.get('/artist', artists.sketch);  	//Create a new user	
}
