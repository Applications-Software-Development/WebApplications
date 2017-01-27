/*
* Author: OnRails Software Development Team
* Updates:
* - Miguel Santos V1
*
*/

/*https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers*/
var http = require('http');

/*
 * http.createServer([requestListener])
 * Returns: <http.Server>
 *
 */
var server = http.createServer(function(request, response){

   /* response.writeHead(statusCode[, statusMessage][, headers]) */
    response.writeHead(200, {"Content-Type": "text/html"});

    if(request.url == '/'){
      response.write("<h1>Home Page</h1>");
    } else if (request.url == '/Math') {
      response.write("<h1>Math Page</h1>");
    } else if (request.url == '/Programming') {
      response.write("<h1>Programming Page</h1>");
    } else {
      response.write("<h1>Ups ... page not found</h1>");
    }
    /*This method signals to the server that all of the response headers and body have been sent*/
    response.end();
});

/*
 * server.listen([port][, hostname][, backlog][, callback])
 *
 */
server.listen(1700, function() {
    console.log('Backend in NodeJS is running in http://localhost:'+ server.address().port)
});
