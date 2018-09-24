var eventEmitter = require('events');
var util = require('util');

function Greetr()
{
    this.greeting = "Hello here";
}

util.inherits(Greetr, eventEmitter);


Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();
greeter1.on('greet', function(data){
    console.log('Someone greeted ' + data);
})

greeter1.greet('Toby');