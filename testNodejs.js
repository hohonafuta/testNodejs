
/* // 1번째 방법
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
// */

////////////////////////////////////////////////////////////////////////////


// 2번째 방법
//onRequest() 함수를 이벤트 리스너로 등록  
//'request' 이벤트에 대한 Callback 역할을 한다.
var http = require('http');

function onRequest(request , response) {
    console.log("request received !");
    response.writeHead(200, {'Conmtent-Type': 'text/html'});
    response.end('Hello World');

}
// http.createServer(onRequest).listen(1337, '127.0.0.1');
http.createServer(onRequest).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

////////////////////////////////////////////////////////////////////////////

/* // 3번째 방법
// addListener() 를 이용하면 
//요청 이벤트인 'request' 와 클라이언트 접속 이벤트인 'connection' 를 따로 처리할 수 있음
var http = require('http');
var server = http.createServer();

server.addListener('request', function (request, response) {
    console.log('requested...');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello nodejs');
    response.end();
});

server.addListener('connection', function(socket){
    console.log('connected...');
});

server.listen(1337);
console.log('Server running at http://127.0.0.1:1337/'); 
*/

////////////////////////////////////////////////////////////////////////////


