const express = require("express");
const { testController } = require("../controllers/testController");

//router object
const router = express.Router();

//routes
router.get("/", testController);

//export
module.exports = router;
// const express=require('express')

// const{testController}=require('../controllers/testController')
// //router object
// const router=express.Router()

// //router

// router.get('/',testController);

// module.exports=router;

