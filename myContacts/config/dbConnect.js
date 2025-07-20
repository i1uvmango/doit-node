const mongoose = require('mongoose');
require('dotenv').config(); 

//비동기 처리 async, await
const dbConnect = async() => {
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECT); //mongoose라는 변수로 connect 실행 (DB연결 주소)
        console.log("DB Connected");
    }
    catch(err){
        console.log(`DB Connection Error\n ${err}`);
    }
}
module.exports = dbConnect;