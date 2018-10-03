
function greet(callback)   // parameter can be any name
{
    console.log('Hello!');
    var data = {
        name:'John  Doe'
    }
    callback(data);
}

greet(function(data){
    console.log('Call back was invoked');
    console.log(data);
})

greet(function(data){
    console.log('A differenct Call back was invoked');
    console.log(data.name);
})