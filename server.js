"use strict";

var express = require('express'),
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

app.use(bp.urlencoded({extended:true}));
app.use(bp.json({extended:true}));
app.use(express.static(path.join(root,'client')));
app.use(session(sessionConfig));

//include routes in your app
require("./server/config/routes.js")(app);

//Start server
app.listen(port, function(){
	console.log('Step 04: Server running on port: '+port)
})