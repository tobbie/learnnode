

var buf = Buffer.from('this is a test', 'utf8')
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());

buf.write('wo');
console.log(buf.toString());


var buffer = new ArrayBuffer(8);
var view  = new Int32Array(buffer);

