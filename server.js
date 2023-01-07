//단위 JS 모듈화 
// server.js
// server.js 는 start() 실행시 route 함수를 넘겨 받으며 
//  'request' 이벤트가 발생할 때 마다 route 함수를 호출하여 요청을 식별하도록 합니다

var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname + ' received.');

        // route(pathname); // injected function call
        route(pathname,response); // injected function call

        //response.writeHead(200, {'Content-Type' : 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(1337);

    console.log('server has started.');
}
//Global 변수인 exports를 사용하여 start() 함수를 모듈로 등록한다.
exports.start = start;
