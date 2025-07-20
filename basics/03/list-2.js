// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)

const fs = require('fs');
fs.readdir("./",(err,files) => {  //fs.read directory 는 (현재위치 , callback)를 매개 변수 받음
    if(err){
        console.log(err);
    }
    console.log(files);
});