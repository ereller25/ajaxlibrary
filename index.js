
/*
var app = require('express')();

	var httpListeningTool = require('http').Server(app);
	app.get('/', function(request, response){
		response.send('<h1>Hello World</h1>')
	});

	httpListeningTool.listen(3000, function(){
		console.log('listening on *:3000')	
	});
	*/

//Accessing express module
var app = require('express')();

//Using http - module that is innate to Node.JS
//('http') - built in node module - we're passing the app variable 
//through the built in Server function
var http = require('http').Server(app);


//app - part of express
// '/' - find root directory, doesn't change but "/index.html" might depending on file location
//app.get - getting a file to send it some where - res.sendFile() finds it
app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html");
});
//listen - node function
//Prints to the console.
http.listen(3000, function(){
	console.log('listening intently on *:3000');
});










