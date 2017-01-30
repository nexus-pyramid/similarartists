"use strict";

<<<<<<< HEAD
var mongoose = require( 'mongoose' ),
	  express = require('express'),
		session = require('express-session'),
		bp		= require('body-parser'), 		//request body parser
		path 	= require('path'),				//easy file path
		root	= __dirname,					//current file path
		port 	= process.env.PORT || 8000,		//define port
		app 	= express();


//configure session
var sessionConfig = {
	  secret:'CookieMonster',
		resave:false,
		saveUninitialized:true,
		name:'myCookie',
		cookie:{
		secure: false,
		httpOnly:false,
		maxAge: 3600000
	}
}

=======
////////////////////////////////////////
// Require Dependencies
var express = require('express'),
	bp		= require('body-parser'), 		//request body parser
	path 	= require('path'),				//easy file path
	root	= __dirname,					//current file path
	port 	= process.env.PORT || 8000,		//define port
	app 	= express();

////////////////////////////////////////
// Body Parser setup
>>>>>>> refs/remotes/danielkouba/master
app.use(bp.urlencoded({extended:true}));
app.use(bp.json({extended:true}));

<<<<<<< HEAD
app.set("views", __dirname + "/client/views");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//include routes in your app
require("./server/config/mongoose.js");
=======
////////////////////////////////////////
//Setting up views route for express
app.use(express.static(path.join(root,'views')));
app.set('view engine', 'ejs');

////////////////////////////////////////
//Require Routes
>>>>>>> refs/remotes/danielkouba/master
require("./server/config/routes.js")(app);

////////////////////////////////////////
//Start server
app.listen(port, function(){
	console.log('Step 04: Server running on port: '+port)
})
