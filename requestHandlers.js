
// router.js 에서는 넘겨받은 response 객체를 다시 handle 함수에 넘깁니다. 
// 적절한 handler가 없는 경우에는 여기서 직접 응답처리합니다.
function view(response) {
    console.log('request handler called -->; view');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write("Hello View");
    response.end();
}

function create(response) {
    console.log('request handler called -->; create');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Create');
    response.end();
}

var handle = {}; // javascript object has key:value pair.
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;

// 모듈의 또 다른 특징은 함수를 export 하지 않고 자바스크립트 객체를 
// export 하였다는 점입니다. router 에서는 수많은 요청 path 에 따라 
// 적절한 handler를 결정하여야 하는데 이는 수많은 if... else 코드가 발생할 개연성을 내포하고 있습니다. 
// 따라서 key:value 쌍으로 이루어진 객체를 제공하여 
// router가 handler를 쉽게 식별할 수 있게 합니다.
// 따라서 export 하는 handle 객체는 요청 path 를 key로 하고 처리 함수를 value로 가지고 있는 것입니다.
exports.handle = handle;
