var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet1.txt', {encoding : 'utf8',
                             highWaterMark: 16 *1024})

var writable = fs.createWriteStream(__dirname + '/greet1copy.txt')

readable.on('data', function(chunk){
    console.log(chunk.length);
    writable.write(chunk);
})

readable.on('open', function(){
    console.log('File is open now');
})

readable.on('close', function(){
    console.log('File is closed now');
})