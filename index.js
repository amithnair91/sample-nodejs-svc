var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("The nodejs app is alive! Enjoy your Day!");

});

var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);