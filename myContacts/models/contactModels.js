const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({  //mongoose의 객체 스키마 생성
    name : {
        type: String, 
        required: true
    },
    email : {
        type: String,

    },
    phone : {
        type: String,
        required : [true , "전화번호는 꼭 기입해주세요"]
    }
    
},{timestamps : true})

//스키마도 모델로 변환을 해줘야 사용가능 -> mongoose.model() 사용
//mongoose.model(모델명, 스키마명)
const Contact = mongoose.model("Contact",contactSchema);
module.exports = Contact;