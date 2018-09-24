/** 
var a = 1;
var b = 2;
var c = a+ b;

console.log(c);
**/

function greet()
{
    console.log('Hi');    
}

greet();

function logGreeting(fn)
{
    fn();
}

logGreeting(greet);

var greetMe = function()
{
    console.log("Hi Tobi");
}

greetMe();

logGreeting(greetMe)

logGreeting(function(){
    console.log('Hello Tobi!!!');
})

var person = {
    firstname : 'John',
    lastname : 'Doe',
    greet : function()
    { 
        console.log("Hello " +this.firstname + ' ' + this.lastname);
    }
}

person.greet();
console.log(person['firstname']);