var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('Requesting url is : ' + req.url);
	res.writeHead(200, {'Content-Type' : 'text/html'})
	var myReadStream = fs.createReadStream(__dirname + '/index.html');
	myReadStream.pipe(res);
})
var ser = http.createServer(function(req, res){
	console.log('Requesting url is : ' + req.url);
	res.writeHead(200, {'Content-Type' : 'application/json'})
	var object = {
		name : 'Chris',
		age : '34',
		hobby : 'Photography'
	}
	res.end(JSON.stringify(object));
})

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000!!');
ser.listen(2000, '127.0.0.1');
console.log('Listening to port 2000!!');

var myReadableStream = fs.createReadStream('../readme.txt');

myReadableStream.on('data', (dataBlock) => {
	console.log('Incoming chunk of data');
	console.log(dataBlock);
});