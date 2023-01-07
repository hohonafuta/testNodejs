//Http Server는 다양한 사용자 요청에 응답해야 합니다. 
//예를 들면 조회를 위한 요청일 수 도 있고 저장을 위한 요청일 수도 있습니다. 
//이러한 요청들은 server.js가 수행하기에는 너무 범위가 넓습니다. 
//따라서 우리는 다양한 요청을 식별하는 router 모듈을 생각해 볼 수 있습니다.

// 만들어진 router 모듈은 server.js 가 직접 로딩할 수도 있으나 
// server 동작의 유연성을 확보하기 위하여 server와 router와의 관계를 느슨하게 할 필요가 있습니다. 
// 따라서 index.js에서 router 모듈을 로딩하고 route() 함수를 
// server에게 넘겨서 실행하는 방법을 사용하기로 합니다

// 이러한 방법을 의존성 주입(Dependency Injection) 이라고 합니다. 
// 이 방법의 장점은 관계가 느슨하므로 server 코드의 변경 없이 router 함수를 교체할 수 있다는 점입니다. 
// server는 단지 전달된 router를 실행하기만 할 뿐 router가 무엇인지 관심이 없습니다.

// 따라서 우리는 router.js 모듈을 index.js에서 로드하고 route() 함수를 server로 넘깁니다.

function route(pathname) {
    console.log('about to route a request for ' + pathname);
}

exports.route = route;
