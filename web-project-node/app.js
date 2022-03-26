var http = require('http');

var myServer = http.createServer(function(req, res){
    res.write('<h1>Hello World!!</h1>')
    res.end();
});

myServer.listen(3000);
console.log('go to port 3000');