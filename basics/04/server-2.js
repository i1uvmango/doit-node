// 요청 객체(req) 살펴보기  (결과 비교 파일 : 04\results\server-2.js)

const http = require('http');

const server = http.createServer((req, res) => { //서버 만들기
    console.log(req);
});

server.listen(3000,() => {
    console.log("r서버 실행중");
});  //3000번 포트 지정, 내가 직접 요청을 해야함