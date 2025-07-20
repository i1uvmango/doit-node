// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)


const http = require('http');

const server = http.createServer((req, res) => { //req: request , res: response
    //req.url 요청 경로
    //req.method : 요청 방식

    const {url, method} =req; 
  
    res.setHeader("Content-type", "text/plain");
    if(method === "get" && url === "/home"){
        res.write("home");
        res.end();}

    else if (method === "get" && url === "about"){
        res.end('about');
    
    }
    else{
        res.end('not found');
    }

});

server.listen(3000,() => {
    console.log("서버 실행중");
}); 