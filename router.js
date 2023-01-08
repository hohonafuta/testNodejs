
function route(handle, pathname, response) {
    console.log('about to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        // response로 응답처리하는 로직을 지우고 대신 response 객체를 route() 함수로 넘깁니다.
        handle[pathname](response);
    } else {
        console.log('no request handler found for ' + pathname);
        response.writeHead(404, {'Content-Type' : 'text/plain'});
        response.write('404 Not found');
        response.end();
    }
}

exports.route = route;