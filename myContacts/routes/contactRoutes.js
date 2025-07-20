//미들웨어 실습
const express = require("express");
const router = express.Router();
const {getAllContacts, createContacts, updateContacts, delContacts, getContacts} = require('../controllers/contactController')

//체이닝
router.route("/")  //루트 경로
.get(getAllContacts)
.post(createContacts) 
.put(updateContacts)
.delete(delContacts)


router.route("/:id")
.get(getContacts)
.post(createContacts) 
.put(updateContacts)
.delete(delContacts)

module.exports = router;