// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require('path');

//join함수
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath); 

//경로만 추출
const dir = path.dirname(fullPath);
console.log(`fullPath의 경로는 : ${dir}`);

//파일 이름만 추출
const name = path.basename(__filename); //현재파일 경로 에서 basename(파일이름만)
console.log(`현재 경로의 파일이름은 : ${name}`);
console.log(`전체 경로의 위치는 : ${__filename}`);

// 확장자 빼는 법
const fn1 = path.basename(__filename, '.js');
console.log(`확장자를 뺀 이름(basename)은 : ${fn1}`);