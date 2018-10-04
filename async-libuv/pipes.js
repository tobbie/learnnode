var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet1.txt');

var writable = fs.createWriteStream(__dirname + '/greet1copy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet1.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);

readable.on('open', function(){
    console.log('File is open now');
})

readable.on('close', function(){
    console.log('File is closed now');
})