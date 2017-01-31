if (process.argv.length <= 2) {
    console.log("You need to specify a file.");
    process.exit(-1);
}

var crypto = require('crypto');
var fs = require('fs');
var filename = process.argv[2]; 

var md5_var = crypto.createHash('md5');


if (fs.existsSync(filename)) { // check if the file exists
	var my_file = fs.ReadStream(filename);
}

my_file.on('data', function(d) {
  md5_var.update(d);
});

my_file.on('end', function() {
  var file_md5 = md5_var.digest('hex');
  console.log('MD5 of file: ' + filename + '\n' + file_md5);
});