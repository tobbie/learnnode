var greet = require('./greet');
var util = require('util');

greet.english();
greet.spanish();

var name = 'Toby';
var greeting = util.format('Hello, %s', name);
util.log(greeting);