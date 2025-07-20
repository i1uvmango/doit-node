// HTML 페이지 서빙하기  (결과 비교 파일 : 04\results\server-4.js)


const http = require('http');

const server = http.createServer((req, res) => { //서버 만들기
    res.setHeader("Content-type", "text/plain");
    res.write("Hello Node");
    res.end();
});

server.listen(3000,() => {
    console.log("서버 실행중");
}); 