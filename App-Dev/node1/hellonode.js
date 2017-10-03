//load HTTP module
var http = require("http");

//create  HTTP server and listen on port 8000 for requests
http.createServer(function(request,response){
	//set the response HTTP header with HTTP status and content type
	response.writeHead(200,{'Content-Type': 'text/plain' });

	// send the response body "Hello world"
	response.end('Hello World\n');

}).listen(8000);

//print URL for accessing server
console.log('server running at http://127.0.0.1:8000/');