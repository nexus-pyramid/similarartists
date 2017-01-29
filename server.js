"use strict";

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
app.use(bp.urlencoded({extended:true}));
app.use(bp.json({extended:true}));

////////////////////////////////////////
//Setting up views route for express
app.use(express.static(path.join(root,'views')));
app.set('view engine', 'ejs');

////////////////////////////////////////
//Require Routes
require("./server/config/routes.js")(app);

////////////////////////////////////////
//Start server
app.listen(port, function(){
	console.log('Step 04: Server running on port: '+port)
})