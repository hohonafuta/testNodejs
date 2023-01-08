// 단위 JS 모듈화 
// server.js 모듈을 사용하는 index.js
var server = require('./server');   //index.js는 server.js 모듈을 로드함
                    //require() 전역 함수를 사용하면 .js 파일로 작성된 모듈을 로드할 수 있음
var router = require('./router');

var requestHandlers = require('./requestHandlers');

server.start(router.route, requestHandlers.handle);
