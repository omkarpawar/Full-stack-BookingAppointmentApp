const express = require('express');
const Booking = require('../models/booking');

const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const booking = await Booking.findAll();
        res.json({success:true,booking});
    }catch(error){
        console.error(error);
    }
});

router.post('/',async(req,res)=>{
    try{
        const{name,phone,email}=req.body;
        const booking = await Booking.create({name, phone, email});
        res.status(201).json({success:true,booking});
    }catch (error){
        console.error(error);
    }
});


module.exports=router;