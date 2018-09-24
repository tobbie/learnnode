
var Emitter = require('events');
var eventsConfig = require('./config').events;


var emtr = new Emitter();

emtr.on(eventsConfig.GREET, function(){
    console.log('Somewhere, someone said hello.');
})


emtr.on(eventsConfig.GREET, function(){
    console.log('A greeting occured');
})

console.log('Hello!');

emtr.emit(eventsConfig.GREET);

/** 
var arr = [];
arr.push(function(){
    console.log('Hello at here 1');
});

arr.push(function(){
    console.log('Hello at here 2');
})

arr.push(function(){
    console.log('Hello at here 3');
})

arr.forEach(function(item){
    item();
})

**/
