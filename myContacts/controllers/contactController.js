//getting all contacts
// get /contacts
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");


const getAllContacts = asyncHandler(async(req,res) => {
    const contact = await Contact.find();
    res.json(contact);
});
const getContacts = asyncHandler(async(req,res)=> {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
} )


const createContacts = asyncHandler(async(req,res) => {
    console.log(req.body);
    const {name,email,phone}= req.body;
    if(!name || !email || !phone){
        return res.send("필수 값이 입력되지 않았습니다.");
    }
    const contact = await Contact.create({ //contact라는 모델에 create함수 await(비동기처리)
        name, email, phone
    }); 
    res.send('Create Contacts')
})

const updateContacts = asyncHandler(async(req,res) => {
    const id = req.params.id;  //요청.파라미터.id 를 id에 저장 
    const {name, email, phone} = req.body;  // name,email,phone 변수에 req.body 에서 찾아서 할당
    const contact = await Contact.findById(id); //findById 함수를 써서 id에 해당하는 값을 찾고 contact에 할당
    if (!contact)  {
        throw new Error("Contact not found.");
    }
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    contact.save();
    res.json(contact);
   
})

const delContacts = asyncHandler(async(req,res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if(!contact){
        throw new Error("Contact not found");
    }
    await Contact.deleteOne(id);
    res.send(`Contact deleted\n${contact}`);

})

module.exports ={getAllContacts, createContacts, updateContacts, delContacts, getContacts};