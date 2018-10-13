var http = require('http');

var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/')
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var html = fs.readFileSync(__dirname +'/index.html', 'utf8');
        var message = 'sample text';
        html = html.replace('{message}', message);
        res.end(html);

    }
    else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var obj = {
            firstname : 'Sam',
            lastname : 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404);
        res.end()
    }
     
}).listen(1338, '127.0.0.1');