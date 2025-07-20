const express = require("express"); //express 모델 가져오기 // 얘는 외부 모델이라서 "express"이렇게 사용 
const dbConnect = require('./config/dbConnect'); //config폴더 속 dbConnect라는 모듈 import(require) //얘는 내부 모델이라 경로로 지정

const app = express(); //서버 실행

app.set("view engine","ejs");
app.set("views", "./views");
dbConnect();

//body-parser 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//모듈 import(require)
app.use("/contacts",require("./routes/contactRoutes"));


//app.js 실행
app.listen(3000,() => {
    console.log("서버 실행 중");
});

