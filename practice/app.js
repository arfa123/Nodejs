var http = require('http');

function requestHandler(request,response){
    console.log("In comes a request to: ", request.url);
    response.write('<h1>hello world</h1>');
}

var server = http.createServer(requestHandler);
server.listen(3000, function(){
    console.log("running serveer");
});