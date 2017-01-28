var path		= require('path'),
	artists		= require('../controllers/artists.js');


module.exports = function(app){
	app.get('/', artists.index);  	//Create a new user	
	app.get('/artist/:artistname', artists.getOne);  	//Create a new user	
}