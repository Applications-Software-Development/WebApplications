var fs = require('fs');
var archiver = require('archiver');
var my_definitions = require('./definitions');
var name = my_definitions.zip_name;
name = name + '.zip';

var output = fs.createWriteStream(name);
var zipArchive = archiver('zip');

output.on('close', function() {
	    console.log('File ' + name + ' compressed.');

    console.log(zipArchive.pointer() + ' total bytes');
});

zipArchive.pipe(output);

zipArchive.directory('folder_to_zip', true, { date: new Date() });

zipArchive.finalize(function(err, bytes) {

    if(err) {
      throw err;
    }

});