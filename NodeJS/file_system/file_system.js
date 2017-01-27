/*
* Author: OnRails Software Development Team
* Updates:
* - Miguel Santos V1
*
*/

/*
* Packages (Installed by default)
*/
var http = require('http');
var file = require('fs');

/*
* Directories:
*/
var file_root = 'files/'
var path = file_root + 'write_file.txt'

/*
* Functions to read and write a file in system
*
*/
file.readFile('files/read_file.txt', function(err, data) {
  if(err) {
    console.log('[Error] Criating file !!!');
    throw err;
  }
  console.log(data.toString());
});

file.exists(path, function(file_exists) {
  if(!file_exists){
    file.writeFile('files/write_file.txt', 'Beakup file header',function(err) {
      if(err){
          console.log('[Error] Criating file !!!');
          throw err;
      }
      console.log('[Info]Beakup created.');
    });
  }else{
    console.log('[Warning]Beakup already created !');
  }
});

/*
*
* Reuse hello world using file system approach for history implementation
*
*/
var server = http.createServer(function(request, response){

   /* response.writeHead(statusCode[, statusMessage][, headers]) */
    response.writeHead(200, {"Content-Type": "text/html"});

    if(request.url == '/'){
      response.write("<h1>Home Page</h1>");
      response.write("<h3>/Math</h3>");
      response.write("<h3>/Programming</h3>");
    } else if (request.url == '/Math') {
      response.write("<h1>Math Page</h1>");
    } else if (request.url == '/Programming') {
      response.write("<h1>Programming Page</h1>");
    } else {
      response.write("<h1>Ups ... page not found</h1>");
    }
    /*Append mode*/
    var history = file.createWriteStream('files/history.txt', {flags: 'a'});
    history.write(request.url + '\n');

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
