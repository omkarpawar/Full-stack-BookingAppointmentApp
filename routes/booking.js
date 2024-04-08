const express = require('express');
const Booking = require('../models/booking');
const userPost = require('../controllers/booking');
const userGet = require('../controllers/booking');
const deleteUser = require('../controllers/booking');

const router = express.Router();

router.get('/',userPost.adduser);

router.post('/',userGet.getuser);
// Delete a booking by ID
router.delete('/:id', deleteUser.userdelete);


module.exports=router;