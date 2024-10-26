const express = require ('express');
const { addTransection, getAllTransection } = require('../controllers/transectionCtrl');

//router obj
const router = express.Router();

//routes
//add transection Post
router.post('/add-transection', addTransection);

//get transections
router.get("/get-transection", getAllTransection);

module.exports=router;